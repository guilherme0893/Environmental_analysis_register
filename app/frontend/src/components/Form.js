import React from 'react';

function Form() {
  return (
    <div>
      <form data-testid="sample-form">
        <label htmlFor="sampleName">
          Name:
          {' '}
          <input />
        </label>
        <label htmlFor="XCoordinate">
          X Coordinate:
          {' '}
          <input />
        </label>
        <label htmlFor="YCoordinate">
          Y Coordinate:
          {' '}
          <input />
        </label>
      </form>
    </div>
  );
}

export default Form;
