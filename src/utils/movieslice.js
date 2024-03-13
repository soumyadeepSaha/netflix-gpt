import { createSlice } from "@reduxjs/toolkit";

export const movieslice = createSlice({
name: "movies",
initialState:{
    nowplayingmovies: null,
    trailervideo:null
},
reducers:{

     addnowplayingmovies: (state, action) => {
           state.nowplayingmovies = action.payload;
     },
     addtrailervideo: (state,action) => {
        state.trailervideo = action.payload;
     }

},




});

export const { addnowplayingmovies , addtrailervideo} = movieslice.actions;

export default movieslice.reducer;
