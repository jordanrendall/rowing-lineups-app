import React, { useState } from 'react';
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

const Names = ({ setAthleteCount }) => {
  const [nameInput, setNameInput] = useState('');
  const [names, setNames] = useState([]);
  const addName = () => {
    setNames(prevState => [...prevState, nameInput]);
    setNameInput('');
    setAthleteCount(prevState => ({
      rowers: prevState.rowers + 1,
    }));
  };
  const updateNameInput = e => {
    setNameInput(e.target.value);
  };
  return (
    <NamesStyles>
      <h2>Athletes{names.length > 0 && ` (${names.length})`}</h2>
      <AddNames addName={addName} />
      <input type='text' value={nameInput} onChange={updateNameInput} />
      <ul>
        {names.map((name, i) => {
          return <li key={`name-${i}`}>{name}</li>;
        })}
      </ul>
    </NamesStyles>
  );
};

export default Names;
