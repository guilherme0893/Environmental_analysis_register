import React from 'react';

function Form() {
  const onButtonClick = (event) => {
    event.preventDefault();
    return console.log('hello world');
  };
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
        <button
          type="submit"
          onClick={onButtonClick}
        >
          Register sample
        </button>
      </form>
    </div>
  );
}

export default Form;
