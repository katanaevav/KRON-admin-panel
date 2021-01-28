import React from "react";

const SignIn = (props) => {

  return (
    <React.Fragment>
      <div className="user-page centering-block">

        <div className="sign-in">
        <img className="sign-in__logo" src="./img/big-logo.png" width="275" height="275" alt="Big logo" />
        <div className="sign-in__main">
          <h1 className="sign-in__title">Вход администратора</h1>
          <form action="#" className="sign-in__form">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email" name="user-email" id="user-email" />
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
            </div>
            <div className="sign-in__field">
              <button className="sign-in__btn" type="submit">Войти</button>
            </div>
          </form>
        </div>
        </div>

        </div>
    </React.Fragment>
  );
};


export default SignIn;