import React from 'react'
import Moviecard from './Moviecard'

const Movieslist = ({title, movies}) => {
  return (
    <div className="px-6 " >
     <h1 className="text-3xl py-4 text-white">{title}</h1>
       <div className="flex overflow-x-scroll scroll-smooth hide">
            <div className="flex">    
            { movies?.map(movie => <Moviecard key={movie.id} posterpath={movie.poster_path} />)}
              <Moviecard posterpath={movies[0]?.poster_path}/>
              
            </div>
          </div>
        </div>    
  );
};

export default Movieslist;