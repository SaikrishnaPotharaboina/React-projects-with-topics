import React, { useContext, useState } from 'react';
import { UserContext } from "./UserContext";
import "./Authentication.css"

const Navbar = () => {
    const { login, logout, isLogin } = useContext(UserContext);
    return (
        <>
            <nav>
                <h1>App</h1>
                {isLogin ? (
                    <>
                        <span>Welcome, User!</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </nav>
        </>
    );
};

export default Navbar;
