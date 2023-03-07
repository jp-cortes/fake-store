import React from "react";
import '@styles/DesktopMenu.module.scss';

const DesktopMenu =  () => {
    return (
      <div className="desktop_menu">
        <ul>
          <li>
            <a href="/*" className="title_menu_desktop">
              My orders
            </a>
          </li>

          <li>
            <a href="/">My account</a>
          </li>

          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    );
}

export default DesktopMenu;