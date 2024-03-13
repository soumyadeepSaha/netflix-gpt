# login page
# how to configure our project with github

-"rafce" react arrow function commponent export
//everything will be done inside body

-set up routing 
-> npm i -D react-router-dom(to get the react router dom library inorder to route from one page to another page)
- create app router in the body page

"/"when in main page or home page give path login
"browse" page is authenticated

-after seting up the app router we provide the app router


-Using formik library when using form in our react application(optional) (for managing validation,handeling errors) not used in this project


-when we are clicking on the sign in button it should vaidate and check if any errors in the form



--"regex" using regex for email validation
- can also use validator pack for validation


--using use ref hook creating reference to the input boxes inorder to have data on the click of sign in/sign up


- after validqation done then you an proceed for sign in sign up


-lets build authentication
- now for doing authentication we will be needed google firebase

//lets use firebase for database (backened ) and even deploy our web app to firebase(it works as a server)


--note that while asetting authenication
    -once the user signs in or signs up we will get the user object 
    - now the user object might be used anywhere in the app
    -so we wil use the users data in a redux store
    -set up redux stor-for that u need redux toolkit
     -reduxtoolkit-you need to instal two libraries
                                         ---npm i -D @reduxjs/toolkit
                                        ----npm i react-redux


-- then create a store-> in utils-> create "appstore.js"->write inside appstore.js " const appstore=confiurestore(
     {// this store takes a configuration
       reducer:{
        //it will have different reduers from different slices
       }
})
export default appstore;

 " 

 -- since we have a store now we will create a slice
 --inside utils create a file userslice.js
 ---how to create slice?
  --const userslice = createslice(
{ 
   //it will have
   name: 'user'
   initialstate: null,
   reducers:{
    //reducer function
    (example)adduser(state,action)://when we login the reducer function will be dispatched and we will add the user obj to the redux store
    (example)removeuser(state,action)://remove obj on sign out

   }


}
  
  )

  --during adding the user information  we will use " action " to add the user information
  and return action.payload
  --so as we know initial state was null the return action.payload changes the state to its "action.payload" state
us
  -- and we need to export 
                    --reducerfunctions
                    --and reducer

-- now we made the store and we have to provide our store to the app(on the root of the application)


--> inside app.js 
   ( provide store to the body)
       -- <provider store={appstore}><Body/></provider>

as soon as my user sign in or sign i want to update my userslice with user obj info


---suppose my user sign in or sign up => in createwithemailpassword(
     //inside login.js page
 
  as soon as i created a user and it is success then their
  .then( //i can dispatch an action from here and push this user info to my redux store)
   
   //but i will not do that as i wold have to dispatch for signn in and sign up 
   // so would have to dispatch again and again(the main problem)
    
)

// so inorder to overcome this problem we will use a utility given to us by firebase
-----"onauthstatechange"
this above api is called whenever the user signs up , signs in or signsout (whenever their is an authentication state change)

this above api is like an event listner
--= so we will add this once in our file..

-- now use dispatch for dispatching inside the useffectss onauthstatechanged, 
--create the usedispatch hook above everyother stuff

-- Now as soon as the user sign in or sign out we want the user to redirect to the browsing page and write its code along with the auth state change code itself using (navigate hook)



-- in the above (THEIR WAS A MISTAKE ) we can only use the navigatorwith in the child level of router provider


# BROWSING PAGEEE
--USE tmdb api for fetching movies 



-- some bugs

-- how to restrict the routes as we can easily go to the browser page
 -- if the user is logged in redirect me to browsing page 
 -- if the user is not logged in always redirect to login page

 - when we are not logged in our user is null at that time when we are trying to access the browse page(through routee) we are not checking auth over here and we are not redirecting it to login page as the user is not present.

- so if the user access token is not their and the user is not their and somebody wants to access browse it should redirect me to login page.


-- the ideal solution will e whenever the auth is passed we should navigate
-- and we should have our navigate in some portion child to react provider anywhere which exists in the whole app everywhere say the header

-- (**important**)note that in the useeffect call we are calling the onauthstatechange which basically returns an unsubscribe function(according to firebase doc) and if we return this unsubscribe it will remove this onauthstatechanged function from our browser on onmount of the header compo


so when the component is unmounted if we want to do something we return from the usestate and call a callback function while returning....


# creating my own custom hook - can use for any functionality as per us



# START BUILDING BROWSE PAGE

-- so structure{ (dividing ui)
 
  --Divide BROWSE INTO TWO PARTS--
  maincontainer
  --VideoBackground
  --Videotitle
  secondarycontainer
    --movielist*n
     -cards*n



}



# Building Video Title

# Build video background
-- by taking the youtube keyfromthe trailers of the movie we have selected(trailersor clips of the movie via an api call to fetchthose clips from tmdb) so basically going to yt addin the key to the url and getting the video going to share and going to embedded taking the code and then copy psting it to the videobackground div.s

# creating Custom Hooks for Trailer Video

# BUILDLING VIDEO BACKGROUND PART