import React from "react";
import styled from "styled-components";
import DownArrow from ".././icons/DownArrow";

const UserButton = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  cursor: pointer;

  width: 170px;
  height: 25px;
  &:hover {
    border: cyan 2px solid;
  }
`;

function Button({ text, onClick }) {
  return (
    <>
      <UserButton onClick={onClick}>
        {text} <DownArrow />
      </UserButton>
    </>
  );
}

export default Button;
