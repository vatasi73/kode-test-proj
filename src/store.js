import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { loadAllReducer } from "./component/features/loadAll-slice";
import { controlsReducer } from "./component/features/search/search-slice";
import { sortReducer } from "./component/features/sort/sort-slice";

export const store = configureStore({
  reducer: {
    all: loadAllReducer,
    controls: controlsReducer,
    sort: sortReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
