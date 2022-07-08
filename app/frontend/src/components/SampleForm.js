import React, { useState } from 'react';

import axios from 'axios';

function SampleForm() {
  const [samples, setSamples] = useState([]);
  const [sampleName, setSampleName] = useState('');
  const [sampleXCoordinate, setSampleXCoordinate] = useState('');
  const [sampleYCoordinate, setSampleYCoordinate] = useState('');

  const onNameInputChange = ({ target }) => {
    setSampleName(target.value);
  };

  const onXCoordinateInputChange = ({ target }) => {
    setSampleXCoordinate(target.value);
  };

  const onYCoordinateInputChange = ({ target }) => {
    setSampleYCoordinate(target.value);
  };

  async function create() {
    axios.post('http://localhost:3004/samples', {
      name: sampleName,
      xCoordinate: Number(sampleXCoordinate),
      yCoordinate: Number(sampleYCoordinate),
    })
      .then((sample) => {
        setSamples([...samples, sample.data]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div>
      <form data-testid="sample-form">
        <label htmlFor="sampleName">
          Name:
          {' '}
          <input type="input" onChange={onNameInputChange} />
        </label>
        <label htmlFor="XCoordinate">
          X Coordinate:
          {' '}
          <input type="input" onChange={onXCoordinateInputChange} />
        </label>
        <label htmlFor="YCoordinate">
          Y Coordinate:
          {' '}
          <input type="input" onChange={onYCoordinateInputChange} />
        </label>
        <button
          type="submit"
          onClick={create}
        >
          Register sample
        </button>
      </form>
    </div>
  );
}

export default SampleForm;
