import React from 'react';

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  // input 값이 변화하면 그 값을 year, month, date로 바꿔준다.
  const handleChange = (e, setState) => {
    setState(e.target.value);
  }

  return (
    <div id="dateInput">
      <button>오늘</button>
      <div>
        <input onChange={(e) => handleChange(e, setYear)} type="text" className="dateInput__input" value={year} />년
        <input onChange={(e) => handleChange(e, setMonth)} type="text" className="dateInput__input" value={month} />월
        <input onChange={(e) => handleChange(e, setDate)} type="text" className="dateInput__input" value={date} />일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;