/* eslint-disable camelcase */
import React, {createContext, useCallback} from 'react';
import CoreServices from 'services/core';
import jwt_decode, {JwtPayload} from 'jwt-decode';

export interface AuthState {
  token: string,
  user: string
}

export interface AuthContextProps {
  signIn(email: string, password: string): Promise<void>
  signOut(): void
  auth: AuthState
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const getUser = (): AuthState => {
  const token = localStorage.getItem('@escambo:token');
  const user = localStorage.getItem('@escambo:user');

  if (token && user) {
    return {token: JSON.parse(token), user: JSON.parse(user)};
  }

  return {} as AuthState;
};

const AuthProvider: React.FC = ({children}) => {
  const [auth, setAuth] = React.useState<AuthState>(getUser);

  const coreService = new CoreServices();

  const signIn = useCallback(async (email, password) => {
    const response = await coreService.getApi().post('auth', {
      email: email,
      password: password,
    });

    const {access_token: token} = response.data;
    const decoded: JwtPayload = jwt_decode(token);
    const user = decoded.sub;

    localStorage.setItem('@escambo:token', JSON.stringify(token));
    localStorage.setItem('@escambo:user', JSON.stringify(user));

    setAuth({token, user: user as string});
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@escambo:token');
    localStorage.removeItem('@escambo:user');
    setAuth({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{signIn, signOut, auth}}>
      {children}
    </AuthContext.Provider>
  );
};


export {AuthContext, AuthProvider};
