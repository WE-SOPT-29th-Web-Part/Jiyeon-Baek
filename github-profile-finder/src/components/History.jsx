import React from 'react';
import styled from 'styled-components';

const History = ({ userList, setUserList, setUserInfo }) => {
  const showProfile = (user) => {
    setUserInfo(user);
  };

  const deleteHistory = (user) => {
    // user가 아닌 element만 모아서 새로운 배열 반환
    const filteredList = userList.filter((element) => element !== user);
    setUserList(filteredList);
    localStorage.setItem('userList', JSON.stringify(filteredList));
  };

  return (
    <UserList>
      {userList &&
        userList.map((user) => (
          <li key={user}>
            <span onClick={() => showProfile(user)}>{user}</span>
            <button onClick={() => deleteHistory(user)}>X</button>
          </li>
        ))}
    </UserList>
  );
};

export default History;

const UserList = styled.ul`
  color: white;

  li {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: rgb(44, 48, 53);
    border-radius: 10px;
    margin-top: 3px;
  }

  button {
    color: white;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
