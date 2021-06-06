import React , { useState } from 'react';
import axios from 'axios';

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        
        setEmail({email:e.target.value});
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
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address</label>
                <input type="email" id="inputEmail" onChange={handleEmailChange} className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" onChange={handlePasswordChange} className="form-control" placeholder="Password" required />
                
                <button className="btn btn-lg btn-primary btn-block" onClick={signIn} type="button"> Sign in</button>
            </form>
        </div>
    )
}

export default Signin