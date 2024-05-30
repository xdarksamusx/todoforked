import { TaskContext } from "../contexts/task";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import TrashIcon from "../icons/Trash";
import styled from "styled-components";

const Box = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background: ice;
  width: 340px;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  border-radius: 22px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FirstHeader = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`;

const SecondHeader = styled.div`
  gap: 15px;

  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  height: 16px;
  width: 16px;
  border: 1px black solid;
  border-radius: 50%;
`;

const EditButton = styled.svg`
  fill: black;
  height: 16px;
  width: 17px;
`;

const CheckMark = styled.svg`
  fill: black;
  border: 1px white solid;
  border-radius: 50%;
  height: 16px;
  width: 16px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Calender = styled.svg`
 height: 18px;
  width: 18px;
  margin-right: 5px;

}

`;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UpArrow = styled.svg`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`;

const ComplexityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FourArrows = styled.svg`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Tags = styled.div`
  display: flex;
  gap: 15px;
  padding: 3px;
`;

const Li = styled.li`
  list-style: none;
  padding: 0 7px;
  font-size: 12px;
`;

const LiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  max-width: 55px;
  padding: 1px 0;
`;

function TaskBox({ task, onClick }) {
  const {
    tasks,
    handleRemoveTask,
    editingMode,
    setEditingMode,
    handleEditingMode,
    handleSubmittedEdit
  } = useContext(TaskContext);
  const [isBlue, setIsBlue] = useState(false);

  if (!task) return null;

  const {
    id,
    name,
    dueDate,
    timeDue,
    subTasks,
    tags,
    priorityLevel,
    complexityLevel,
    color,
    taskDetails
  } = task;

  const toogleTheme = () => {
    setIsBlue(!isBlue);
  };

  return (
    <>
      <Box style={{ background: isBlue ? "cyan" : null }}>
        <HeaderContainer>
          <FirstHeader>
            <Circle style={{ background: color }}></Circle>
            <div style={{ textDecoration: isBlue ? "line-through" : "none" }}>
              {name}
            </div>
          </FirstHeader>
          <SecondHeader>
            <div>
              <span>
                <Link to={`/todo/EditTask/${id}`}>
                  <EditButton
                    onClick={onClick}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M 396 25 Q 406 16 419 16 L 419 16 L 419 16 Q 431 16 441 25 L 487 71 L 487 71 Q 496 81 496 93 Q 496 106 487 116 L 420 183 L 420 183 L 329 92 L 329 92 L 396 25 L 396 25 Z M 318 103 L 409 194 L 318 103 L 409 194 L 166 437 L 166 437 Q 163 440 161 442 L 161 407 L 161 407 Q 160 400 153 399 L 113 399 L 113 399 L 113 359 L 113 359 Q 112 352 105 351 L 70 351 L 70 351 Q 72 349 75 346 L 318 103 L 318 103 Z M 52 384 Q 55 375 59 367 L 97 367 L 97 367 L 97 407 L 97 407 Q 98 414 105 415 L 145 415 L 145 415 L 145 453 L 145 453 Q 137 457 128 460 L 21 491 L 21 491 L 52 384 L 52 384 Z M 453 14 Q 438 0 419 0 L 419 0 L 419 0 Q 399 0 385 14 L 63 335 L 63 335 Q 45 354 37 379 L 1 501 L 1 501 Q 0 505 3 509 Q 7 512 11 511 L 133 475 L 133 475 Q 158 467 177 449 L 498 127 L 498 127 Q 512 113 512 93 Q 512 74 498 59 L 453 14 L 453 14 Z M 319 172 Q 323 166 319 161 Q 313 156 307 161 L 163 305 L 163 305 Q 159 310 163 316 Q 169 321 175 316 L 319 172 L 319 172 Z" />
                  </EditButton>
                </Link>
              </span>
            </div>
            <div>
              <span>
                {" "}
                <CheckMark
                  onClick={toogleTheme}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M 507.302752293578 89.24770642201835 Q 512 96.29357798165138 507.302752293578 103.33944954128441 L 187.88990825688074 422.7522935779817 L 187.88990825688074 422.7522935779817 Q 180.8440366972477 427.44954128440367 173.7981651376147 422.7522935779817 L 4.697247706422019 253.651376146789 L 4.697247706422019 253.651376146789 Q 0 246.60550458715596 4.697247706422019 239.55963302752295 Q 11.743119266055047 234.86238532110093 18.788990825688074 239.55963302752295 L 180.8440366972477 402.7889908256881 L 180.8440366972477 402.7889908256881 L 493.2110091743119 89.24770642201835 L 493.2110091743119 89.24770642201835 Q 500.25688073394497 84.55045871559633 507.302752293578 89.24770642201835 L 507.302752293578 89.24770642201835 Z" />
                </CheckMark>
              </span>
            </div>
            <div>
              <span>
                <TrashIcon onClick={() => handleRemoveTask(id)}> </TrashIcon>
              </span>
            </div>
          </SecondHeader>
        </HeaderContainer>
        <DataContainer>
          <div>
            {" "}
            <span>
              <Calender
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M 152 0 Q 159 1 160 8 L 160 64 L 160 64 L 352 64 L 352 64 L 352 8 L 352 8 Q 353 1 360 0 Q 367 1 368 8 L 368 64 L 368 64 L 416 64 L 416 64 Q 443 65 461 83 Q 479 101 480 128 L 480 176 L 480 176 L 480 192 L 480 192 L 480 448 L 480 448 Q 479 475 461 493 Q 443 511 416 512 L 96 512 L 96 512 Q 69 511 51 493 Q 33 475 32 448 L 32 192 L 32 192 L 32 176 L 32 176 L 32 128 L 32 128 Q 33 101 51 83 Q 69 65 96 64 L 144 64 L 144 64 L 144 8 L 144 8 Q 145 1 152 0 L 152 0 Z M 464 192 L 48 192 L 464 192 L 48 192 L 48 448 L 48 448 Q 49 468 62 482 Q 76 495 96 496 L 416 496 L 416 496 Q 436 495 450 482 Q 463 468 464 448 L 464 192 L 464 192 Z M 144 120 L 144 80 L 144 120 L 144 80 L 96 80 L 96 80 Q 76 81 62 94 Q 49 108 48 128 L 48 176 L 48 176 L 464 176 L 464 176 L 464 128 L 464 128 Q 463 108 450 94 Q 436 81 416 80 L 368 80 L 368 80 L 368 120 L 368 120 Q 367 127 360 128 Q 353 127 352 120 L 352 80 L 352 80 L 160 80 L 160 80 L 160 120 L 160 120 Q 159 127 152 128 Q 145 127 144 120 L 144 120 Z" />
              </Calender>
            </span>
            Due Date: {dueDate} , {timeDue}
          </div>
        </DataContainer>

        <PriorityContainer>
          <div>
            <span>
              <UpArrow
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M 262.85714285714283 3.4285714285714284 Q 259.42857142857144 0 256 0 Q 252.57142857142858 0 249.14285714285714 3.4285714285714284 L 38.857142857142854 222.85714285714286 L 38.857142857142854 222.85714285714286 Q 34.285714285714285 228.57142857142858 38.857142857142854 235.42857142857142 Q 45.714285714285715 240 52.57142857142857 235.42857142857142 L 246.85714285714286 32 L 246.85714285714286 32 L 246.85714285714286 502.85714285714283 L 246.85714285714286 502.85714285714283 Q 248 510.85714285714283 256 512 Q 264 510.85714285714283 265.14285714285717 502.85714285714283 L 265.14285714285717 32 L 265.14285714285717 32 L 459.42857142857144 235.42857142857142 L 459.42857142857144 235.42857142857142 Q 466.2857142857143 240 473.14285714285717 235.42857142857142 Q 477.7142857142857 228.57142857142858 473.14285714285717 221.71428571428572 L 262.85714285714283 2.2857142857142856 L 262.85714285714283 3.4285714285714284 Z" />
              </UpArrow>
            </span>{" "}
            Priority: {priorityLevel}
          </div>
        </PriorityContainer>

        <ComplexityContainer>
          <div>
            <span>
              <FourArrows
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M 174.63565891472868 408.8062015503876 Q 168.68217054263565 404.83720930232556 162.72868217054264 408.8062015503876 Q 158.75968992248062 414.7596899224806 162.72868217054264 420.71317829457365 L 250.04651162790697 508.031007751938 L 250.04651162790697 508.031007751938 Q 256 512 261.95348837209303 508.031007751938 L 349.27131782945736 420.71317829457365 L 349.27131782945736 420.71317829457365 Q 353.2403100775194 414.7596899224806 349.27131782945736 408.8062015503876 Q 343.3178294573643 404.83720930232556 337.3643410852713 408.8062015503876 L 263.93798449612405 483.2248062015504 L 263.93798449612405 483.2248062015504 L 263.93798449612405 263.93798449612405 L 263.93798449612405 263.93798449612405 L 483.2248062015504 263.93798449612405 L 483.2248062015504 263.93798449612405 L 408.8062015503876 337.3643410852713 L 408.8062015503876 337.3643410852713 Q 404.83720930232556 343.3178294573643 408.8062015503876 349.27131782945736 Q 414.7596899224806 353.2403100775194 420.71317829457365 349.27131782945736 L 508.031007751938 261.95348837209303 L 508.031007751938 261.95348837209303 Q 512 256 508.031007751938 250.04651162790697 L 420.71317829457365 162.72868217054264 L 420.71317829457365 162.72868217054264 Q 414.7596899224806 158.75968992248062 408.8062015503876 162.72868217054264 Q 404.83720930232556 168.68217054263565 408.8062015503876 174.63565891472868 L 483.2248062015504 248.06201550387595 L 483.2248062015504 248.06201550387595 L 263.93798449612405 248.06201550387595 L 263.93798449612405 248.06201550387595 L 263.93798449612405 28.775193798449614 L 263.93798449612405 28.775193798449614 L 337.3643410852713 103.1937984496124 L 337.3643410852713 103.1937984496124 Q 343.3178294573643 107.16279069767442 349.27131782945736 103.1937984496124 Q 353.2403100775194 97.24031007751938 349.27131782945736 91.28682170542636 L 261.95348837209303 3.9689922480620154 L 261.95348837209303 3.9689922480620154 Q 256 0 250.04651162790697 3.9689922480620154 L 162.72868217054264 91.28682170542636 L 162.72868217054264 91.28682170542636 Q 158.75968992248062 97.24031007751938 162.72868217054264 103.1937984496124 Q 168.68217054263565 107.16279069767442 174.63565891472868 103.1937984496124 L 248.06201550387595 28.775193798449614 L 248.06201550387595 28.775193798449614 L 248.06201550387595 248.06201550387595 L 248.06201550387595 248.06201550387595 L 28.775193798449614 248.06201550387595 L 28.775193798449614 248.06201550387595 L 103.1937984496124 174.63565891472868 L 103.1937984496124 174.63565891472868 Q 107.16279069767442 168.68217054263565 103.1937984496124 162.72868217054264 Q 97.24031007751938 158.75968992248062 91.28682170542636 162.72868217054264 L 3.9689922480620154 250.04651162790697 L 3.9689922480620154 250.04651162790697 Q 0 256 3.9689922480620154 261.95348837209303 L 91.28682170542636 349.27131782945736 L 91.28682170542636 349.27131782945736 Q 97.24031007751938 353.2403100775194 103.1937984496124 349.27131782945736 Q 107.16279069767442 343.3178294573643 103.1937984496124 337.3643410852713 L 28.775193798449614 263.93798449612405 L 28.775193798449614 263.93798449612405 L 248.06201550387595 263.93798449612405 L 248.06201550387595 263.93798449612405 L 248.06201550387595 483.2248062015504 L 248.06201550387595 483.2248062015504 L 174.63565891472868 408.8062015503876 L 174.63565891472868 408.8062015503876 Z" />
              </FourArrows>
            </span>{" "}
            Complexity: {complexityLevel}
          </div>
        </ComplexityContainer>
        <Tags>
          {" "}
          {tags.map((tag) => {
            return (
              <LiContainer>
                {" "}
                <Li>{tag.name} </Li>{" "}
              </LiContainer>
            );
          })}
        </Tags>

        {taskDetails && (
          <DetailsContainer>
            <Link to={`/todo/Details/${id}`}> Task Details </Link>
          </DetailsContainer>
        )}
      </Box>
    </>
  );
}

export default TaskBox;
