import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./style.css";
import { todoStore } from '../store/todoListStore';

function Header() {

    const location = useLocation();

    return (
        <header>
            <nav >
                {todoStore.tasks[0]}
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                        background: "white",
                        color: "black",
                        fontSize: "24px"
                    }}
                >
                    <li>
                        <Link style={location.pathname == "/" ? { color: "red" } : {}} to="/">Главная</Link>
                    </li>
                    <li>
                        <Link style={location.pathname == "/about" ? { color: "red" } : {}} to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link style={location.pathname == "/settings" ? { color: "red" } : {}} to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link style={location.pathname == "/contacts" ? { color: "red" } : {}} to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link style={location.pathname == "/userprofile" ? { color: "red" } : {}} to="/userprofile">User Profile</Link>
                    </li>
                    <li>
                        <Link style={location.pathname == "/hasljdakjdhkjadhajsdhajksdhkjasdh" ? { color: "red" } : {}} to="/hasljdakjdhkjadhajsdhajksdhkjasdh">wrong page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header