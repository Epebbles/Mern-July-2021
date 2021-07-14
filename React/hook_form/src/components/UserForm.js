import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    return (
    <div>
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </form>

        <div>
            <h3>Your Form Data: </h3>
            <p>
                <label>First Name: </label>{firstName}
            </p>
            <p>
                <label>Last Name: </label>{lastName}
            </p>
            <p>
                <label>Email: </label>{email}
            </p>
            <p>
                <label>Password: </label>{password}
            </p>
            <p>
                <label>Confirm Password: </label>{confirmPassword}
            </p>
        </div>
    </div>

    )
}

export default UserForm;