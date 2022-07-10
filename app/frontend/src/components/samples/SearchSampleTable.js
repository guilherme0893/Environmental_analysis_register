/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GlobalContext from '../../context/GlobalContext';

function SearchSampleTable() {
  const { sample } = React.useContext(GlobalContext);
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
          {sample.map((s, id) => (
            <TableRow key={id}>
              <TableCell data-testid="table-data" align="center">{s.name}</TableCell>
              <TableCell data-testid="table-data" align="center">{s.x_coordinate.toFixed(2)}</TableCell>
              <TableCell data-testid="table-data" align="center">{s.y_coordinate.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SearchSampleTable;
