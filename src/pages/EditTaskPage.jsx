import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LeftArrowButton from "../icons/LeftArrowButton";
import Buttons from "../components/Buttons";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BlueButton from "../components/BlueButton";
import { TaskContext } from "../contexts/task";
import Page from ".././components/Page";
import { useParams } from "react-router-dom";

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

const NameOfTaskForm = styled.form``;

const SubTaskForm = styled.form`
  margin-top: 15px;
`;

function EditTaskPage() {
  const {
    tasks,
    setCloseIcon,
    editingMode,
    setEditingMode,
    setTasks,
    setInitialTasks
  } = useContext(TaskContext);

  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");
  const [subTask, setSubTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  const { id } = useParams();

  const handleSubmittedEdit = () => {
    console.log("click");
    setCloseIcon(true);

    const copyOfTasks = [...tasks];

    const foundTask = copyOfTasks.find((task) => task.id === id);

    const name = value;

    const foundIndex = copyOfTasks.indexOf(foundTask);

    const reformattedDate = formatDate(date);
    const reformattedTime = formatTime(time);

    const newColorComputed = calculateTimeLeft(date);
    const newtotalRating = complexityLevel + priorityLevel;

    const editedTaskObject = {
      id,
      name,
      complexityLevel,
      priorityLevel,
      dueDate: reformattedDate,
      timeDue: reformattedTime,
      subTasks,
      tags,
      color: newColorComputed,
      totalRating: newtotalRating
    };

    copyOfTasks[foundIndex] = editedTaskObject;
    setInitialTasks(copyOfTasks);
    setTasks(copyOfTasks);
  };

  useEffect(() => {
    setEditingMode(false);
  }, []);

  return (
    <>
      <h5> Edit Task:</h5>

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

      <ButtonWrapper onClick={() => handleSubmittedEdit()}>
        <BlueButton text={"Edit a Task"}> </BlueButton>
      </ButtonWrapper>
    </>
  );
}

export default EditTaskPage;
