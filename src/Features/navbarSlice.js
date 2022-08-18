import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarOpen: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.value = !state.value;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
