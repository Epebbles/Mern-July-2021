import React, { useState } from 'react';

const Form = (props) => {
    const { colorArray, setColorArray } = props;
    const [ color, setColor ] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setColorArray( [ ...colorArray, color ] );
    }

    return (
        <div>
            <form onSubmit={ submitHandler } style={{ textAlign: "center", margin: "25px" }}>
                <div>
                    <label>Color: </label>
                    <input type="text" name="color" onChange={ (e) => setColor(e.target.value) } />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Form