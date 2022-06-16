import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user/userSlice";
import postsReducer from "../slices/posts/postSlice";
import counterReducer from "../slices/counter/conterSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        counter: counterReducer,
    },
});
