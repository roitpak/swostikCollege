import { useState } from 'react';
import { UserContext } from './UserContext';
import authService from '../services/authService';

export function UserProvider({ children }) {
  const [hasUser, setHasUser] = useState(false);
  const onLogin = () => {
    setHasUser(true);
  };
  const onLogout = async () => {
    setHasUser(false);
    await authService.logOutUser();
  };
  return (
    <UserContext.Provider
      value={{
        hasUser: hasUser,
        onLogin,
        onLogout
        //someFuncition: someFunctionHere,
      }}>
      {children}
    </UserContext.Provider>
  );
}
