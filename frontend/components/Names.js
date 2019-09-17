import React from 'react';
import AddNames from './AddNames';
import styled from 'styled-components';

const NamesStyles = styled.article`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  padding: 10px;
  button {
    margin: 5px;
  }
`;

const Names = () => {
  return (
    <NamesStyles>
      <h2>Names</h2>
      <AddNames />
    </NamesStyles>
  );
};

export default Names;
