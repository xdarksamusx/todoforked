import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SVG = styled.svg`
  height: 11px;
  width: 11px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 3px;
  right: 130px;
  background: red;
  border: solid black 1px;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  &:hover {
    border: green 2px solid;
  }

  &hover: {
    border: solid blue 3px;
    background: black;
  }
`;

function LeftArrowButton() {
  return (
    <>
      <Circle>
        <SVGContainer>
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {" "}
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </SVG>
        </SVGContainer>
      </Circle>
    </>
  );
}

export default LeftArrowButton;
