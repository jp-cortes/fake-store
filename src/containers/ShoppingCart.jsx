import React, { useContext, useState } from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import ArrowIcon from '@assets/Icons/flechita.png';
import ShoppingCartItem from "@components/ShoppingCartItem";
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = ({ toggleOrders,setToggleOrders }) => {

const { state } = useContext(AppContext);
const sumTotal = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = state.cart.reduce(reducer, 0);
  return sum;
}

    return (
      <>
        <aside className={styles['product_detail_shopping_cart']}>
          <div className={styles['title_shop_container']}>
            <Image onClick={() => setToggleOrders(!toggleOrders)}
            className={styles['arrow']}
            src={ArrowIcon} 
            alt="arrow" />
            <p className={styles['shopping_cart_title']}>My order</p>
          </div>

          <div className={styles['shopping_cart_my_order_content']}>
            <div className={styles['shopping_cart_product_container']}>

            {state.cart.map( (product, index) => (
              <ShoppingCartItem product={product} key={`orderItem-${index}`} indexValue={index}/> 
            
            ))}
            </div>


            <div className={styles['my_shopping_cart_total_order']}>
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className={styles['checkout_button']}>Checkout</button>
          </div>
        </aside>
      </>
    );
}

export default ShoppingCart;