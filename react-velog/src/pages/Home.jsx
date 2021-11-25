import React from 'react';
import Header from 'components/common/Header';
import Profile from 'components/home/Profile';
import HomeNav from 'components/home/HomeNav';
import ArticlesContainer from 'components/home/ArticlesContainer';
import SeriesCategory from 'components/home/SeriesCategory';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <StyledWrapper>
        <Profile />
        <HomeNav />
        <Routes>
          <Route path="/" element={<ArticlesContainer />} />
          <Route path="/series" element={<SeriesCategory />} />
        </Routes>
      </StyledWrapper>
    </div>
  );
};

export default Home;

const StyledWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
