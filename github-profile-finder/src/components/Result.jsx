import React from 'react';
import PendingResult from './PendingResult';
import Card from './Card';
import RejectedResult from './RejectedResult';

const Result = ({ userInfo, setUserInfo }) => {
  switch (userInfo.status) {
    case 'pending':
      return <PendingResult />;
    case 'resolved':
      return <Card userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case 'rejected':
      return <RejectedResult />;
    case 'idle':
    default:
      return <></>;
  }
};

export default Result;
