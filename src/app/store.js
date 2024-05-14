import { configureStore } from "@reduxjs/toolkit";
import  webSlice from "./slices/userSlices";
export const store = configureStore({
        reducer:{
                webReducer:webSlice
        },
})

export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch