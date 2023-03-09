import React from "react";
import Image from "next/image";
import styles from '@styles/MyOrder.module.scss';

const MyOrder = (props) => {
  const  { product, indexValue } = props;
    return (
      <>
        <>
          <section className={styles['my_order']}>
            <div className={styles['my_order_container']}>

              <div className={styles['my_order_content']}>

                <div className={styles['shopping_cart']}>
                  <figure>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width="70" 
                      height="70"
                    />
                  </figure>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>

               
              </div>
            </div>
          </section>
        </>
      </>
    );
}
export default MyOrder;