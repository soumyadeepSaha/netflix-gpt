import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {
      return null;
    },
  },
});

export const { adduser, removeuser } = userslice.actions;

export default userslice.reducer;