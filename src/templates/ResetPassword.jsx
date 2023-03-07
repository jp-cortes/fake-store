import React from "react";
import '@styles/ResetPasswords.module.scss';
import Logo from '@logos/logo_yard_sale.svg';

const ResetPassword = () => {
    return (
      <>
        <main className="forgot_password">
          <section className="form_container">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
              <label for="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input_password"
              />
            </form>

            <form action="/" className="form">
              <label for="new-password" className="label">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="*********"
                className="input input_password"
              />

              <input
                type="submit"
                value="Confirm"
                className="primary_button login_button1"
              />
            </form>
          </section>
        </main>
      </>
    );
} 
export default ResetPassword;