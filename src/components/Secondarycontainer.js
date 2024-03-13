import React from 'react'
import Movieslist from './Movieslist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const movies = useSelector(store => store.movies);
  return (
  movies.nowplayingmovies && movies.popularmovies&& ( 
     <div className=" bg-black">
       <div className="-mt-40 pl-12 relative z-20">
    <Movieslist title={"Now playing"} movies={movies.nowplayingmovies}
    />
    <Movieslist title={"Trending"} movies={movies.nowplayingmovies}
    />
    <Movieslist title={"popular"} movies={movies.popularmovies}
    />
    <Movieslist title={"upcoming Movies"} movies={movies.nowplayingmovies}
    />
     <Movieslist title={"Horror"} movies={movies.nowplayingmovies}
     
    />
    </div>
{/*     
     movielist- populat
      moviecars*n
      movielist - now playing
      movielist - trending
      movielist - horror */}


    </div>
  )
  )
}

export default Secondarycontainer