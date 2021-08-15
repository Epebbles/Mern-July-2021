import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DisplayList = (props) => {
    const { productId } = props;
    const [productInfo, setProductInfo] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/" + productId)
            .then((res) => {
                console.log(res.data.productInfo);
                setProductInfo(res.data.productInfo);
            })
            .catch((err) => console.log(err))
    })
    return (
        <div>
            <h1>Product Info: </h1>
            <p>{productInfo.title}</p>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>
        </div>
    )
}
export default DisplayList;