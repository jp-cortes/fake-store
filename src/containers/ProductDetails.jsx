import React from "react";
import ProductInfo from "@components/ProductInfo";
import styles from'@styles/ProductDetails.module.scss';
import CloseIcon from '@icons/icon_close.png';

const ProductDetails = () => {

    return (
      <aside className={styles['product_detail']}>
        <div className={styles['product_detail_close']}>
          <img src={CloseIcon} alt="close" />
        </div>
        <ProductInfo/>
      </aside>
    );
}

export default ProductDetails;