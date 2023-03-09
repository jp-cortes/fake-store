import React from "react";
import Link from "next/link";
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu =  () => {
    return (
      <div className={styles['desktop_menu']}>
        <ul>
          <li>
            <a href="/*" className={styles['title_menu_desktop']}>
              My orders
            </a>
          </li>

          <li>
            <Link href="/login">My account</Link>
          </li>

          <li>
            <Link href="/">Sign out</Link>
          </li>
        </ul>
      </div>
    );
}

export default DesktopMenu;