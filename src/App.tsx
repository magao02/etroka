import React from 'react';
import Routes from 'routes';
import GlobalStyle from 'styles';
import {Toaster} from 'react-hot-toast';
import {AuthProvider} from 'context/AuthContext';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Toaster />
    </React.Fragment>
  );
};

export default App;
