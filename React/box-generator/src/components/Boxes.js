import React from 'react';

const Boxes = (props) => {
    const {colorArray } = props;

    return (
        <div>
            {
                colorArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "15px",
                        width: "80px",
                        height: "100px",
                        backgroundColor: color
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Boxes;