import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from ".././components/SearchBar";
import Button from ".././components/Button";
import BlueButton from ".././components/BlueButton";
import { TaskContext } from "../contexts/task";
import TaskBoxes from "../components/TaskBoxes";
import SortOptions from "../components/SortOptions";
import TaskBox from "../components/TaskBox";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  gap: 55px;
  display: flex;
  position: relative;
  justify-content: space-evenly;
`;

const BlueButtonContainer = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 444;
`;

const PageContainer = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

function HomePage() {
  const {
    tasks,
    displaySortOptions,
    handleDisplaySortOptions,
    powerMode,
    setPowerMode,
    handlePower,
    setDueTask,
    dueTask
  } = useContext(TaskContext);
  useEffect(() => {}, [tasks]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, [tasks]);

  return (
    <>
      <PageContainer>
        <SearchBarContainer>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </SearchBarContainer>
        <ButtonsContainer>
          <Button onClick={handleDisplaySortOptions} text={"Sort"}></Button>
          {displaySortOptions && <SortOptions> </SortOptions>}

          <Button text={"Category"}></Button>
        </ButtonsContainer>

        <BlueButtonContainer>
          <BlueButton
            style={{ textDecoration: powerMode ? "line-through" : "none" }}
            text={powerMode ? "Power Mode On" : "Power Off"}
            onClickPowerMode={() => handlePower()}
          />
          {powerMode ? (
            <TaskBox task={dueTask} />
          ) : tasks.length > 0 ? (
            <TaskBoxes searchTerm={searchTerm} />
          ) : null}

          <Link to="/todo/addTask">
            {" "}
            <BlueButton text={"Add A New Task"} />
          </Link>
        </BlueButtonContainer>
      </PageContainer>
    </>
  );
}
export default HomePage;
