import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import videoReducer from "./features/videoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    videos: videoReducer,
  },
});

export default store;


