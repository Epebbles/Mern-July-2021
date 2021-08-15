import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import List from '../components/List';
const Main = () => {
    const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [formSubmittedBoolean])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    return (
        <div>
            <ProductForm formSubmittedBoolean={formSubmittedBoolean}
            setFormSubmittedBoolean={setFormSubmittedBoolean}
            />
            <hr/>
            { loaded && <List products={products} removeFromDom={removeFromDom} formSubmittedBoolean={formSubmittedBoolean}
            setFormSubmittedBoolean={setFormSubmittedBoolean}/>}
        </div>
    )
}
export default Main;