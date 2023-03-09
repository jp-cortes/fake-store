import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@assets/Logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';


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
  }
    return (
      <>
        <main className={styles['login_user']}>
          <section className={styles['form_container']}>
            <Image
              src={Logo}
              alt="logo"
              className={styles['logo']}
            />

            <form action="/" className={styles['login_form']} ref={form}>
              <label htmlFor="log-user" className={styles['login_label']}>
                User email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email@example.com"
                className={`${styles['login_input']} ${styles['input_password_log']}`}
                required
              />
              <label htmlFor="password" className={styles['login_label']}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className={`${styles['login_input']} ${styles['input_password_log']}`}
                required
              />

              <button 
             
              className={`${styles['login_button']} ${styles['login_button']}`}
              >
                Log in
                </button>
              <Link href="/recover-password">Forgot password</Link>
            </form>
            <Link
            href="/create-account" 
            className={styles['secondary_button']}>Sign up</Link>
          </section>
        </main>
      </>
    );

     
}

export default Login;