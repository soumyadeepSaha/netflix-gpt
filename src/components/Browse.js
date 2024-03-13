import React from 'react'
import Header from './Header'
import useNowplayingmovies from '../hooks/useNowwplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../hooks/usePopularmovies';

const Browse = () => {
  useNowplayingmovies();
  usePopularmovies();
   
//calling the custom  hook 
  return (

    <div>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>


{/*      
  --Divide BROWSE INTO TWO PARTS--
  maincontainer
  --VideoBackground
  --Videotitle
  secondarycontainer
    --movielist*n
     -cards*n */}




    </div>
  );
};

export default Browse;