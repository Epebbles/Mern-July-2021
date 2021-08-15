import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {formSubmittedBoolean, setFormSubmittedBoolean} = props;
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newProductData = {
            title,
            price,
            description,
        };
        axios.post('http://localhost:8000/api/products', newProductData) 
            .then((newProduct) => {
                setTitle("");
                setPrice("");
                setDescription("");
                setFormSubmittedBoolean(!formSubmittedBoolean);
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
        <h1>Project Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label><br/>
                    <input type="text"
                    name="title"
                    id="title"
                    onChange = {(e)=>setTitle(e.target.value)}
                    value={title}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="text"
                    name="price"
                    onChange = {(e)=>setPrice(e.target.value)}
                    value={price}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <input type="text"
                    name="description"
                    onChange = {(e)=>setDescription(e.target.value)}
                    value={description}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;

