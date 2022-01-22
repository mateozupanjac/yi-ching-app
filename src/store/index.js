import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";
import yiChingReducer from "./yiChing-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    yiChing: yiChingReducer,
  },
});

export default store;
