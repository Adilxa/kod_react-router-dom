import React, { useState } from 'react';
import { replace, useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("");

    const handleClick = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            role: "admin",
            isAuth: true
        }

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/userprofile", { replace: true })
    }

    return (
        <div className='container'><form onSubmit={(e) => handleClick(e)}>
            <input onChange={(e) => setName(e.target.value)}></input>
            <button>Click me</button>
        </form></div>
    )
}

export default LoginPage