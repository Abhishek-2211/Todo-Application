import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import "./TaskList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteTask,
  markAsDoneTask,
  editTask,
} from "../features/todo/todoSlice";
export default function TaskList() {
  const allTask = useSelector((state) => state.taskContainer);
  const dispatch = useDispatch();
  console.log("new", allTask);
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };
  const handleMarkAsDone = (id) => {
    console.log("marks", id);
    dispatch(markAsDoneTask(id));
  };
  const editHandler = (id) => {
    dispatch(editTask(id));
  };

  return (
    <>
      <div>
        <ul>
          {allTask.map((todo) => (
            <li
              key={todo.id}
              style={{ backgroundColor: todo.isDone ? "green" : "" }}
            >
              {todo.task}
              <span className="btn">
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteHandler(todo.id)}
                >
                  Delete
                </Button>
              </span>
              <span className="btn">
                <Button
                  variant="contained"
                  type="submit"
                  button
                  onClick={() => handleMarkAsDone(todo.id)}
                >
                  Task Completed
                </Button>
              </span>
              <span className="btn editBtn">
                <Button
                  variant="contained"
                  type="button"
                  button
                  onClick={() => editHandler(todo.id)}
                >
                  Edit
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
