import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import AuthLayout from '../Ui/Layouts/AuthLayout';

const AuthRouter = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </AuthLayout>
  );
};

export default AuthRouter;
