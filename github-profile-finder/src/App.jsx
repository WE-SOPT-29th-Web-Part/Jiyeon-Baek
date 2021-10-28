import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import styled from 'styled-components';

function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.log(`userInfo: `, userInfo);
  }, [userInfo]);

  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo} />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
