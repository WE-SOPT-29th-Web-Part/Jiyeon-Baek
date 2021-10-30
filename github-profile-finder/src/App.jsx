import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import styled from 'styled-components';
import Result2 from './components/Result2';

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: 'idle' });

  useEffect(() => {
    console.log(`userInfo: `, userInfo);
  }, [userInfo]);

  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result2 userInfo={userInfo} setUserInfo={setUserInfo} />
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
