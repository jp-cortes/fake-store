import React from "react";
import Link from "next/link";
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu =  ({ toggle, setToggle }) => {
    return (
      <div className={styles['desktop_menu']}>
        <ul>
          <li>
            <Link
            onClick={() => setToggle(!toggle)} 
            href="#" className={styles['title_menu_desktop']}>
              My orders
            </Link>
          </li>

          <li>
            <Link 
            onClick={() => setToggle(!toggle)}
            href="/login">My account</Link>
          </li>

          <li>
            <Link 
            onClick={() => setToggle(!toggle)}
            href="/">Sign out</Link>
          </li>
        </ul>
      </div>
    );
}

export default DesktopMenu;