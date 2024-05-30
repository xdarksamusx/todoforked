import React, { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../contexts/task";

const Wrapper = styled.div`
  border-radius: 9px;
  padding: 2px 9px;
  border: 1px black solid;
  display: flex;
  justify-content: space-between;

  align-items: center;
  position: relative;
  width: 200px;
  height: 23px;
  margin-top: 12px;
`;

const ButtonContainer = styled.span`
  margin-right: 3px;

  padding-top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background: #ebf5ff;

  &:hover {
    background: #ffedeb;
  }
`;

const Xmark = styled.svg`
  height: 8px;
  width: 8px;
`;

function SubTask({ subTask, index, onClick, onCloseClick, onWrapperClick }) {
  const { closeIcon, setCloseIcon } = useContext(TaskContext);
  const { name, editMode } = subTask;
  return (
    <>
      <Wrapper onClick={onWrapperClick}>
        <div>
          {index + 1}. {name}
        </div>

        {closeIcon && (
          <ButtonContainer>
            <Xmark
              onCloseClick={() => onCloseClick()}
              onClick={onClick}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M 486.71604938271605 504.0987654320988 Q 496.1975308641975 512 504.0987654320988 504.0987654320988 Q 512 496.1975308641975 504.0987654320988 486.71604938271605 L 273.38271604938274 256 L 273.38271604938274 256 L 504.0987654320988 25.28395061728395 L 504.0987654320988 25.28395061728395 Q 512 15.802469135802468 504.0987654320988 7.901234567901234 Q 496.1975308641975 0 486.71604938271605 7.901234567901234 L 256 238.6172839506173 L 256 238.6172839506173 L 25.28395061728395 7.901234567901234 L 25.28395061728395 7.901234567901234 Q 15.802469135802468 0 7.901234567901234 7.901234567901234 Q 0 15.802469135802468 7.901234567901234 25.28395061728395 L 238.6172839506173 256 L 238.6172839506173 256 L 7.901234567901234 486.71604938271605 L 7.901234567901234 486.71604938271605 Q 0 496.1975308641975 7.901234567901234 504.0987654320988 Q 15.802469135802468 512 25.28395061728395 504.0987654320988 L 256 273.38271604938274 L 256 273.38271604938274 L 486.71604938271605 504.0987654320988 L 486.71604938271605 504.0987654320988 Z" />
            </Xmark>
          </ButtonContainer>
        )}
      </Wrapper>
    </>
  );
}

export default SubTask;
