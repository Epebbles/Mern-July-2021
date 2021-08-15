import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = (props) => {
    const { productId } = props;
    console.log( productId );
    const [ productInfo, setProductInfo ] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + productId)
            .then((queriedProduct) => {
                console.log(queriedProduct);
                setProductInfo(queriedProduct.data.product);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate("/");
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            {productInfo ? ( 
                <div>
                    <h1>Product Info: </h1>
                    <p>Title: {productInfo.title}</p>
                    <p>Price: {productInfo.price}</p>
                    <p>Description: {productInfo.description}</p>
                    <button onClick={() => deleteProduct(productInfo._id)}>
                        Delete
                    </button>
                </div>
            ) : (
                <h1>DTA is loading</h1>
            )}
        </>
    );
};

export default Detail;