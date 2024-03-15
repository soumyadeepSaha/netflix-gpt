import React, { useRef, useState } from 'react'
import Header from './Header'
import{checkvaliddata} from  "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";

import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userslice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
const Login = () => {
    
   const [issigninform,setissigninform]= useState(true);
   const [errormessage,seterrormessage]= useState(null);

   const dispatch = useDispatch();
 
   const name=useRef(null);
   const email= useRef(null);
   const password= useRef(null);


   const handlebuttonclick = () =>{
    //validate the form data
      const message=checkvaliddata(email.current.value,password.current.value);
      seterrormessage(message);
 
      //once validation done then you can go for sign in / sign up
      
    if(message) return; //not valid
     
        //sign in/sign up
     
       if(!issigninform){
        //sign up logic
     createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,

            })
            
            .then(() => {
              const { uid,email,displayName,photoURL} = auth.currentUser;//fetch from the updated user and not the update profile's user

              dispatch(
               
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
                
                );
        
              
            }).catch((error) => {
               seterrormessage(error.message);
            });
              
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(errorCode+"-"+errorMessage);
          });

       }
       else{
        //sign in logic

        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
        }
    

   };

  const togglesigninform =()=>{
               setissigninform(!issigninform);
  };

  return (
     <div>
     <Header/>
     <div className="absolute">
     <img 
     src={BG_URL}
     alt="logo"
     />
    </div>
 
    <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
       <h1 className="font-bold text-3xl py-4">{issigninform? "Sign In": "sign up"}</h1>

       {!issigninform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
       <input
        ref={email}
        type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
      
      <input
       ref={password}
       type="password" placeholder="password" className="p-4 my-4 w-full  bg-gray-700"/>

      <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
      
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlebuttonclick}>{issigninform? "Sign In": "sign up"}</button>
      <p className="py-4 cursor-pointer" onClick={togglesigninform} >{issigninform? " New to Netflix? Sign up now": "Already registered? sign in now"}</p>
      
      </form>

    </div>
    
  )
}


export default Login;
