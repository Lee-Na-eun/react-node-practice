import React , { useState } from 'react';
import axios from 'axios';

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        
        setEmail({email:e.target.value});
    }

    const handleNameChange = (e) => {
        setName({name:e.target.value});
    }

    const handlePasswordChange = (e) => {
        console.log(password)
        setPassword({password:e.target.value})
    }

    const signIn = () => {
        axios.post('http://localhost:3001/signin', {
            email: email.email,
            password: password.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div>
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign up</h2>
                <label for="inputName" className="sr-only">Name</label>
                <input type="name" onChange={handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                
                <button className="btn btn-lg btn-primary btn-block" onClick={signIn} type="button"> Sign in</button>
            </form>

        </div>
    )
}

export default Signup