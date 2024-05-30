import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SVG = styled.svg`
  fill: white;
  border: 1 px solid black;
  z-index: 999;
  height: 14px;
  width: 15px;
`;

function PlusIcon() {
  return (
    <>
      <SVGContainer>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {" "}
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </SVG>
      </SVGContainer>
    </>
  );
}

export default PlusIcon;
