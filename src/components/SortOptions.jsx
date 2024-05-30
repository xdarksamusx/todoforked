import React, { useContext } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { TaskContext } from "../contexts/task";

import CheckMark from "../icons/Checkmark";

const GlobalStyles = createGlobalStyle`

ul, li, small {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  width: 200px;
  background: #e3e3e3;
  border-bottom: 1px solid black;
  padding: 10px;
  box-sizing: border-box;

   

}

 

`;

const UnOrderedList = styled.ul`
  position: absolute;
  opacity: 99%;
  z-index: 999;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  top: 30px;
  right: 0;
  width: 200px;
`;

const Options = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

function SortOptions() {
  const {
    selectedOption,
    handleSelectedSortedOptionIndex,
    selectedSortedOptionIndex
  } = useContext(TaskContext);

  const options = [
    "default",
    "ascending date",
    "descending date",
    "ascending complexity",
    "descending complexity",
    "ascending priority",
    "descending priority",
    "ascending rating",
    "descending rating"
  ];
  return (
    <>
      <GlobalStyles />

      <Options>
        <UnOrderedList>
          {options.map((option, index) => {
            return (
              <li key={option}>
                {" "}
                <small>{option}</small>{" "}
                <button onClick={() => handleSelectedSortedOptionIndex(index)}>
                  {" "}
                  {selectedSortedOptionIndex === index && (
                    <CheckMark></CheckMark>
                  )}{" "}
                </button>{" "}
              </li>
            );
          })}
        </UnOrderedList>
      </Options>
    </>
  );
}

export default SortOptions;
