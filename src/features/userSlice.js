import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  userData: null,
  searchInput: "tech",
  blogData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
  },
});

export const { setSignedIn, setUserData, setSearchInput, setBlogData } =
  userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.isUserData;
export const selectSearchInput = (state) => state.user.isSearchInput;
export const selectBlogData = (state) => state.user.isBlogData;

export default userSlice.reducer;
