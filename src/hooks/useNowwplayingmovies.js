import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addnowplayingmovies } from "../utils/movieslice";


// hoook is what? a normal js function

const useNowplayingmovies = () => {

   // fetch data from TMDB API and update store (create hook to not make browse component messey)
   const dispatch = useDispatch();
   const getnowplayingmovies = async () => {
 
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      const json = await data.json();


      dispatch(addnowplayingmovies(json.results));

   };

   useEffect(()=>{
  
     getnowplayingmovies();

   },[]);

};





 export default useNowplayingmovies;





