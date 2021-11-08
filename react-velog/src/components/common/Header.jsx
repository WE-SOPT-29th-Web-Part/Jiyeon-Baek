import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as VelogIcon } from '../../assets/icons/velog.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeft>
        <VelogIcon width="30" height="30" />
        <div>JiYeon.log</div>
      </StyledLeft>
      <StyledRight>
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-left: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const StyledRight = styled.div`
  & button {
    border-radius: 15px;
    background-color: white;
    border: 1px solid black;
    padding: 5px 10px;
  }

  & button:hover {
    background-color: black;
    color: white;
  }
`;
