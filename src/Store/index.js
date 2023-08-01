import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import AuthReducer from "./AuthReducer";
import TodoReducer from "./reducer/todo";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
    todo: TodoReducer,
  },
});

export default store;
