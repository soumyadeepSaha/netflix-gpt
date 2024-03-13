import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addpopularmovies } from "../utils/movieslice";


// hoook is what? a normal js function

const usePopularmovies = () => {

   // fetch data from TMDB API and update store (create hook to not make browse component messey)
   const dispatch = useDispatch();
   const getPopularmovies = async () => {
 
      const data = await fetch(
       "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      const json = await data.json();


      dispatch(addpopularmovies(json.results));

   };

   useEffect(()=>{
  
    getPopularmovies();

   },[]);

};





 export default usePopularmovies;


