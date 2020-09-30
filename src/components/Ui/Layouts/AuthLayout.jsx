import React from 'react';

const AuthLayout = (props) => {
  return (
    <div className="auth-layout__main">
      <div className="auth-layout__box-container">{props.children}</div>;
    </div>
  );
};

export default AuthLayout;
