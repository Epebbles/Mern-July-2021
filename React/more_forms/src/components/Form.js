import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
    <div className="container">
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            {
                firstName.length > 0 ?
                firstName.length < 2 ?
                <p className="error">First Name must be at least 2 characters</p>
                : null
                : null
            }
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {
                lastName.length > 0 ?
                lastName.length < 2 ?
                <p className="error">Last Name must be at least 2 characters</p>
                : null
                : null
            }
            <div>
                <label>Email: </label>
                <input type="email" name="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                email.length > 0 ?
                email.length < 5 ?
                <p className="error">Email must be at least 5 characters</p>
                : null
                : null
            }
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {
                password.length > 0 ?
                password.length < 8 ?
                <p className="error">Password must be at least 8 characters</p>
                : null
                : null
            }
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            {
                password.length >= 8 && confirmPassword.length > 0 ?
                password.length !== confirmPassword.length ?
                <p className="error">Passwords must match!</p>
                : null
                : null
            }
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

    );
}

export default Form
