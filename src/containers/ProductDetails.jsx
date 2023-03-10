import React from "react";
import Image from "next/image";
import ProductInfo from "@components/ProductInfo";
import styles from'@styles/ProductDetails.module.scss';
import CloseIcon from '@assets/Icons/icon_close.png';

const ProductDetails = ({ product, handleClick,
  productDetails, setProductDetails }) => {

    return (
      <aside className={styles['product_detail']}>
        <div className={styles['product_detail_close']}>
          <Image 
          onClick={() => setProductDetails(!productDetails)}
          src={CloseIcon} alt="close" width='16' height='16'/>
        </div>
        <ProductInfo product={product} handleClick={handleClick}/>
      </aside>
    );
}

export default ProductDetails;