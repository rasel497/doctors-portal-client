import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 01.createUserWithEmailAndPassword
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // 02.signInWithEmailAndPassword
    const signInLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // 05.updateUser
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    // 04.LogOut
    const logOut = () => {
        setLoading(true);
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
        updateUser,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;