import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import styled from 'styled-components';
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: 'idle' });

  const getUserInfo = async (user) => {
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
  };

  // useEffect(() => {
  //   console.log(`userInfo: `, userInfo);
  // }, [userInfo]);

  return (
    <Root>
      <Header />
      <SearchBar getUserInfo={getUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo} />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1d21;
`;
