import js from '@eslint/js';
import React, {createContext, useState, useEffect} from 'react';
import { set } from 'react-hook-form';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
            setIsLoggedIn(true);
            setUserId(JSON.parse(user).user._id);
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, userId, setUserId}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;