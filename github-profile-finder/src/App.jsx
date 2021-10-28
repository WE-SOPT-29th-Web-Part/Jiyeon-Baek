import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';

function App() {
  const [userInfo, setUserInfo] = useState();

  return (
    <div id="app">
      <Header />
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
