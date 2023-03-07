import React from "react";
import '@styles/MenuMobile.module.scss';

const MenuMobile =  () => {
    return (
      <>
        <main className="mobile_menu">
          <section>
            <ul>
              <li>
                <a href="/">CATEGORIES</a>
              </li>
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Clothes</a>
              </li>
              <li>
                <a href="/">Electronics</a>
              </li>
              <li>
                <a href="/">Furniture</a>
              </li>
              <li>
                <a href="/">Toys</a>
              </li>
              <li>
                <a href="/">Others</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/">My orders</a>
              </li>

              <li>
                <a href="/">My account</a>
              </li>
            </ul>

            <ul className="bottom-menu">
              <li>
                <a href="/" className="email_mobile_menu">
                  fatalfury@gmail.com
                </a>
              </li>

              <li>
                <a href="/" className="sign_out">
                  Sign out
                </a>
              </li>
            </ul>
          </section>
        </main>
      </>
    );
}

export default MenuMobile;