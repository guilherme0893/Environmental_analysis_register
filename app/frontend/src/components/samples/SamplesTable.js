/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GlobalContext from '../../context/GlobalContext';

function SamplesTable() {
  const { samples, setSamples } = React.useContext(GlobalContext);

  async function getAllSamples() {
    const response = await axios.get('https://arcadis-backend.herokuapp.com/samples' || 'http://localhost:3004/samples');
    setSamples(response.data);
  }

  React.useEffect(() => {
    getAllSamples();
  });

  return (
    <Paper>
      <Table data-testid="table">
        <TableHead data-testid="table-head">
          <TableRow data-testid="table-row">
            <TableCell data-testid="header-cell" align="center">Sample</TableCell>
            <TableCell data-testid="header-cell" align="center">X Coordinate</TableCell>
            <TableCell data-testid="header-cell" align="center">Y Coordinate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body">
          {samples.map((sample, index) => (
            <TableRow key={index}>
              <TableCell data-testid="table-data" align="center">{sample.name}</TableCell>
              <TableCell data-testid="table-data" align="center">{sample.x_coordinate.toFixed(2)}</TableCell>
              <TableCell data-testid="table-data" align="center">{sample.y_coordinate.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SamplesTable;
