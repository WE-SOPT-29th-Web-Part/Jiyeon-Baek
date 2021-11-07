import React from 'react';
import styled from 'styled-components';
import Todos from './Todos';

const TodosContainer = () => {
  return (
    <StyledMain>
      <Todos dateType={'오늘'} />
      <Todos dateType={'내일'} />
    </StyledMain>
  );
};

export default TodosContainer;

const StyledMain = styled.main`
  background-color: whitesmoke;
  display: flex;
  flex-grow: 1;
`;
