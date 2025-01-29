
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { toast } from "react-toastify";
//import { Await } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyBlT1AbYEnGiEyYDBseDKLHdP8bCjm_c1I",
  authDomain: "netflix-clone-eb3bd.firebaseapp.com",
  projectId: "netflix-clone-eb3bd",
  storageBucket: "netflix-clone-eb3bd.firebasestorage.app",
  messagingSenderId: "361411830726",
  appId: "1:361411830726:web:4c66736bbbabb3851f88c7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user
        await addDoc(collection(db, "user"), {
          uid:user.uid,
          name,
          authProvider: "local",
          email,  
        }) 
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const login = async(email,password)=>{
    try {
     await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
         console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "));
         
    }
}


const logout = ()=>{
  signOut(auth);
}

export {auth,db,signup,login,logout};