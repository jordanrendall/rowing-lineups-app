import React from 'react';

const AddBoat = ({ click, seats, cox, disabled }) => {
  return (
    <button
      disabled={disabled}
      id={`addBoat-${seats}`}
      seats={seats}
      cox={cox}
      onClick={click}
    >
      +
    </button>
  );
};

export default AddBoat;
