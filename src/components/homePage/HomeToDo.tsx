import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../images/ArrowLineRight2.png';
import done from '../images/done icon.png';

const HomeToDo = () => {
  const [leftnum, setLeftnum] = useState(2);
  const [toDoTitle, setToDoTitle] = useState('경영전략');

  return (
    <HomeToDoContainer>
      <Title>할 일</Title>
      <ToDosContainer>
        <ToDoContainer>
          <ToDoTitle>{toDoTitle}</ToDoTitle>
          <Left>
            <LeftText>남은 일</LeftText>
            <LeftNum>{leftnum}</LeftNum>
          </Left>
          <ToDoList>
            <ToDo>
              <Done src={done} />
              <ToDoText>해외 시장 조사</ToDoText>
              <Arrow src={arrow} />
            </ToDo>
          </ToDoList>
        </ToDoContainer>
      </ToDosContainer>
    </HomeToDoContainer>
  );
};

const HomeToDoContainer = styled.div`
  position: relative;
  width: 1680px;
  height: 660px;
`;
const Title = styled.div`
  position: absolute;
  top: 24px;
  left: 54px;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
`;
const ToDosContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 54px;
  width: 1680px;
  height: 480px;
  overflow: auto;
  display: flex;
`;
const ToDoContainer = styled.div`
  width: 372px;
  height: 448px;
  background: #f4f8ff;
  border-radius: 16px;
  margin-right: 28px;
  position: relative;
`;
const ToDoTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
`;
const Left = styled.div``;
const LeftText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #487aff;
  position: absolute;
  right: 56px;
  top: 26px;
`;
const LeftNum = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  background-color: #487aff;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
const ToDoList = styled.div`
  position: absolute;
  top: 72px;
  left: 20px;
  width: 352px;
  height: 376px;
  overflow: auto;
`;
const ToDo = styled.div`
  width: 332px;
  height: 72px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
`;

const ToDoText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #505050;
  margin-left: 16px;
`;

const Arrow = styled.img`
  position: absolute;
  right: 18px;
`;

const Done = styled.img`
  width: 56px;
  height: 34px;
  margin-left: 12px;
`;

export default HomeToDo;