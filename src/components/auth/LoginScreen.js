// @ts-nocheck
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  startGoogleLogin,
  startLoginWithEmailAndPassword,
} from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {
  // @ts-ignore
  const { loading } = useSelector((state) => state.uiError);
  const dispatch = useDispatch();
  const [formValue, handleInputChange] = useForm({
    email: 'juan@email.com',
    password: '123222',
  });
  const { email, password } = formValue;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <h3 className="login-screen__title">Login Screen</h3>
      <form onSubmit={handleLogin}>
        <input
          className="login-screen__input"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="login-screen__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary button-block"
          disabled={loading}
          type="submit"
        >
          Login
        </button>
        <div className="login-screen__social-networks">
          <p>Login with social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/login-screen/register">
          create new account
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
