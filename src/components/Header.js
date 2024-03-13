import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';
import { LOGO } from '../utils/constants';



const Header = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);//subscribing to the store and using the elements
    const handlesignout= ()=>{

        signOut(auth).then(() => {
        
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    }

    useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
     const { uid,email,displayName,photoURL} = user;
          dispatch(
            adduser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
            
            );
            navigate("/browse");
         
         
        } else {
         dispatch(removeuser());
         navigate("/");
       
        }
      });


      //insubscribe when compoent unmounts
      return () => unsubscribe();

    },[]);





  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex from-black z-10 justify-between">
    
    <img className="w-44 "
     src={LOGO}
     alt="logo"/>
    
    {user && (<div className="flex p-2">
    <img   className=" w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
    <button onClick={handlesignout}className=" font-bold text-white">(Sign Out)</button>
    </div>)}
 </div>
    
  );
};

export default Header