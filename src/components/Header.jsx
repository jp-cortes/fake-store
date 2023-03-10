import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MenuMobile from "./MenuMobile";
import AppContext from "@context/AppContext.js";
import resize from "@hooks/useScreenSize";
import ShoppingCart from "@containers/ShoppingCart";
import ShoppingCartIcon from '@assets/Icons/icon_shopping_cart.svg'
import MenuIconSVG from '@assets/Icons/icon_menu.svg';
import Logo from '@assets/Logos/logo_yard_sale.svg';
import styles from'@styles/Header.module.scss';


const Header = () => {
  //states
  const [toggle, setToggle] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  //in case  the hook cart grows 
  const { state: {cart} } = useContext(AppContext);
  const  screenSize  = resize();

 
  
  const toggleMenu = () => {
    return setToggle(prevstate => !prevstate);
  }
  const handleMenuMobile = () => {
    return setToggleMenuMobile(prevstate => !prevstate);
  }

  useEffect(() => {
    if (screenSize < 640) {
      setToggleMenuMobile(true);//toggle for mobile menu
      setToggle(false);//toggle for desktop menu
    } else {
      setToggleMenuMobile(false);//toggle for mobile menu
      ;//toggle for desktop menu
    }
  }, [screenSize]);
    


    return (
      <>
        <nav className={styles.nav}> 
          <Image
          onClick={handleMenuMobile}
            src={MenuIconSVG}
            alt="menu"
            className={styles['navbar_menu']}
          />
          {toggleMenuMobile && <MenuMobile/>}

          <div className={styles['navbar_left']}>
            <Link href='/'>
            <Image
              src={Logo}
              alt="logo"
              className={styles['logo_navbar']}
            />
            </Link>

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
              <li className={styles['navbar_shopping-cart']}
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
          {toggle && <DesktopMenu toggle={toggle} setToggle={setToggle} />}
          {toggleOrders && <ShoppingCart toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
        </nav>
      </>
    );
}

export default Header;