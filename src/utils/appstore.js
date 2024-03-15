import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import moviesReducer from "./movieslice";
import gptReducer from "./gptslice";

const appstore = configureStore({

    reducer:{
        user: userReducer,
        movies:moviesReducer,
        gpt: gptReducer

    },

}
    );

    export default appstore;