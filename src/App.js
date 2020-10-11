import React from "react";
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./global.css";
import Header from "./components/Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
