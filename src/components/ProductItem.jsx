import React, { useContext } from "react";
import '@styles/FeedProducts.module.scss';
import AppContext from "@context/AppContext.js";
import AddToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    //using the context from  Appcontext
const { addToCart } = useContext(AppContext);

//function for the shopping Cart
const handleClick = (item) => {
    addToCart(item);
}

    return(
        <div className="product_card">
        <img src={product.images[0]} alt={product.title}/>
        <div className="product_info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product) }>
                <img src={AddToCartImage} alt="shopping cart" />
            </figure>
        </div>
    </div>
    )
}
export default ProductItem;