import React from 'react';
import '@styles/FeedProducts.module.scss';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';

const FeedProdutcs =  () => {
const products  =  useGetProducts(API);   

    return(
       <>
        <section className="main_container">
        <div className="cards_container">
           {products.map(product => (
               <ProductItem  product={product} key={product.id}/>

           ))}
        </div>

    </section>
       </>
    )
    }

    export default FeedProdutcs;