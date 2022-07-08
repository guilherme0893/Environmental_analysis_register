import React, { useState } from 'react';

import axios from 'axios';

function ParameterForm() {
  const [parameters, setParameters] = useState([]);
  const [sampleName, setSampleName] = useState('');
  const [parameter, setParameter] = useState('');
  const [unity, setUnity] = useState('');
  const [value, setValue] = useState('');

  const onNameInputChange = ({ target }) => {
    setSampleName(target.value);
  };

  const onParameterInputChange = ({ target }) => {
    setParameter(target.value);
  };

  const onUnityInputChange = ({ target }) => {
    setUnity(target.value);
  };

  const onValueInputChange = ({ target }) => {
    setValue(target.value);
  };

  async function create() {
    return axios.post('http://localhost:3004/parameters', {
      name: sampleName,
      parameter,
      parameterUnity: unity,
      parameterValue: value,
    }).then((newParameter) => {
      setParameters([...parameters, newParameter.data]);
    }).catch((error) => {
      console.log(error.response);
    });
  }

  return (
    <div>
      <form data-testid="sample-form">
        <label htmlFor="sampleName">
          Sample point name:
          {' '}
          <input type="input" onChange={onNameInputChange} />
        </label>
        <label htmlFor="parameter">
          Parameter:
          {' '}
          <input type="input" onChange={onParameterInputChange} />
        </label>
        <label htmlFor="unity">
          Unity:
          {' '}
          <input type="input" onChange={onUnityInputChange} />
        </label>
        <label htmlFor="value">
          Value:
          {' '}
          <input type="input" onChange={onValueInputChange} />
        </label>
        <button
          type="submit"
          onClick={create}
        >
          Register parameter
        </button>
      </form>
    </div>
  );
}

export default ParameterForm;
