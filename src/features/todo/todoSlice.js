import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  task: "",
  editedTaskId: "",
  toggleEdit: false,
  taskContainer: [],
  //taskContainer: JSON.parse(localStorage.getItem("list")),
};

export const todoSlice = createSlice({
  name: "taskContainer",
  initialState,
  reducers: {
    enteringTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      if (state.toggleEdit != false) {
        state.taskContainer.map((todo) => {
          if (todo.id == state.editedTaskId) {
            return (todo.task = state.task);
          }
        });
        state.toggleEdit = false;
      } else {
        const newTask = {
          id: nanoid(),
          task: action.payload,
          isDone: false,
        };

        state.taskContainer.push(newTask);
      }
      state.task = "";
    },

    deleteTask: (state, action) => {
      state.taskContainer = state.taskContainer.filter(
        (todo) => todo.id !== action.payload
      );
    },
    editTask: (state, action) => {
      let newEdited = state.taskContainer.find((todo) => {
        return todo.id == action.payload;
      });
      state.task = newEdited.task;
      state.editedTaskId = newEdited.id;
      state.toggleEdit = true;
    },

    markAsDoneTask: (state, action) => {
      let markedTask = state.taskContainer.find((todo) => {
        return todo.id == action.payload;
      });
      if (markedTask.isDone == false) {
        markedTask.isDone = true;
      } else {
        markedTask.isDone = false;
      }
    },
  },
});

export const { addTask, deleteTask, markAsDoneTask, editTask, enteringTask } =
  todoSlice.actions;
export default todoSlice.reducer;
