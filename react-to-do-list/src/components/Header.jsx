import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>To Do List</StyledHeaderLogo>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 50px;
  font-size: 32px;
  color: white;
  background-color: thistle;
`;

const StyledHeaderLogo = styled.h1`
  font-size: 32px;
  text-align: center;
  text-shadow: 2px 2px 1px black;
  height: 50px;
  line-height: 50px;
`;
