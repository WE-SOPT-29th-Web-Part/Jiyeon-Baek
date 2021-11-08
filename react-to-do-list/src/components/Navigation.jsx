import React from 'react';
import styled from 'styled-components';

const Navigation = ({ setView }) => {
  return (
    <StyledNav>
      <button onClick={() => setView('today')}>오늘만 보기</button>
      <button onClick={() => setView('tomorrow')}>내일만 보기</button>
      <button onClick={() => setView('both')}>함께 보기</button>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.nav`
  text-align: center;
  margin: 10px 0;

  button {
    background-color: lavender;
    border-radius: 10px;
    padding: 2px 10px;
    margin: 0 8px;
    font-size: 0.9rem;
  }

  button:hover {
    font-weight: 900;
    box-shadow: 1px 1px 2px;
  }
`;
