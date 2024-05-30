import "./styles.css";
import "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";
import { TaskProvider } from "./contexts/task";
import EditTaskPage from "./pages/EditTaskPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <div className="App">
      <h1>TO DO App</h1>
      <Router>
        <TaskProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/todo/addTask" element={<AddTaskPage />}></Route>
            <Route path="/todo/EditTask/:id" element={<EditTaskPage />}></Route>
            <Route path="/todo/Details/:id" element={<DetailsPage />}></Route>
          </Routes>
        </TaskProvider>
      </Router>
    </div>
  );
}
