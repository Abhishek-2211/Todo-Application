import { useEffect, useState } from "react";
import "./TaskInput.css";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { addTask, enteringTask } from "../features/todo/todoSlice";

export default function TaskInput() {
  const task = useSelector((state) => state.task);
  console.log("task", task);
  const dispatch = useDispatch();
  let submitHandler = (event) => {
    event.preventDefault();

    dispatch(addTask(task));
  };

  return (
    <>
      <div>
        <h2 id="header">TODO APPLICATION</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="input"
            placeholder="Enter your Task"
            value={task}
            onChange={(e) => dispatch(enteringTask(e.target.value))}
          />
          <Button variant="contained" type="submit">
            Add Task
          </Button>
        </form>
      </div>
    </>
  );
}
