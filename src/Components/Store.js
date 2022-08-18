import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from "../Features/userSlice";
import navbarOpenReducer from "../Features/navbarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navbarOpen: navbarOpenReducer
  }
});
