import React from "react";
import '@styles/EditAccount.module.scss';

const EditAccount = () => {
    return (
      <>
        <main className="edit_account">
          <section className="form_edit_account">
            <h1 className="title_edit_account">My account</h1>
            <div className="responsive_page5">
              <form action="/" className="form_edit_name">
                <label for="edit_name" className="label_edit_name">
                  Name
                </label>
                <p className="value">Terry Bogard</p>
              </form>

              <form action="/" className="form_edit_email">
                <label for="edit_email" className="label_edit_email">
                  Email address
                </label>
                <p className="value">fatalfury@kof.com</p>
              </form>

              <form action="/" className="form_edit_password">
                <label for="edit_password" className="label_edit_password">
                  Password
                </label>
                <p className="value">********</p>
              </form>
            </div>

            <input
              type="submit"
              value="Edit"
              className="edit_accountButton edit_button"
            />
          </section>
        </main>
      </>
    );
}
export default EditAccount;