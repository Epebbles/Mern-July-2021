import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hair } = this.props;
        return (
            <div className="container">
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hair}</p>
            </div>
        );
    }
}

export default PersonCard;