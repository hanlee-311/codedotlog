import React, { useState } from 'react';
import LoginSection from '../Components/LoginSection';

function Login(){
        const adminUser = {
        email: "admin@admin.com",
        password: "test1234"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged In");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match");
            setError("Details do not match")

        }
    }

    const Logout = () => {
        setUser({
            name: "",
            email: ""
        });
    }
    return(
        <>
        {(user.email !="") ? (
            <div className="welcome">
                <h2>Welcome, <span>{user.name}</span> </h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (
            <LoginSection Login={Login} error={error} />
        )} 
        </> 
    )
};

export default Login;