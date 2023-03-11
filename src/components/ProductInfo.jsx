//bring  de tails from product details
import React from 'react';
import Image from 'next/image';
import styles from'@styles/ProductDetails.module.scss';
import AddToCart from '@assets/Icons/bt_add_to_cart.svg';

const ProductInfo = ({ product, handleClick}) => {

  
    return(
        <>
        <Image
        src={product?.images[0]} alt={product?.title}
        width='500'
        height='360'
        />
        <div className={styles['info_product']}>
          <p>${product?.price}</p>
          <p>{product?.name}</p>
          <p>
           {product?.description}
          </p>
          <button 
          onClick={handleClick}
          className={`${styles['primary_add_to_cart_button']} ${styles['add_to_cart_button']}`}>
            <Image
            src={AddToCart} alt="add to cart" />
            Add to cart
          </button>
        </div>
        </>
    )
}
export default ProductInfo;