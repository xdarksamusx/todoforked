import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { TaskContext } from "../contexts/task";
import TaskBox from "./TaskBox";
function TaskBoxes({ searchTerm }) {
  const { tasks } = useContext(TaskContext);
  const copyOfTasks = [...tasks];

  const filteredTasks = copyOfTasks.filter((task) => {
    if (task.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return task;
    }
  });

  return (
    <>
      {filteredTasks.map((task, index) => {
        return <TaskBox task={task} key={task.id}></TaskBox>;
      })}
    </>
  );
}

export default TaskBoxes;
