import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch} from "react-redux";
import { adduser,removeuser } from "../utils/userslice";

const Body = () => {
   
  const dispatch = useDispatch();
  
  
   
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
           },
           {
            path: "/browse",
            element:<Browse/>,
           },
    ]);

    useEffect(()=>{

      onAuthStateChanged(auth, (user) => {
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
         
         
        } else {
         dispatch(removeuser());
       
        }
      });

    },[]);


  return (
     <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;