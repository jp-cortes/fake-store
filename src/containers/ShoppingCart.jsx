import React, { useContext, useState } from "react";
import AppContext from "@context/AppContext";
import ArrowIcon from '@icons/flechita.png';
import ShoppingCartItem from "@components/ShoppingCartItem";
import '@styles/ShoppingCart.module.scss';

const ShoppingCart = ({ toggleOrders,setToggleOrders }) => {

const { state } = useContext(AppContext);
const sumTotal = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = state.cart.reduce(reducer, 0);
  return sum;
}

    return (
      <>
        <aside className={"product_detail_shopping_cart"}>
          <div className="title_shop_container">
            <img onClick={() => setToggleOrders(!toggleOrders)}
            className={"arrow"}
            src={ArrowIcon} 
            alt="arrow" />
            <p className="shopping_cart_title">My order</p>
          </div>

          <div className="shopping_cart_my_order_content">
            <div className="shopping_cart_product_container">

            {state.cart.map( (product, index) => (
              <ShoppingCartItem product={product} key={`orderItem-${index}`} indexValue={index}/> 
            
            ))}
            </div>


            <div className="my_shopping_cart_total_order">
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className="checkout_button">Checkout</button>
          </div>
        </aside>
      </>
    );
}

export default ShoppingCart;