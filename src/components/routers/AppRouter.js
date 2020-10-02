import React, { useEffect, useState } from 'react';
import { Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { firebase } from '../../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [isCheckingAuthState, setIsCheckingAuthState] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsCheckingAuthState(false);
    });
  }, [dispatch, isCheckingAuthState, isAuthenticated]);

  if (isCheckingAuthState) {
    return <h1>loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuthenticated}
          />

          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isAuthenticated}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
