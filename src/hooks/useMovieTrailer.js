import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addtrailervideo } from '../utils/movieslice';

const useMovieTrailer = (movieid) => {

    const dispatch= useDispatch();

    // we have to make an api call to get the video bakground
    // fetch trailer video and updating the store with trailer video data
  
    const getmovievideo = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/" + movieid + "/videos?language=en-US",API_OPTIONS);
     const json = await data.json();
   
  
     const filterdata  = json.results.filter(video => video.type==="Trailer"); // as we have 3 trailers in filtered data
      const trailer =filterdata.length?filterdata[0]: json.results[0]; //selecting any
  
  
      dispatch(addtrailervideo(trailer));
  };
  
   // note react manjee jsx and jsx manjee camel casing (gujrati)
       useEffect(()=>{
            getmovievideo();
       },[]);
  

}

export default useMovieTrailer