import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SVG = styled.svg`
  height: 14px;
  width: 15px;
`;

function DownArrow() {
  return (
    <>
      <SVGContainer>
        <SVG viewBox="0 0 56.8 34" enableBackground="new 0 0 56.8 34">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#3E3E3E"
            d="M30.7,32.7L55.3,8.1c1.1-1.1,1.1-2.7,0-3.8L53.1,2L30.7,24.3
	c-1.1,1.1-2.8,1.1-3.9,0L4.5,2L2.2,4.3C1.1,5.4,1.1,7,2.2,8.1l24.6,24.6C27.9,33.7,29.7,33.7,30.7,32.7L30.7,32.7z"
          ></path>
        </SVG>
      </SVGContainer>
    </>
  );
}

export default DownArrow;
