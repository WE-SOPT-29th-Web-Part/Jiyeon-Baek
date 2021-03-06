import React, { useCallback, useEffect, useState } from 'react';

const Text1 = ({ year, month, date }) => {
  // 어떤 것을 상태로 둘까? -> 변화하는 값 (inputValue, resultDate)
  const [inputValue, setInputValue] = useState('');
  const [resultDate, setResultDate] = useState('yyyy년 mm월 dd일');

  const handleChange = (e) => {
    let num = e.target.value;
    if (!num) {
      setInputValue('');
      setResultDate('yyyy년 mm월 dd일');
      return;
    }
    if (num < 0 || !isFinite(num)) return;
    num = num.toString();
    if (num[0] === '0') {
      num = num.replace(/^0+/, '');
    }
    setInputValue(num);
    printDate(num);
  };

  const printDate = useCallback(
    (value) => {
      if (value === '') {
        setResultDate('yyyy년 mm월 dd일');
        return;
      }

      // 임시적인 날짜를 만들고, 그 날짜를 가공하여 resultDate에 넣어준다.
      const tempDate = new Date();
      tempDate.setFullYear(year);
      tempDate.setMonth(month - 1);
      tempDate.setDate(Number(date) + Number(value) - 1);

      // setResultDate로 resultDate 상태가 업데이트 되기 때문에 리렌더링
      const result = `${tempDate.getFullYear()}년 ${
        tempDate.getMonth() + 1
      }월 ${tempDate.getDate()}일`;
      setResultDate(result);
    },
    [year, month, date],
  );

  useEffect(() => {
    printDate(inputValue);
  }, [inputValue, printDate]);

  return (
    <div className="text">
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        일째 되는 날은?
      </div>
      <div>{resultDate}</div>
    </div>
  );
};

export default Text1;
