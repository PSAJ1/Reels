import React,{useState,useEffect} from 'react';
import {auth} from '../components/fireConfig';
export const Authcontext=React.createContext();
export function AuthProvider(props)
{
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    function signUp(email,password)
    {
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function logIn(email,password)
    {
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logOut(email,password)
    {
        return auth.signOut();
    }
    useEffect(()=>{
        const unsub=auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        });
        return ()=>{
            unsub();
        }
    },[]);
    const store={
        user,
        signUp,
        logOut,
        logIn
    }
    return(
        <Authcontext.Provider value={store}>
        {!loading&&props.children}
        </Authcontext.Provider>
    );
}