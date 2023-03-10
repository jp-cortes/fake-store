import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from 'styles/FeedProducts.module.scss';
import AppContext from "context/AppContext.js";
import AddToCartImage from '@assets/Icons/bt_add_to_cart.svg';
import ProductDetails from "@containers/ProductDetails";

const ProductItem = ({ product }) => {
    const [productDetails, setProductDetails] = useState(false);
    //using the context from  Appcontext
const { addToCart } = useContext(AppContext);

//function for the shopping Cart
const handleDetails = (product) => {
console.log(product, 'product')
setProductDetails(true)
}
const handleClick = (item) => {
    addToCart(item);
}

    return(
        <>
        <div className={styles['product_card']}>
        <Image 
        onClick={() => handleDetails(product)}
        src={product.images[0]} alt={product.title} width="240" height="240"/>
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
    {productDetails && 
    <ProductDetails 
    productDetails={productDetails}
    setProductDetails={setProductDetails}
    product={product} 
    handleClick={()=> handleClick(product)}
    />
    }
    </>
    )
}
export default ProductItem;