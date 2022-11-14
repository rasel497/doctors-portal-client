import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // 01.createUserWithEmailAndPassword
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // 02.signInWithEmailAndPassword
    const signInLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 04.LogOut
    const logOut = () => {
        return signOut(auth);
    }

    // 03.using after login and sign in page complete for current Observer Firebase>Manage Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signInLogIn,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;