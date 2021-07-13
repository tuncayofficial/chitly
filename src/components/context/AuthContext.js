import { createContext, useContext } from "react"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const AuthProvider = ({ children }) => {
    const Authentication = createContext()
    
    const user = firebase.auth().currentUser

    return (
    <Authentication.Provider value = {user}>
        {children}
    </Authentication.Provider>
    )
}

const useAuth = () => {
   return "sa"
}

export { useAuth }
export default AuthProvider