import React from 'react';
import axios from "axios"
import setAuthToken from "../helpers/setAuthToken";

const handleSubmit = (email, pass) => {
    //reqres registered sample user
    console.log("çalıştı")
    const loginPayload = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    }

    axios.post("https://reqres.in/api/login", loginPayload)
        .then( response => {
            // get token from response
            const token = response.data.token;

            // set JWT token to local
            localStorage.setItem("token", token);

            // set token to axios common header
            setAuthToken(token);

            // redirect user to home page
            window.location.href = '/';
        })
        .catch(err => console.log(err))
}

const Login = () => {
  return (
    <div>
        <button onClick={() => handleSubmit()}>Test</button>
    </div>
  )
}

export default Login