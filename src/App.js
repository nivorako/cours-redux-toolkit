import { useState } from "react";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "Faire les courses", done: false },
  //   { id: 2, text: "Ménage !", done: true },
  // ]);

  // const addTask = (text) => {
  //   const newTask = {
  //     text,
  //     id: Date.now(),
  //     done: false,
  //   };

  //   setTasks([...tasks, newTask]);
  // };

  // const deleteTask = (id) => {
  //   const filteredTasks = tasks.filter((t) => t.id !== id);
  //   setTasks(filteredTasks);
  // };

  // const toggleTask = (id) => {
  //   const realTask = tasks.find((t) => t.id === id);
  //   const index = tasks.findIndex((t) => t.id === id);
  //   const taskCopy = { ...realTask };
  //   const tasksListCopy = [...tasks];

  //   taskCopy.done = !taskCopy.done;
  //   tasksListCopy[index] = taskCopy;
  //   setTasks(tasksListCopy);
  // };

  return (
    <Provider store={store} >
      <div className="container">
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
