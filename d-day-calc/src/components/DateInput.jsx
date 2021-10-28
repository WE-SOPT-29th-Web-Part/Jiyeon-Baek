import React from 'react';

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const setToday = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
  };

  // input 값이 변화하면 그 값을 year, month, date로 바꿔준다.
  // 양의 정수만 들어갈 수 있도록 제한
  const handleChange = (e, setState) => {
    let num = e.target.value;
    if (num < 0 || !isFinite(num)) return;
    num = num.toString();
    if (num[0] === '0') {
      num = num.replace(/^0+/, '');
    }
    setState(num);
  };

  return (
    <div id="dateInput">
      <button onClick={setToday}>오늘을 기준으로</button>
      <div>
        <input
          onChange={(e) => handleChange(e, setYear)}
          type="text"
          className="dateInput__input"
          value={year}
        />
        년
        <input
          onChange={(e) => handleChange(e, setMonth)}
          type="text"
          className="dateInput__input"
          value={month}
        />
        월
        <input
          onChange={(e) => handleChange(e, setDate)}
          type="text"
          className="dateInput__input"
          value={date}
        />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
