import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import History from './History';

const SearchBar = ({ setUserInfo }) => {
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState([]);
  const maxHistory = 3;

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  // 값을 submit 했을 때, 검색이 되도록.
  // input 태그를 form 태그로 감싸고, onSubmit 이벤트를 사용

  const handleSubmit = async (e) => {
    // submit 하면 새로고침 되는 것을 방지
    e.preventDefault();

    if (!user) {
      return;
    }

    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: 'pending', // 로딩 중
    }));

    // user 값을 이용하여 서버에 있는 데이터 받아오기
    // 서버 통신에 시간 소요 -> 비동기 처리 (async, await)
    // axios는 서버 통신을 돕는 툴
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data,
        status: 'resolved',
      }));
    } catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null,
        status: 'rejected',
      }));
      console.log(error);
    }

    // 배열 속에 user가 있는지 확인하고 없으면 추가
    if (!userList.includes(user)) {
      // history에 최대 3개까지만 저장
      let tempList;
      tempList =
        userList.length >= maxHistory
          ? [...userList, user].slice(-3)
          : [...userList, user];

      setUserList(tempList);
      localStorage.setItem('userList', JSON.stringify(tempList));
    }

    setUser('');
  };

  useEffect(() => {
    // localStorage를 이용
    const storageList = JSON.parse(localStorage.getItem('userList')) ?? [];
    setUserList(storageList);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={user}
          onChange={handleChange}
          type="text"
          placeholder="Github 프로필을 검색해 보세요."
        />
      </form>
      <History
        userList={userList}
        setUserList={setUserList}
        setUserInfo={setUserInfo}
      />
    </>
  );
};

export default SearchBar;

const Input = styled.input`
  width: 320px;
  height: 57px;
  padding: 16px;
  color: rgb(229, 230, 231);
  background-color: rgb(36, 39, 43);
  outline: none;
  border: 8px solid rgb(105, 105, 105, 0.5);
  border-radius: 20px;
`;
