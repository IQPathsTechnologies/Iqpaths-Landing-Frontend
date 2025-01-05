import js from '@eslint/js';
import React, {createContext, useState, useEffect} from 'react';
import { set } from 'react-hook-form';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;