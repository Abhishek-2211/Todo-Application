import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
function App() {
  return (
    <>
      <Provider store={store}>
        <TaskInput />
        <TaskList />
      </Provider>
    </>
  );
}

export default App;
