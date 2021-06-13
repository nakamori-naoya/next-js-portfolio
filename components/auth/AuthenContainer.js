import React from 'react';
import useAuth from '../../hooks/useAuth';
import AuthenPresenter from './AuthenPresenter';

const AuthenContainer = () => {
  const {email, password, isLogin, setIsLogin, 
          inputEmail, inputPassword, authUser} = useAuth()

  return <AuthenPresenter 
    email={email} password={password} isLogin={isLogin} 
    setIsLogin={setIsLogin} inputEmail={inputEmail} 
    inputPassword={inputPassword} authUser={authUser} />
  ;
};
export default AuthenContainer;
