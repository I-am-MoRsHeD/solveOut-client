import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("from auth", currentUser)
            setLoading(false);
        })
        return () =>{
            unsubscribed();
        }
    }, [])

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logout,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;