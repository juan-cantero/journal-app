// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/uiErrorActions';
import { startRegister } from '../../actions/authActions';

const RegisterScreen = () => {
  const { errorMsg, loading } = useSelector((state) => state.uiError);
  const dispatch = useDispatch();
  const [formState, handleInputChange] = useForm({
    name: 'juan',
    email: 'juan@email.com',
    password: '123',
    confirm: '123',
  });
  const { name, email, password, confirm } = formState;

  const handleRegister = (event) => {
    event.preventDefault();
    if (isFormValid()) dispatch(startRegister(email, password, name));
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError(`${email} is not a valid email`));
      return false;
    } else if (password !== confirm || password.length < 6) {
      dispatch(
        setError(
          'the passwords need to match and must be at least 6 charachters long '
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <div>
      <h3 className="register-screen__title">Register Screen</h3>
      <form onSubmit={handleRegister}>
        {errorMsg && <div className="alert-error">{errorMsg}</div>}
        <input
          className="register-screen__input"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="register-screen__input"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="register-screen__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="register-screen__input"
          type="password"
          placeholder="confirm"
          name="confirm"
          value={confirm}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary button-block mb-5"
          disabled={loading}
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
