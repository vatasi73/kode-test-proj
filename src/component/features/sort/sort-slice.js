import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sort: true,
};
const sortSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export const { setSort } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
export const selectSort = (state) => state.sort.sort;
