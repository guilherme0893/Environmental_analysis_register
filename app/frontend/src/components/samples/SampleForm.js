/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import GlobalContext from '../../context/GlobalContext';
import Error from '../Error';

function SampleForm() {
  const [samples, setSamples] = useState([]);
  const [sampleName, setSampleName] = useState('');
  const [sampleXCoordinate, setSampleXCoordinate] = useState('');
  const [sampleYCoordinate, setSampleYCoordinate] = useState('');
  const { setError, isError, setIsError } = React.useContext(GlobalContext);

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
    axios.post('https://arcadis-backend.herokuapp.com/samples', {
      name: sampleName,
      xCoordinate: Number(sampleXCoordinate),
      yCoordinate: Number(sampleYCoordinate),
    })
      .then((sample) => {
        setSamples([...samples, sample.data]);
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response.data.message);
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
      {
        isError ? <Error /> : (
          <div>
            <FormGroup data-testid="sample-form">
              <p style={{ marginBottom: '5px' }}>Name</p>
              <TextField
                required
                onChange={onNameInputChange}
                style={{ marginBottom: '5px' }}
              />
              <p style={{ marginBottom: '5px' }}>X Coordinate</p>
              <TextField
                required
                onChange={onXCoordinateInputChange}
                style={{ marginBottom: '5px' }}
              />
              <p style={{ marginBottom: '5px' }}>Y Coordinate</p>
              <TextField
                required
                onChange={onYCoordinateInputChange}
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
        )
      }
    </div>
  );
}

export default SampleForm;
