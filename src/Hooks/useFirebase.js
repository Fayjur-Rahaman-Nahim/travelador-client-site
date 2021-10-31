import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const googleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)

            .catch(error => {
                setError(error.message);
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser('');
            }
            setIsLoading(false);
        })
    }, []);
    const logOut = () => {
        return signOut(auth)

    }
    return {
        user,
        error,
        isLoading,
        googleSignIn,
        setIsLoading,
        logOut
    }
};

export default useFirebase;