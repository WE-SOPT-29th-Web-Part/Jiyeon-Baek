import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import DateInput from './components/DateInput';
import CenterText from './components/CenterText';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  // DateInput에서 가져온 year, month, date -> Result
  // Result의 input 값과 연산을 실시 

  // 변하는 값인 year, month, date, inputValue, resultDate는 state로 관리
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div id="app">
      <Header />
      <DateInput year={year} month={month} date={date} setYear={setYear} setMonth={setMonth} setDate={setDate} />
      <CenterText />
      <Result year={year} month={month} date={date} />
      <Footer />
    </div>
  );
}

export default App;
