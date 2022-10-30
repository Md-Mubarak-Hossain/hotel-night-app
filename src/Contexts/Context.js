import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

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
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const authInfo = { user, signUp, logIn, logOut, googleSignIn, gitHubSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Context;