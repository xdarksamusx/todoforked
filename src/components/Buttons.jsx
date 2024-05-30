import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TaskContext } from "../contexts/task";

const ButtonContainer = styled.div``;

const Button = styled.button`
  border-radius: 50%;
  height: 29px;
  width: 29px;
  text-align-last: auto;
  margin-right: 5px;
  background-color: ${(props) => (props.selected ? "blue" : "red")};
  &:hover {
    border: green 3px solid;

    cursor: pointer;
  }
`;

function Buttons({ onClick }) {
  const { tasks } = useContext(TaskContext);

  const [selected, setSelected] = useState(null);

  const handleButtonClick = (text) => {
    setSelected(text === selected ? null : text);

    onClick(text);
  };

  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  useEffect(() => {
    setSelected(false);
  }, [tasks]);

  return (
    <>
      <ButtonContainer>
        {numbers.map((number) => {
          return (
            <Button
              selected={selected === number.toString()}
              key={number}
              onClick={(e) => handleButtonClick(e.target.textContent)}
            >
              {number}
            </Button>
          );
        })}
      </ButtonContainer>
    </>
  );
}

export default Buttons;
