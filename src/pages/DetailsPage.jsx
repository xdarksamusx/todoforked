import LeftArrowButton from "../icons/LeftArrowButton";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { TaskContext } from "../contexts/task";
import TaskBox from "../components/TaskBox";
import { useParams } from "react-router-dom";
import Subtask from ".././components/Subtask";

const LeftArrowContainer = styled.div`
  height: 20px;
  width: 20px;
`;

function DetailsPage() {
  const { tasks } = useContext(TaskContext);
  const copyOfTasks = [...tasks];
  const { id: paramsID } = useParams();
  const foundTask = copyOfTasks.find((task) => task.id === paramsID);
  const getIndexOfTask = copyOfTasks.indexOf(foundTask);

  if (!foundTask)
    return (
      <>
        <div> Tasks Removed</div>
        <div>
          {" "}
          Please click <Link to="/">here</Link>
        </div>
      </>
    );

  const {
    id,
    taskName,

    complexityLevel,
    priorityLevel,
    dueDate,
    timeDue,
    subTasks,
    tags,
    color
  } = foundTask;

  const updatedFoundTask = { ...foundTask, taskDetails: false };

  const handleDetailedSubtasks = (index, miniTasks, foundTask, indexOfTask) => {
    const copyOfTasks = [...tasks];
    const subTask = miniTasks[index];
    const copyOfSubtasks = [...miniTasks];
    const filteredSubTasks = copyOfSubtasks.filter(
      (miniTask) => miniTask !== subTask
    );

    const updatedFoundTask = {
      ...foundTask,
      subTasks: filteredSubTasks
    };

    copyOfTasks[indexOfTask] = updatedFoundTask;
    setTasks(copyOfTasks);
  };

  useEffect(() => {}, [tasks]);

  return (
    <>
      <LeftArrowContainer>
        <Link to={"/"}>
          {" "}
          <LeftArrowButton />
        </Link>
      </LeftArrowContainer>
      <h2> Task Details</h2>

      {foundTask && <TaskBox task={updatedFoundTask}></TaskBox>}

      {foundTask.subTasks.map((subTask, index) => {
        return (
          <Subtask
            onClick={() =>
              handleDetailedSubtasks(index, subTasks, foundTask, getIndexOfTask)
            }
            index={index}
            subTask={subTask}
          ></Subtask>
        );
      })}
    </>
  );
}

export default DetailsPage;
