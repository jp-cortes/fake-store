import { useEffect, useState } from "react";
import axios from 'axios';
// const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await axios(API);
            setProducts(response.data);
        }
        fetchData();
    }, []);

    return products;
}
const useGetProductById  = (API, id) => {
    const [productById, setProductById] = useState();

    useEffect(() => {
        async function getProduct () {
            const response = await axios(`${API}/${id}`);
            // console.log(response, 'product by id')
            setProductById(response.data);
        }
        getProduct();
    }, [id]);
    return productById
}


export { useGetProducts, useGetProductById };