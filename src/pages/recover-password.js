import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmailSvg from '@assets/Logos/email.svg';
import Logo from '@assets/Logos/logo_yard_sale.svg';
import styles from '@styles/RecoverPassword.module.scss';

const RecoverPassword = () => {


    return (
      <>
        <main className={styles['login_email']}>
          <section className={styles['form_container_email']}>
            <Image
              src={Logo}
              alt="logo"
              className={styles['logo']}
            />
            <h1 className={styles['title_email']}>Email has been sent!</h1>
            <p className={styles['subtitle_email']}>
              Please check your inbox for instruction on how to reset the
              password
            </p>

            <div className={styles['email_image']}>
              <Image src={EmailSvg} alt="email_icon" />
            </div>
            <Link 
            href="/login"
            className={`${styles['primary_email_button']} ${styles['login_email_button']}`}>
              Login
            </Link>

            <p className={styles['resend']}>
              <span>Didn't receive the email? </span>
              <Link href="#">Resend</Link>
            </p>
          </section>
        </main>
      </>
    );
}

export default RecoverPassword;