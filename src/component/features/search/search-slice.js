import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
};
const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setClear: () => initialState,
  },
});
export const { setSearch, setClear } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;

export const selectControls = (state) => state.controls;
