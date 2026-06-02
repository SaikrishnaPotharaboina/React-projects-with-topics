import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {

    const [isLogin, isSetLogin] = useState(false);

    const login = () => isSetLogin(true);
    const logout = () => isSetLogin(false);

    return (
        <UserContext.Provider value={{ login, logout, isLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
