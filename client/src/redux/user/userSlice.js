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
  },
});

export const {
  signinStart,
  signinSuccess,
  signinFailuar,
  updateUserStart,
  updateUserSuccess,
  updateUserFailuar,
} = userSlice.actions;
export default userSlice.reducer;
