import React from "react";
import styles from'@styles/CreateAccount.module.scss';


const CreateAccount = () => {
    return (
      <>
        <main className={styles.create_account}>
          <section className={styles.form_account}>
            <h1 className={styles.title_account}>My account</h1>
            <div className={styles.responsive_page}>
              <form action="/" className={styles.form_name}>
                <label for="name" className={styles.label_name}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className={styles.input_name}
                />
              </form>

              <form action="/" className={styles.form_email}>
                <label for="email" className={styles.label_email}>
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email@example.com"
                  className={styles.input_email}
                />
              </form>

              <form action="/" className={styles.form_account}>
                <label for="password" className={styles.label_password}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className={styles.input_password}
                />
              </form>
            </div>

            <input
              type="submit"
              value="Create"
              className={styles.create_accountButton}
            />
          </section>
        </main>
      </>
    );
}

export default CreateAccount;