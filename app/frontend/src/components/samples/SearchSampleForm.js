/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import GlobalContext from '../../context/GlobalContext';
import Error from '../Error';

function SearchSampleForm() {
  const [sampleName, setSampleName] = useState('');
  const {
    setSample, setError, isError, setIsError,
  } = React.useContext(GlobalContext);

  const onNameInputChange = ({ target }) => {
    setSampleName(target.value);
  };

  async function searchSample() {
    await axios.get(`https://arcadis-backend.herokuapp.com/samples/${sampleName}`)
      .then((response) => setSample(response.data))
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
              <p style={{ marginBottom: '5px' }}>Sample name</p>
              <TextField
                required
                onChange={onNameInputChange}
                style={{ marginBottom: '5px' }}
              />
            </FormGroup>
            <ColorButton
              style={{ marginTop: '15px' }}
              type="submit"
              variant="contained"
              size="small"
              onClick={searchSample}
            >
              Search
            </ColorButton>
          </div>
        )
      }
    </div>
  );
}

export default SearchSampleForm;
