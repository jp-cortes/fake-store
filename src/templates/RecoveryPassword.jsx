import React from "react";
import { Navigate } from "react-router-dom";
import '@styles/RecoveryPassword.module.scss';
import EmailSvg from '@logos/email.svg';
import Logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {

  const loginPage = () => {
  
    return <Navigate to='/login' />
  }
    return (
      <>
        <main className="login_email">
          <section className="form_container_email">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
            <h1 className="title_email">Email has been sent!</h1>
            <p className="subtitle_email">
              Please check your inbox for instruction on how to reset the
              password
            </p>

            <div className="email_image">
              <img src={EmailSvg} alt="email_icon" />
            </div>
            <button 
            className="primary_email_button login_email_button">
              Login
            </button>

            <p className="resend">
              <span>Didn't receive the email?</span>
              <a href="*">Resend</a>
            </p>
          </section>
        </main>
      </>
    );
}

export default RecoveryPassword;