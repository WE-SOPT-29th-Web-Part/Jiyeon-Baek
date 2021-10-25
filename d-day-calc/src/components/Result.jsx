import React from 'react';
import Text1 from './Text1';
import Text2 from './Text2';

const Result = ({ year, month, date, setInput }) => {
  return (
    <div id="result">
      <Text1 year={year} month={month} date={date} onChange={setInput} />
      <Text2 year={year} month={month} date={date} />
    </div>
  );
};

export default Result;