import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from'@styles/Header.module.scss';
import MenuIconSVG from '@assets/Icons/icon_menu.svg';
import Logo from '@assets/Logos/logo_yard_sale.svg';
import ShoppingCart from "@containers/ShoppingCart";
import ShoppingCartIcon from '@assets/Icons/icon_shopping_cart.svg'
import AppContext from "@context/AppContext.js";
import DesktopMenu from "./DesktopMenu";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  //in case  the hook cart is grows 
  const { state: {cart} } = useContext(AppContext);
  // console.log(state, 'state')

  const toggleMenu = () => {
    return setToggle(prevstate => !prevstate);
  }
    return (
      <>
        <nav className={styles.nav}> 
          <Image
            src={MenuIconSVG}
            alt="menu"
            className={styles['navbar_menu']}
          />

          <div className={styles['navbar_left']}>
            <Image
              src={Logo}
              alt="logo"
              className={styles['logo_navbar']}
            />

            <ul>
              <li>
                <a href="/">All</a>
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

              <li>
                <a href="/">All</a>
              </li>
            </ul>
          </div>

          <div className={styles['navbar_right']}>
            <ul>
              <li className={styles['navbar_email']} onClick={toggleMenu}>
                email@example.com
              </li>
              <li className={styles['navbar_shopping_cart']}
                onClick={() => setToggleOrders(prevState => !prevState)}>
                <Image
                  src={ShoppingCartIcon}
                  alt="shopping_cart_icon"
                />
                {/* item in the shopping cart */}
                {cart.length > 0 && <div>{cart.length > 9 ? '+9': cart.length}</div>}
              </li>
            </ul>
          </div>
          {toggle && <DesktopMenu />}
          {toggleOrders && <ShoppingCart toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
        </nav>
      </>
    );
}

export default Header;