import React, { useContext } from "react";
import Image from "next/image";
import AppContext from 'context/AppContext';
import CloseIcon from '@assets/Icons/icon_close.png';
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCartItem = (props ) => {
  const  { product, indexValue } = props;
const { removeFromCart } = useContext(AppContext);

const handleRemove = index => {
  removeFromCart(index);
}
    return(
        <div className={styles['my_shopping_cart']}>
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
              <Image className={styles['close_icon']}
              src={CloseIcon} alt="close" 
              onClick={() => handleRemove(indexValue)}/>
            </div>
    )
}
export default ShoppingCartItem;