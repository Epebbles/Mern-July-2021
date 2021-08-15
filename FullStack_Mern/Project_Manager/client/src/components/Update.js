import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { productId } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + productId)
            .then((queriedProduct) => {
                console.log(queriedProduct.data.product)
                setTitle(queriedProduct.data.product.title);
                setPrice(queriedProduct.data.product.price);
                setDescription(queriedProduct.data.product.description);
            })
            .catch((err) => console.log(err));
    }, [])

    const handleUpdatedProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + productId, {
            title,
            price,
            description
        })
        .then((updatedProduct) => navigate("/"));
    };
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={handleUpdatedProduct}>
                <div>
                    Title:{" "}
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    Price:{" "}
                    <input type="text"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    Description:{" "}
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};
export default Update;