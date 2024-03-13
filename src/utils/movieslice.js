import { createSlice } from "@reduxjs/toolkit";

export const movieslice = createSlice({
name: "movies",
initialState:{
    nowplayingmovies: null,
    trailervideo:null,
    popularmovies: null
},
reducers:{

     addnowplayingmovies: (state, action) => {
           state.nowplayingmovies = action.payload;
     },
     addtrailervideo: (state,action) => {
        state.trailervideo = action.payload;
     },
     addpopularmovies: (state, action) => {
        state.popularmovies = action.payload;
  }

},




});

export const { addnowplayingmovies , addtrailervideo, addpopularmovies} = movieslice.actions;

export default movieslice.reducer;
