import React from 'react'
import Header from './Header'
import useNowplayingmovies from '../hooks/useNowwplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../hooks/usePopularmovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showgptsearch = useSelector(store => store.gpt.showgptsearch)
  useNowplayingmovies();
  usePopularmovies();
   
//calling the custom  hook 
  return (

    <div>
    <Header/>
    {
      showgptsearch ? (
    <Gptsearch/>) : (
   
    <>
    <Maincontainer/>          // two components together inside not possible so write it in the form of react fragment

    <Secondarycontainer/>
    </>
    )
    }

    


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