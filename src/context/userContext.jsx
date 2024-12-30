import React, {createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;