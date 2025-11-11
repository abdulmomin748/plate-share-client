import React, { Children, createContext } from 'react';
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const userInfo = {
        name: 'rahman'
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;