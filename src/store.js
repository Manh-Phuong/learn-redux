import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/counterSlice";
import taskManagerSlice from "./TaskManager/taskManagerSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    taskManager: taskManagerSlice,
  },
});

export default store;
