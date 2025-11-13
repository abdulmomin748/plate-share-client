import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider;
const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const updateUserProfile = (name,photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
        // return updateProfile(auth.currentUser,updatedNamePhoto)
    }
    const crateUserEP = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const signInEmailPassword = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);

    }
    const userInfo = {

        user,
        setUser,
        crateUserEP,
        signInGoogle,
        signInEmailPassword,
        logOutUser,
        loading,
        setLoading,
        updateUserProfile,
    }

    return (
        <AuthContext value={ userInfo }>
            {children}
        </AuthContext>
    );
};

export  {AuthProvider, AuthContext};