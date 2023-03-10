import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";
import ArrowIcon from '@assets/Icons/flechita.png';
import MyOrder from "@components/MyOrder";
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
      }
     const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
     }

    return (
      <>
        <main>
          <section className={styles['my_orders']}>
            <div className={styles['my_orders_container']}>

              <h1 className={styles['my_orders_title']}>My order</h1>

              <div className={styles['my_orders_content']}>
               
                  <p>Today: <b>{currentDate()}</b></p>
                  <p><b>{state.cart.length}</b> articles</p>
                  <div className={styles.orders}>
                  {state.cart.map( (product, index) => (
                      <MyOrder product={product} key={`orderItem-${index}`}/>
                  ))

                  }
                  </div>
             
              </div>
                  <p className={styles.total}>Total: <b>$ {sumTotal()}</b></p>

            </div>
                  
          </section>
        </main>
      </>
    );

}

export default Checkout;