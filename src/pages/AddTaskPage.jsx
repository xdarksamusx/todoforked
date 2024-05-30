import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BlueButton from "../components/BlueButton";
import { TaskContext } from "../contexts/task";
import Page from ".././components/Page";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import {
  calculateTimeLeft,
  formatDate,
  formatTime
} from ".././functions/utils.js";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

function AddTaskPage() {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");
  const [subTask, setSubTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const {
    setCloseIcon,
    tasks,
    setTasks,
    editingMode,
    setEditingMode,
    displaySubTaskInput,
    setDisplaySubTaskInput,
    setInitialTasks
  } = useContext(TaskContext);

  const handleSubmittedTask = (e) => {
    e.preventDefault();
    setCloseIcon(true);

    const id = uuidv4();
    const reformattedDate = formatDate(date);
    const reformattedTime = formatTime(time);
    const name = value;

    const color = calculateTimeLeft(date);

    const totalRating = complexityLevel + priorityLevel;

    if (!name || !reformattedDate || !reformattedTime) return;
    const taskObject = {
      id,
      taskDetails: true,
      name,
      complexityLevel,
      priorityLevel,
      dueDate: reformattedDate,
      timeDue: reformattedTime,
      subTasks,
      tags,
      color,
      totalRating
    };

    const copyOfTasksArray = [...tasks, taskObject];
    setInitialTasks(copyOfTasksArray);
    setTasks(copyOfTasksArray);
    setValue("");

    setSubTasks([]);
    setTags([]);
    setValue("");

    setTime("");

    setDate("");
    setTag("");
    setSubTask("");
    setDisplaySubTaskInput(!displaySubTaskInput);
    navigate("/");
  };

  useEffect(() => {
    setEditingMode(true);
  }, []);

  return (
    <>
      <h5> Add a new Task:</h5>

      <Page
        editingMode={editingMode}
        value={value}
        setValue={setValue}
        tag={tag}
        setTag={setTag}
        subTask={subTask}
        setSubTask={setSubTask}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        subTasks={subTasks}
        setSubTasks={setSubTasks}
        tags={tags}
        setTags={setTags}
      >
        {" "}
      </Page>

      <ButtonWrapper onClick={handleSubmittedTask}>
        <BlueButton text={"Add a Task"}> </BlueButton>
      </ButtonWrapper>
    </>
  );
}

export default AddTaskPage;
