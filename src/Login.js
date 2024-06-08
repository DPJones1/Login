import React from 'react';
import { useState } from 'react';

//Login component where users can enter their username and password
//Here we are initialising the state varaibles for username and password 
//with open strings, we do this using useState, so that we can call on 
//useState and update the values of these variables whenever we need
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

//This function is called upon when Login button is clicked
    const handleLogin = () => {
        //Checks if the username and password match
        if (username === 'user' && password === 'password') {
            //if correct, call the onLogin function with true (login successful)
            onLogin(true); 
        } else {
            //if false, call the onLogin function with false (login unsuccessful)
            onLogin(false);
        }

        };
        
        //Return statement shows what will be displayed on the screen 
        return React.createElement('div', null,
        //Creates a heading element with the text 'Login'
        React.createElement('h2', null, 'Login'),

        //Created an input field for the username 
        React.createElement('input', {
            type: 'text', 
            placeholder: 'Username', //placeholder text for the input field
            value: username, //current value of the input field, username state
            onChange: (e) => setUsername(e.target.value) //When input value changes update the username state
        
        }),

        //Creates an input field for the password
        React.createElement('input',{
            type: 'password',
            placeholder: 'Password',
            value: password,
            onChange: (e) => setPassword(e.target.value)
        }),

        React.createElement('button', { onClick: handleLogin }, 'Login')

    );
};


        export default Login;


