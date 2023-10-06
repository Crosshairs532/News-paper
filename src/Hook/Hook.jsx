import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase.config";
export const catContext = createContext(null)
const Hook = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signup = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (cuser) => {
            setUser(cuser)
            setLoader(false)
        });
        return () => unSubscriber();

    }, [])

    const Logout = () => {
        return signOut(auth)
    }

    const allInfo = { createUser, signup, user, Logout, loader }
    return (

        <>
            <catContext.Provider value={allInfo}>
                {
                    children
                }
            </catContext.Provider>

        </>
    );
};

export default Hook;