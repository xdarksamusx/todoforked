import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LeftArrowButton from "../icons/LeftArrowButton";
import Buttons from "../components/Buttons";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PlusIcon from "../icons/PlusIcon";
import BlueButton from "../components/BlueButton";
import { TaskContext } from "../contexts/task";
import CloseMark from "../icons/CloseMark";
import SubTask from "../components/Subtask";
import { v4 as uuidv4 } from "uuid";

import {
  calculateTimeLeft,
  formatDate,
  formatTime
} from ".././functions/utils.js";

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 145px;
  &:hover {
    border: cyan 1px solid;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const RatingsSection = styled.section``;

const PriorityLevelHeader = styled.header``;

const PrioritySection = styled.section``;

const ComplexitySection = styled.section``;

const ComplexityLevelHeader = styled.header``;

const SubTaskInput = styled.input`
  &:hover {
    border: cyan 1px solid;
  }
`;

const SubTaskForm = styled.form`
  margin-top: 15px;
`;

const TagsForm = styled.form``;

const DateInput = styled.input`
  &:hover {
    cursor: pointer;
    border: cyan 1px solid;
  }
`;

const TimeInput = styled.input`
  &:hover {
    cursor: pointer;
    border: cyan 1px solid;
  }
`;

const AddTaskInput = styled.input`
  &:hover {
    border: cyan 1px solid;
  }
`;

const SubTasks = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background: yellow;

  width: 50px;
  box-sizing: border-box;
  margin: 1px;
  color: blue;
  padding-left: 13px;
  position: relative;
`;

const TagName = styled.span`
  font-size: 14px;
`;

function Page({
  value,
  setValue,
  tag,
  setTag,
  subTask,
  setSubTask,
  date,
  setDate,
  time,
  setTime,
  subTasks,
  setSubTasks,
  tags,
  setTags
}) {
  const [subTaskEditMode, setSubTaskEditMode] = useState(false);

  const handleSubmittedTags = (e) => {
    e.preventDefault();
    const id = uuidv4();

    const tagObject = { name: tag, id };
    const copyOfTagsArray = [...tags, tagObject];
    setTags(copyOfTagsArray);
    setTag("");
  };

  const handleSubmittedSubTasks = (e) => {
    e.preventDefault();
    const subTasksObject = { name: subTask, editMode: false };
    const copyOfSubTasksArray = [...subTasks, subTasksObject];

    setSubTasks(copyOfSubTasksArray);
    setSubTask("");
  };

  const handleTagInput = (tag) => {
    setTag(tag);
  };

  const handleRemoveTag = (tagID) => {
    const copyOfTags = [...tags];
    const filteredTags = copyOfTags.filter((tag) => tag.id !== tagID);
    setTags(filteredTags);
  };

  const handleSubTaskInput = (subtask) => {
    setSubTask(subtask);
  };

  const handleEditedSubtask = (index) => {
    setSubTaskEditMode(!subTaskEditMode);
  };

  const handleRemoveSubTask = (index) => {
    const copyOfSubtasks = [...subTasks];
    const filteredSubTasks = copyOfSubtasks.filter((_, i) => i !== index);
    setSubTasks(filteredSubTasks);
  };

  const handleTaskNameInput = (name) => {
    setValue(name);
  };

  const handleRatingsLevelClick = (section, difficultyRating) => {
    if (section === "Complexity") {
      complexityLevel = difficultyRating;
    } else {
      priorityLevel = difficultyRating;
    }
  };

  const handleDataInput = (date) => {
    setDate(date);
  };

  const handleTimeInput = (time) => {
    setTime(time);
  };

  return (
    <>
      <Header>
        <Link to="/">
          <LeftArrowButton> </LeftArrowButton>{" "}
        </Link>
      </Header>{" "}
      <PageContainer>
        <section>
          <AddTaskInput
            placeholder="Add task"
            value={value}
            onChange={(e) => handleTaskNameInput(e.target.value)}
          />
        </section>
        <RatingsSection>
          <ComplexitySection>
            <ComplexityLevelHeader>
              {" "}
              <h5>Select Complexity Level</h5>
            </ComplexityLevelHeader>
            <div>
              <Buttons
                onClick={(text) => handleRatingsLevelClick("Complexity", text)}
              >
                {" "}
              </Buttons>
            </div>
          </ComplexitySection>
          <PrioritySection>
            <PriorityLevelHeader>
              {" "}
              <h5>Select Priority Level</h5>
            </PriorityLevelHeader>
            <div>
              <Buttons
                onClick={(text) => handleRatingsLevelClick("Priority", text)}
              >
                {" "}
              </Buttons>
            </div>
          </PrioritySection>
        </RatingsSection>
        <section>
          <div>
            <div>
              <h4> Due Date</h4>

              <DateInput
                type="date"
                value={date}
                onChange={(e) => handleDataInput(e.target.value)}
              />
            </div>

            <div>
              <h4>Select Time</h4>
              <TimeInput
                type="time"
                value={time}
                onChange={(e) => handleTimeInput(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section>
          <h4>Add CheckList for Subtasks</h4>

          <SubTasks>
            {subTasks.map((subTask, index) => (
              <SubTask
                key={subTask}
                onCloseClick={() => handleRemoveSubTask(index)}
                onWrapperClick={() => handleEditedSubtask(index)}
                index={index}
                subTask={subTask}
              ></SubTask>
            ))}
          </SubTasks>
          <SubTaskForm onSubmit={handleSubmittedSubTasks}>
            <SubTaskInput
              value={subTask}
              placeholder="Add subtask"
              onChange={(e) => handleSubTaskInput(e.target.value)}
            />
          </SubTaskForm>
        </section>
        <section>
          <InputContainer>
            <h4>Add Tags</h4>
            <Tags>
              {Object.entries(tags).map(([key, tag]) => {
                return (
                  <Tag key={key}>
                    {" "}
                    <CloseMark
                      onClick={() => handleRemoveTag(tag.id)}
                    ></CloseMark>{" "}
                    <TagName> #{tag.name}</TagName>
                  </Tag>
                );
              })}
            </Tags>
            <TagsForm onSubmit={handleSubmittedTags}>
              <Input
                value={tag}
                placeholder="Add tags"
                onChange={(e) => handleTagInput(e.target.value)}
              />
            </TagsForm>
          </InputContainer>
        </section>
      </PageContainer>
      <Link to="/"> </Link>
    </>
  );
}

export default Page;
