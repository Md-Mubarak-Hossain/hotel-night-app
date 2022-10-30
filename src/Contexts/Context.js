import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = { user, signUp, logIn, logOut, googleSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Context;