import React from 'react';

const AddBoat = ({ click, seats }) => {
  return (
    <button id={`addBoat-${seats}`} onClick={click}>
      +
    </button>
  );
};

export default AddBoat;
