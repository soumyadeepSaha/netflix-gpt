import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';
import { LOGO, SUPPORTEDE_LANGUAGES } from '../utils/constants';
import { togglegptsearchview } from '../utils/gptslice';
import lang from '../utils/languageconstants';



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



    const handlegptsearchclick = ()=>{
      //Toggle GPT search
      dispatch(togglegptsearchview());
     }



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex from-black z-10 justify-between">
    
    <img className="w-44 "
     src={LOGO}
     alt="logo"/>
    
    {user && (<div className="flex p-2">

     <select className="p-2 m-2 bg-gray-500  text-white">
   {SUPPORTEDE_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
     </select>
     <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" 
     onClick={handlegptsearchclick}>GPT Search
     </button>

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