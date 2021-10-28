import React from 'react';
import styled from 'styled-components';

const Result = ({ userInfo, setUserInfo }) => {
  return userInfo.avatar_url ? (
    <Root>
      <button onClick={() => setUserInfo({})}>닫기</button>
      <img src={userInfo.avatar_url} alt="프로필 이미지" />
      <h3>{userInfo.name}</h3>
      <h4>{userInfo.login}</h4>
      <p>{userInfo.bio}</p>
      <a href={userInfo.html_url} target="_blank">
        Visit Github
      </a>
      <UL>
        <li>
          <strong>Followers</strong>
          {userInfo.followers}
        </li>
        <li>
          <strong>Following</strong>
          {userInfo.following}
        </li>
        <li>
          <strong>Repos</strong>
          {userInfo.public_repos}
        </li>
      </UL>
    </Root>
  ) : (
    <></>
  );
};

export default Result;

const Root = styled.article`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: rgb(44, 48, 53);
  width: 390px;
  border-radius: 20px;
  position: relative;
  animation: slideDown 400ms ease-in 0s 1 normal forwards;

  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  /* 중첩 스타일링, 자기 선택 문자(&) 사용 */
  & > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 30px;
    background-color: rgb(36, 39, 43);
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }

  & > h3 {
    font-size: 24px;
    margin-top: 24px;
    font-weight: bold;
  }

  & > h4 {
    font-size: 14px;
    margin-top: 5px;
  }

  & > p {
    padding: 20px 45px;
    text-align: center;
  }

  & > a {
    text-decoration: none;
    color: gold;
    border: 1px solid gold;
    border-radius: 8px;
    padding: 8px;
    &:hover {
      background-color: gold;
      color: rgb(44, 48, 53);
    }
  }
`;

const UL = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 25px;

  & > li {
    width: 130px;
    height: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    background-color: rgb(36, 39, 43);
    border-left: 5px solid rgb(44, 48, 53);
    border-right: 5px solid rgb(44, 48, 53);

    &:nth-child(1) {
      border-left: none;
      border-bottom-left-radius: 20px;
    }

    &:nth-child(3) {
      border-right: none;
      border-bottom-right-radius: 20px;
    }

    & > strong {
      font-weight: bold;
    }
  }
`;
