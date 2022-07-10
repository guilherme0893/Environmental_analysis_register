/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';

function ParameterForm() {
  const [parameters, setParameters] = useState([]);
  const [sampleName, setSampleName] = useState('');
  const [parameter, setParameter] = useState('');
  const [unity, setUnity] = useState('');
  const [value, setValue] = useState('');
  const [samplingDate, setSamplingDate] = useState('');

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

  const onSamplingDateInputChange = ({ target }) => {
    setSamplingDate(target.value);
  };

  async function create() {
    return axios.post('http://localhost:3004/parameters', {
      samplePointName: sampleName,
      parameter,
      parameterUnity: unity,
      parameterValue: Number(value),
      samplingDate,
    }).then((newParameter) => {
      setParameters([...parameters, newParameter.data]);
    }).catch((error) => {
      console.log(error.response);
    });
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  return (
    <div>
      <FormGroup data-testid="sample-form">
        <p style={{ marginBottom: '5px' }}>Sample point name</p>
        <TextField
          required
          onChange={onNameInputChange}
          style={{ marginBottom: '5px' }}
        />
        <p style={{ marginBottom: '5px' }}>Parameter</p>
        <TextField
          required
          onChange={onParameterInputChange}
          style={{ marginBottom: '5px' }}
        />
        <p style={{ marginBottom: '5px' }}>Unity</p>
        <TextField
          required
          onChange={onUnityInputChange}
          style={{ marginBottom: '5px' }}
        />
        <p style={{ marginBottom: '5px' }}>Value</p>
        <TextField
          required
          onChange={onValueInputChange}
          style={{ marginBottom: '5px' }}
        />
        <p style={{ marginBottom: '5px' }}>Sampling date</p>
        <TextField
          required
          onChange={onSamplingDateInputChange}
          style={{ marginBottom: '5px' }}
        />
      </FormGroup>
      <ColorButton
        style={{ marginTop: '15px' }}
        type="submit"
        variant="contained"
        size="small"
        onClick={create}
      >
        Register
      </ColorButton>
    </div>
  );
}

export default ParameterForm;
