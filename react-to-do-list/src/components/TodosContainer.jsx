import React from 'react';
import styled from 'styled-components';
import Todos from './Todos';

const TodosContainer = ({ view }) => {
  switch (view) {
    case 'today':
      return (
        <StyledMain>
          <Todos dateType={'오늘'} viewType="open" />
          <Todos dateType={'내일'} />
        </StyledMain>
      );
    case 'tomorrow':
      return (
        <StyledMain>
          <Todos dateType={'오늘'} />
          <Todos dateType={'내일'} viewType="open" />
        </StyledMain>
      );
    case 'both':
    default:
      return (
        <StyledMain>
          <Todos dateType={'오늘'} viewType="open" />
          <Todos dateType={'내일'} viewType="open" />
        </StyledMain>
      );
  }
};

export default TodosContainer;

const StyledMain = styled.main`
  background-color: whitesmoke;
  display: flex;
  flex-grow: 1;
`;
