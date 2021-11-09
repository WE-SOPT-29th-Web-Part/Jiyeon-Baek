import React from 'react';
import styled from 'styled-components';
import profileImg from '../../assets/images/profile.png';

const Profile = () => {
  return (
    <StyledProfile>
      <img src={profileImg} alt="profile" />
      <StyledInfo>
        <div>100Gyeon</div>
        <div>한 줄 소개</div>
      </StyledInfo>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  & > img {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  & > div:first-child {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
  }

  & > div:last-child {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-top: 0.25rem;
    color: rgb(73, 80, 87);
  }
`;
