import { createSlice } from "@reduxjs/toolkit";

const taskManagerSlice = createSlice({
  name: "taskManager",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        content: action.payload,
        complete: false,
        deleted: false,
      });
    },
    changeTask: (state, action) => {
      const task = state.find((item) => action.payload.id === item.id);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      const task = state.find((item) => action.payload.id === item.id);
      if (task) {
        task.deleted = true;
      }
    },
    restoreTask: (state, action) => {
      const task = state.find((item) => action.payload.id === item.id);
      if (task) {
        task.deleted = false;
      }
    },
  },
});

export const { addTask, changeTask, deleteTask, restoreTask } =
  taskManagerSlice.actions;
export default taskManagerSlice.reducer;
