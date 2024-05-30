import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SVG = styled.svg`
  height: 10px;
  width: 15px;
`;

const Circle = styled.div`
  position: absolute;
  top: 3px;
  right: 60px;
  background: red;
  border: solid black 1px;
  height: 15px;
  width: 15px;
  border-radius: 50%;

  &hover: {
    border: solid blue 3px;
    background: black;
  }
`;

function RightArrowButton() {
  return (
    <>
      <Circle>
        <SVGContainer>
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="m23.263,10.237c.467.461.731,1.098.737,1.763-.002.658-.258,1.296-.721,1.766l-3.918,4.081c-.098.102-.229.153-.361.153-.125,0-.25-.046-.346-.14-.199-.19-.206-.508-.015-.707l3.923-4.086c.163-.165.283-.358.355-.567H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h22.411c-.075-.208-.196-.398-.358-.558l-3.955-4.05c-.193-.197-.189-.514.009-.707.198-.192.514-.189.707.009l3.948,4.043Zm.737,1.763s0-.006,0,0h0Z" />
          </SVG>
        </SVGContainer>
      </Circle>
    </>
  );
}

export default RightArrowButton;
