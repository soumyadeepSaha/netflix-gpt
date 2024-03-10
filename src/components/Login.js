import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    
   const [issigninform,setissigninform]= useState(true);

  const togglesigninform =()=>{
               setissigninform(!issigninform);
  };

  return (
     <div>
     <Header/>
     <div className="absolute">
     <img 
     src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
     alt="logo"
     />
    </div>
 
    <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
       <h1 className="font-bold text-3xl py-4">{issigninform? "Sign In": "sign up"}</h1>

       {!issigninform && (
        <input type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700"/>)}
    
       <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
      
      <input type="password" placeholder="password" className="p-4 my-4 w-full  bg-gray-700"/>
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{issigninform? "Sign In": "sign up"}</button>
      <p className="py-4 cursor-pointer" onClick={togglesigninform} >{issigninform? " New to Netflix? Sign up now": "Already registered? sign in now"}</p>
      </form>

    </div>
    
  )
}

export default Login