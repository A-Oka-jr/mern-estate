import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      (state.loading = false), (state.error = false);
    },
    signinFailuar: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },

    updateUserStart: (state) => {
      state.loading = true;
    },

    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },

    updateUserFailuar: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteUserStart: (state) => {
      state.loading = true;
    },

    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },

    deleteUserFailuar: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    signOutUserStart: (state) => {
      state.loading = true;
    },

    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },

    signOutUserFailuar: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signinStart,
  signinSuccess,
  signinFailuar,
  updateUserStart,
  updateUserSuccess,
  updateUserFailuar,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailuar,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailuar,
} = userSlice.actions;
export default userSlice.reducer;
