import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [error, setError] = useState('');
    const [isLoading , setIsLoading]=useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googlelogin =()=>{
        setIsLoading(true)
       return  signInWithPopup(auth, googleProvider)
          .catch(error=>{setError(error.message)})
          .finally(()=>{setIsLoading(false)})
    }
    
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            //signOut successfully
        }).catch(error=>{
            //An error happened
        }).finally(()=>setIsLoading(false))
    }
    useEffect(()=>{
        const unsubcribed =onAuthStateChanged(auth,user =>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubcribed
    },[auth])
    
    return{
        user,
        error,
        isLoading,
        logOut,
        googlelogin
    };
};

export default useFirebase;