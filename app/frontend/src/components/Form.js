import React from 'react';

function Form() {
  return (
    <div>
      <form data-testid="sample-form">
        <label htmlFor="sampleName">
          <input />
        </label>
        <label htmlFor="sampleXCoordinate">
          <input />
        </label>
        <label htmlFor="sampleYCoordinate">
          <input />
        </label>
      </form>
    </div>
  );
}

export default Form;
