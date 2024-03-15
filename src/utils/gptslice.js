import { createSlice } from "@reduxjs/toolkit";


 const gptslice = createSlice({
    name: 'gpt',
    initialState: {
           showgptsearch: false
    },
    reducers:{
        togglegptsearchview : (state)=>{
            state.showgptsearch =!state.showgptsearch;
        }
    }
 })

  export const { togglegptsearchview } = gptslice.actions;
 export default gptslice.reducer;
