import React from 'react';
import styles from '@styles/FeedProducts.module.scss';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';

const FeedProdutcs =  () => {
const  products  =  useGetProducts(API);   
// console.log(products, 'products')
    return(
       <>
        <section className={styles['main_container']}>
        <div className={styles['cards_container']}>
           {products?.map(product => {
            if (
               product.images.length > 0 &&
               product.images[0] !== '' &&
               product.images[0] !== 'asdfa' &&
               product.images[0] !== 'asdfaf' &&
               product.images[0] !== 'hjk' &&
               product.images[0] !== 'none' &&
               product.images[0] !== 'ggggg' &&
               product.images[0] !== 'adsct.gif' &&
               product.images[0] !== 'orders.png' &&
               product.images[0] !== 'logo-nestjs.pxm' &&
               product.images[0] !== 'test.png' &&
               product.images[0] !== 'aaaaaaaaaaaaaaaa' &&
               !product.images[0].includes('https://cdn1.coppel.com/images/catalog/pm/')
             ) {

               return <ProductItem  product={product} key={product.id} />
             }
           }

           )}
        </div>

    </section>
       </>
    )
    }

    export default FeedProdutcs;