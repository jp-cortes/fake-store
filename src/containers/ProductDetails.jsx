import React from "react";
import ProductInfo from "@components/ProductInfo";
import '@styles/ProductDetails.module.scss';
import CloseIcon from '@icons/icon_close.png';

const ProductDetails = () => {

    return (
      <aside className="product_detail">
        <div className="product_detail_close">
          <img src={CloseIcon} alt="close" />
        </div>
        <ProductInfo/>
      </aside>
    );
}

export default ProductDetails;