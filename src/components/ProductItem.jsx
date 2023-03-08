import React, { useContext } from "react";
import Image from "next/image";
import styles from 'styles/FeedProducts.module.scss';
import AppContext from "context/AppContext.js";
import AddToCartImage from '@assets/Icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    //using the context from  Appcontext
const { addToCart } = useContext(AppContext);

//function for the shopping Cart
const handleClick = (item) => {
    addToCart(item);
}

    return(
        <div className={styles['product_card']}>
        <Image src={product.images[0]} alt={product.title} width="240" height="240"/>
        <div className={styles['product_info']}>
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product) }>
                <Image src={AddToCartImage} alt="shopping cart" />
            </figure>
        </div>
    </div>
    )
}
export default ProductItem;