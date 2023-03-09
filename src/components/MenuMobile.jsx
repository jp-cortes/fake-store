import React from "react";
import Link from "next/link";
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile =  () => {
    return (
      <>
        <aside className={styles['mobile_menu']}>
          <section>
            <ul>
              <li>
                <Link href="/">CATEGORIES</Link>
              </li>
              <li>
                <Link href="/">All</Link>
              </li>
              <li>
                <Link href="/">Clothes</Link>
              </li>
              <li>
                <Link href="/">Electronics</Link>
              </li>
              <li>
                <Link href="/">Furniture</Link>
              </li>
              <li>
                <Link href="/">Toys</Link>
              </li>
              <li>
                <Link href="/">Others</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/checkout">My orders</Link>
              </li>

              <li>
                <Link href="/edit-account">My account</Link>
              </li>
            </ul>

            <ul className={styles['bottom_menu']}>
              <li>
                <Link href="/edit-account" className={styles['email_mobile_menu']}>
                  fatalfury@gmail.com
                </Link>
              </li>

              <li>
                <Link href="/" className={styles['sign_out']}>
                  Sign out
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      </>
    );
}

export default MenuMobile;