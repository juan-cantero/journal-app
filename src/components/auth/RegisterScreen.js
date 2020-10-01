import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <div>
      <h3 className="register-screen__title">Register Screen</h3>
      <form>
        <input
          className="register-screen__input"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="register-screen__input"
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          className="register-screen__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          className="register-screen__input"
          type="confirm"
          placeholder="confirm"
          name="confirm"
        />
        <button
          className="btn btn-primary button-block mb-5"
          disabled={false}
          type="submit"
        >
          register
        </button>

        <Link className="link" to="/register-screen/register">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
