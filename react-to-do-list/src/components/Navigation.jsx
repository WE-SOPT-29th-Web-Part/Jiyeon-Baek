import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav>
      <button>오늘만 보기</button>
      <button>내일만 보기</button>
      <button>함께 보기</button>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.nav`
  text-align: center;
  margin: 10px 0;

  button {
    background-color: lavender;
    border: 0;
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
