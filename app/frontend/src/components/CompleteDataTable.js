/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select, TableContainer } from '@mui/material';
import GlobalContext from '../context/GlobalContext';
import Error from './Error';

function CompleteDataTable() {
  const {
    setCompleteData, selectValue, setSelectValue, completeData, setIsError, setError, isError,
  } = React.useContext(GlobalContext);

  const onHandleChange = (value) => {
    setSelectValue(value);
  };

  // eslint-disable-next-line consistent-return
  async function getCompleteData() {
    if (selectValue === 'default') return null;
    if (selectValue === 'completeData') {
      await axios.get('https://arcadis-backend.herokuapp.com/completeData' || `http://localhost:${process.env.LOCAL_PORT}/completeData`)
        .then((response) => setCompleteData(response.data))
        .catch((err) => {
          setIsError(true);
          setError(err.response.data.message);
        });
    }
    if (selectValue === 'overlimitData') {
      await axios.get('https://arcadis-backend.herokuapp.com/overlimitData' || `http://localhost:${process.env.LOCAL_PORT}/overlimitData`)
        .then((response) => setCompleteData(response.data))
        .catch((err) => {
          setIsError(true);
          setError(err.response.data.message);
        });
    }
  }

  React.useEffect(() => {
    getCompleteData();
  }, [selectValue, setSelectValue, setCompleteData]);

  return (
    <div>
      <TableContainer component={Paper}>
        <FormControl fullWidth>
          <InputLabel id="data-label">Data</InputLabel>
          <Select
            labelId="data-label"
            id="data-label"
            label="data"
            onChange={(event) => onHandleChange(event.target.value)}
          >
            <MenuItem value="default">Select option</MenuItem>
            <MenuItem value="completeData">Complete data</MenuItem>
            <MenuItem value="overlimitData">Overlimit data</MenuItem>
          </Select>
        </FormControl>
        <Table data-testid="table" sx={{ minWidth: 650 }} size="large">
          <TableHead data-testid="table-head">
            <TableRow data-testid="table-row">
              <TableCell data-testid="header-cell" align="center">Sample</TableCell>
              <TableCell data-testid="header-cell" align="center">X Coordinate</TableCell>
              <TableCell data-testid="header-cell" align="center">Y Coordinate</TableCell>
              <TableCell data-testid="header-cell" align="center">Parameter</TableCell>
              <TableCell data-testid="header-cell" align="center">Unity</TableCell>
              <TableCell data-testid="header-cell" align="center">Value</TableCell>
              <TableCell data-testid="header-cell" align="center">Sampling date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="table-body">
            {
              isError ? <Error /> : (
                completeData.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell data-testid="table-data" align="center">{data.name}</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.x_coordinate ? data.x_coordinate.toFixed(2) : null }</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.y_coordinate ? data.y_coordinate.toFixed(2) : null}</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.parameter}</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.parameterUnity}</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.parameterValue ? Number(data.parameterValue).toFixed(3) : null}</TableCell>
                    <TableCell data-testid="table-data" align="center">{data.samplingDate ? (data.samplingDate).slice(0, -14) : null}</TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompleteDataTable;
