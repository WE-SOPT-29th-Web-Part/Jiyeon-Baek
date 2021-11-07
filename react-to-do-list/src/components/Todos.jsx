import React, { useState } from 'react';
import styled from 'styled-components';
import blank from '../assets/images/blank.png';
import checkbox from '../assets/images/checkbox.png';
import deleteBtn from '../assets/images/delete.png';

const Todos = ({ dateType }) => {
  const [todo, setTodo] = useState('');
  const [itemSet, setItemSet] = useState(new Set());

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addList = () => {
    setItemSet((itemSet) => new Set([...itemSet, todo]));
    setTodo('');
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) addList();
  };

  const handleClick = () => {
    if (!todo) return;
    addList();
  };

  const findDate = () => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const day = today.getDate();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowYear = tomorrow.getFullYear();
    const tomorrowMonth = tomorrow.getMonth() + 1;
    const nextDay = tomorrow.getDate();

    const todayStr = `${todayYear}년 ${todayMonth}월 ${day}일`;
    const tomorrowStr = `${tomorrowYear}년 ${tomorrowMonth}월 ${nextDay}일`;
    const when = dateType === '오늘' ? todayStr : tomorrowStr;
    return when;
  };

  return (
    <StyledSection>
      <StyledTodosInfo>
        <span>{findDate()}</span>
        <span>Check : 0 / 0</span>
      </StyledTodosInfo>
      <h2>{dateType} 할 일</h2>
      <StyledToDoList>
        {itemSet &&
          [...itemSet].map((item) => (
            <li key={item}>
              <div>
                <input type="checkbox" id={item} />
                <label htmlFor={item}></label>
                <span>{item}</span>
              </div>
              <button className="todos__delete"></button>
            </li>
          ))}
      </StyledToDoList>
      <StyledTodosInput
        type="text"
        value={todo}
        onChange={handleChange}
        onKeyDown={keyPress}
        placeholder={`${dateType} 할 일을 작성해 주세요.`}
      />
      <StyledBtnWrapper>
        <button onClick={handleClick}>+</button>
      </StyledBtnWrapper>
    </StyledSection>
  );
};

export default Todos;

const StyledSection = styled.section`
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > h2 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 20px;
    font-weight: bold;
  }
`;

const StyledTodosInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 60px);

  span {
    font-size: 1rem;
    margin: 0.8rem 0;
    color: #bb71c7;
  }
`;

const StyledToDoList = styled.ul`
  flex-grow: 1;
  width: 100%;
  padding: 0 30px;
  margin-top: 0.8rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;

    & > div {
      display: flex;
      align-items: center;

      & > input {
        display: none;
      }

      & > input + label {
        cursor: pointer;
        margin-right: 1rem;
        width: 1.2rem;
        height: 1.2rem;
        background: url(${blank}) center center/100% no-repeat;
        transition: background-image 300ms ease;
      }

      & > input:checked + label {
        background-image: url(${checkbox});
      }

      & > span {
        font-size: 1.2rem;
        line-height: 2.4rem;
      }
    }

    button {
      width: 1.2rem;
      height: 1.2rem;
      background: transparent url(${deleteBtn}) center center/100% no-repeat;
    }
  }
`;

const StyledTodosInput = styled.input`
  font-size: 1rem;
  width: calc(100% - 60px);
  outline: 0;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 0.8rem;

  &:focus {
    box-shadow: 2px 2px 10px lightgray;
  }
`;

const StyledBtnWrapper = styled.div`
  padding: 10px 0;

  & > button {
    padding: 0;
    color: white;
    background-color: black;
    border-radius: 50%;
    font-size: 2rem;
    line-height: 2rem;
    height: 2rem;
    width: 2rem;
  }

  & > button:hover {
    color: black;
    background-color: thistle;
  }
`;
