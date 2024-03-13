import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'

const Maincontainer = () => {
    const moviess = useSelector((store) => store.movies?.nowplayingmovies);
        
  
    //we dont need all the movies for animating we just need one movie
    
     if(!moviess)return;

     const mainmovie= moviess[1];
   


   const { original_title,overview,id} = mainmovie;
    return (
    <div>
        <Videotitle title={original_title} overview={overview} />
        <Videobackground movieid={id}/>
    </div>
  )
}

export default Maincontainer;