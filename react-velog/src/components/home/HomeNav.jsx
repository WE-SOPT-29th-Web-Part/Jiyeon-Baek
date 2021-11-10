import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <StyledNav>
      <Link to="/">글</Link>
      <Link to="/series">시리즈</Link>
    </StyledNav>
  );
};

export default HomeNav;

const StyledNav = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  justify-content: center;

  & > a {
    text-decoration: none;
    font-size: 1.325rem;
    width: 8rem;
    height: 3rem;
    color: rgb(73, 80, 87);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
