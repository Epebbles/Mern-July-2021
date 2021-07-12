import React from "react";

const PersonCard = (props) => {
    const { firstName, lastName, hair } = props;
    return (
        <div className="container">
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {hair}</p>
        </div>
    );
}

export default PersonCard;