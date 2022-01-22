import { createSlice } from "@reduxjs/toolkit";

const initialUISlice = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: initialUISlice,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
