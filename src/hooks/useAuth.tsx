import React from 'react';
import {AuthContext} from 'context/AuthContext';
import {AuthContextProps} from 'context/AuthContext';

function useAuth(): AuthContextProps {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

export default useAuth;
