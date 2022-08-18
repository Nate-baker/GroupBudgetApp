import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
    email: "",
    uid: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload; //Set Whole user object
    },
    setUsername: (state, action) => {
      state.value.username = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    setEmail: (state, action) => {
      state.value.email = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setUsername,
  setPassword,
  setEmail
} = userSlice.actions;

export default userSlice.reducer;
