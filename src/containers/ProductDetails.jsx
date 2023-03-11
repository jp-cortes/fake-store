import React from "react";
import { useGetProductById } from "@hooks/useGetProducts";
import Image from "next/image";
import ProductInfo from "@components/ProductInfo";
import styles from'@styles/ProductDetails.module.scss';
import CloseIcon from '@assets/Icons/icon_close.png';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductDetails = ({ productId, handleClick, productDetails, setProductDetails }) => {

    const productById = useGetProductById(API, productId);

    // useEffect(() => {
    //     async function getProduct () {
    //         const response = await axios(`${API}/${productId}`);
    //         // console.log(response, 'product by id')
    //         setProductById(response.data);
    //     }
    //     getProduct();
    // }, [productId]);


    console.log(productById, 'productoo')

    return (
      <aside className={styles['product_detail']}>
        <div className={styles['product_detail_close']}>
          <Image 
          onClick={() => setProductDetails(!productDetails)}
          src={CloseIcon} alt="close" width='16' height='16'/>
        </div>
        <ProductInfo product={productById} handleClick={handleClick}/>
      </aside>
    );
}

export default ProductDetails;