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
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;

