import React from 'react';
import Header from '../components/common/Header';
import Profile from '../components/home/Profile';
import HomeNav from '../components/home/HomeNav';
import ArticlesContainer from '../components/home/ArticlesContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <ArticlesContainer />
    </div>
  );
};

export default Home;
