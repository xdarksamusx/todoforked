import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { TaskContext } from "../contexts/task";
import PowerIcon from "../icons/PowerIcon";
import PlusIcon from "../icons/PlusIcon";
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const UserButton = styled.button`
  gap: 18px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  border-radius: 35px;
  align-items: center;

  width: 225px;
  height: 24px;
  position: relative;
  background: blue;
  color: white;
  cursor: pointer;

  &:hover {
    background: navy;
    box-shadow: 1px 4px 8px 2px rgba(128, 128, 128, 0.46),
      -1px 4px 8px 2px rgba(128, 128, 128, 0.46);
    transform: scale(1.05);
  }
`;

function BlueButton({ text, onClickPowerMode }) {
  const { powerMode } = useContext(TaskContext);
  return (
    <>
      {text === "Power Mode On" || text === "Power Off" ? (
        <UserButton onClick={onClickPowerMode}>
          {" "}
          <PowerIcon
            textDecoration={powerMode ? "line-through" : "none"}
          ></PowerIcon>{" "}
          {text}
        </UserButton>
      ) : (
        <UserButton>
          {" "}
          <PlusIcon /> {text}
        </UserButton>
      )}
    </>
  );
}

export default BlueButton;
