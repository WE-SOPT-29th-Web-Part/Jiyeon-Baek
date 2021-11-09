import React from 'react';
import Header from '../components/common/Header';
import Profile from '../components/home/Profile';
import HomeNav from '../components/home/HomeNav';
import ArticlesContainer from '../components/home/ArticlesContainer';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Header />
      <StyledWrapper>
        <Profile />
        <HomeNav />
        <ArticlesContainer />
      </StyledWrapper>
    </div>
  );
};

export default Home;

const StyledWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
