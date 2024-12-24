import React from 'react';

const Login = () => {
    const boolean = true;

    return (
        <div>
            <p>{boolean ? "Logged in successfully." : "Please log in"}</p>
        </div>
    );
}

export default Login;