import React, { useContext, useState } from "react";
import '@styles/Header.module.scss';
import MenuIconSVG from '@icons/icon_menu.svg';
import Logo from '@logos/logo_yard_sale.svg';
import ShoppingCart from "@containers/ShoppingCart";
import ShoppingCartIcon from '@icons/icon_shopping_cart.svg'
import AppContext from "@context/AppContext.js";
import DesktopMenu from "./DesktopMenu";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  //incase  the hook cart is grows 
  const { state: {cart} } = useContext(AppContext);
  // console.log(state, 'state')

  const toggleMenu = () => {
    return setToggle(prevstate => !prevstate);
  }
    return (
      <>
        <nav> 
          <img
            src={MenuIconSVG}
            alt="menu"
            className="navbar_menu"
          />

          <div className="navbar_left">
            <img
              src={Logo}
              alt="logo"
              className="logo_navbar"
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

          <div className="navbar_right">
            <ul>
              <li className="navbar_email" onClick={toggleMenu}>
                email@example.com
              </li>
              <li className="navbar_shopping_cart"
                onClick={() => setToggleOrders(prevState => !prevState)}>
                <img
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