import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { setSort } from "./sort/sort-slice";

export const SetloadAll = createAsyncThunk(
  "@@loadAll/load-all-ppl",
  (department, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.loadAll(department));
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.massage);
      return rejectWithValue("Unknown error");
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
  department: "all",
  sort: true,
};

const loadAllslice = createSlice({
  name: "@@loadAll",
  initialState,
  reducers: {
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SetloadAll.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(SetloadAll.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || "Ошибка сервера";
    });

    builder.addCase(SetloadAll.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload.data.items;
    });
    builder.addCase(setSort, (state) => {
      state.sort = true;
    });
  },
});
export const { setDepartment } = loadAllslice.actions;
export const loadAllReducer = loadAllslice.reducer;

export const selectAllInfo = (state) => ({
  status: state.all.status,
  error: state.all.error,
});

export const selectVisibleItems = (state, { search = "" }) => {
  return state.all.list.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName.toLowerCase().includes(search.toLowerCase()) ||
      item.userTag.toLowerCase().includes(search.toLowerCase())
  );
};

export const selectAll = (state) => state.all.list;
export const selectDepartment = (state) => state.all.department;
