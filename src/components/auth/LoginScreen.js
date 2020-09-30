import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div>
      <h3 className="login-screen__title">Login Screen</h3>
      <form>
        <input
          className="login-screen__input"
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          className="login-screen__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <button type="submit">Login</button>
        <hr />
        <div className="login-screen__social-networks">
          <p>Login with social network</p>
          <div className="google-btn">
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
        <Link to="/login-screen/register">create new account</Link>
      </form>
    </div>
  );
};

export default LoginScreen;
