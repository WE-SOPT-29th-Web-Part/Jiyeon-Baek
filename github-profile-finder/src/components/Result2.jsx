import React from 'react';
import PendingResult from './PendingResult';
import Result from './Result';
import RejectedResult from './RejectedResult';

const Result2 = ({ setUserInfo, userInfo }) => {
  // idle -> x
  // pending -> 로딩 중
  // rejected -> 사용자가 없습니다.
  // resolved -> card

  switch (userInfo.status) {
    case 'pending':
      return <PendingResult />;
    case 'resolved':
      return <Result userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case 'rejected':
      return <RejectedResult />;
    case 'idle':
    default:
      return <></>;
  }
};

export default Result2;
