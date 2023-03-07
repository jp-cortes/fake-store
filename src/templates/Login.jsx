import React, { useRef } from 'react';
import '@styles/Login.module.scss';
import Logo from '@logos/logo_yard_sale.svg';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData =  new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    } 
    console.log(data);
    // if (data !== ''){
    //   return <Navigate to='/'/>

    // }
  }

  const createAccount = () => {
  
    return <Navigate to='/create-account' />
  }
    return (
      <>
        <main className="login_user">
          <section className="form_container">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />

            <form action="/" className="login_form" ref={form}>
              <label htmlFor="log-user" className="login_label">
                User email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email@example.com"
                className="login_input input_password_log"
                required
              />
              <label htmlFor="password" className="login_label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="login_input input_password_log"
                required
              />

              <button 
              onClick={handleSubmit}
              className="login_button login_button"
              >
                Log in
                </button>
              <a href="/recovery-password">Forgot password</a>
            </form>
            <button 
            
            className="secondary_button">Sign up</button>
          </section>
        </main>
      </>
    );

     
}

export default Login;