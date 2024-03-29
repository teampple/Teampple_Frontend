import styled from 'styled-components';
import { StyledToDoInfo } from 'interfaces/taskType';

export const CardBox = styled.div<StyledToDoInfo>`
  width: 19.375vw;
  height: 51.481vh;
  background-color: ${(props) => (props.isNow ? '#f4f8ff' : '#F0F2F7')};
  border: ${(props) => (props.isNow ? ' 2px solid #487AFF' : null)};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-right: 1.45833vw;
  position: relative;
  flex-shrink: 0;

  .toDos {
    overflow-x: hidden;
    height: 30vh;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-left: 1.25vw;
    margin-top: 2.22222vh;
    margin-right: 1.25vw;
  }
  .step {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: ${(props) => (props.isNow ? '#88A9FF' : '#707070')};
  }

  .when {
    font-weight: 400;
    font-size: 0.83333vw;
    line-height: 100%;
    color: ${(props) => (props.isNow ? '#88A9FF' : '#707070')};
  }

  .headerText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.407407vh;
  }

  .name {
    margin-top: ${(props) =>
      props.pathname === '/home' ? '2.22222vh' : '1.481481vh'};
    margin-left: 1.25vw;
    font-weight: 600;
    font-size: 1.145833vw;
    line-height: 100%;
    color: ${(props) => (props.isNow ? '#487AFF' : '#383838')};
  }

  .left {
    margin-right: 1.041667vw;
    margin-top: ${(props) =>
      props.pathname === '/home' ? '1.851852vh' : '1.296296vh'};
    display: flex;
  }

  .leftText {
    font-style: normal;
    font-weight: 500;
    font-size: 0.83333vw;
    color: ${(props) => (props.isNow ? '#487AFF' : '#707070')};
    margin-right: 0.416667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .leftNumBox {
    background-color: ${(props) => (props.isNow ? '#487AFF' : '#707070')};
    width: 1.45833vw;
    height: 2.592593vh;
    border-radius: 100px;
    color: white;
    font-weight: 700;
    font-size: 0.833333vw;
    line-height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3px;
  }

  .leftNum {
    margin-top: auto;
    margin-bottom: auto;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .addBox {
    width: 17.291667vw;
    height: 6.66666vh;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    margin-bottom: 1.111vh;
    justify-content: center;
    position: absolute;
    top: 42.962963vh;
  }

  .addBox:hover {
    cursor: grab;
  }

  .EndBox {
    width: 17.291667vw;
    height: 6.66666vh;
    background-color: #cccccc;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    margin-bottom: 1.111vh;
    justify-content: center;
    position: absolute;
    top: 42.962963vh;
  }
  .EndBox:hover {
    cursor: not-allowed;
  }

  .addText {
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const ToDoBox = styled.div`
  width: 17.291667vw;
  height: 6.66666vh;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  margin-left: 1.041667vw;
  margin-right: 1.041667vw;
  justify-content: space-between;
  margin-bottom: 12px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .toDoText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #505050;
    margin-left: 16px;
    padding-top: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .toDoArr {
    color: #c0c0c0;
    width: 32px;
    height: 32px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
  }
`;

export const Box = styled.div`
  width: 17.291667vw;
  height: 6.66666vh;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  margin-left: 1.041667vw;
  margin-right: 1.041667vw;
  margin-bottom: 1.1111vh;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .doneIcon {
    width: 2.916667vw;
    height: 3.148148vh;
    margin-left: 0.625vw;
    margin-top: 1.94444vh;
  }

  .doneText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #505050;
    margin-left: 0.8333vw;
    padding-top: 2.592593vh;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 9.375vw;
  }

  .doneArr {
    color: #c0c0c0;
    width: 9.5px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1.2vw;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  :hover {
    cursor: grab;
  }
  /* 
    스크롤 관련해서 문제 있으면 체크하기 ->호버 할때 보이게해야댐 */
`;

export const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
`;
