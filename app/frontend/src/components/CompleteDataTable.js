/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GlobalContext from '../context/GlobalContext';
import DataSelect from './DataSelect';

function CompleteDataTable() {
  const { completeData } = React.useContext(GlobalContext);
  return (
    <div>
      <DataSelect />
      <Paper>
        <Table data-testid="table">
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
            {completeData.map((data, index) => (
              <TableRow key={index}>
                <TableCell data-testid="table-data" align="center">{data.name}</TableCell>
                <TableCell data-testid="table-data" align="center">{data.x_coordinate ? data.x_coordinate.toFixed(2) : null }</TableCell>
                <TableCell data-testid="table-data" align="center">{data.y_coordinate ? data.y_coordinate.toFixed(2) : null}</TableCell>
                <TableCell data-testid="table-data" align="center">{data.parameter}</TableCell>
                <TableCell data-testid="table-data" align="center">{data.parameterUnity}</TableCell>
                <TableCell data-testid="table-data" align="center">{data.parameterValue ? Number(data.parameterValue).toFixed(3) : null}</TableCell>
                <TableCell data-testid="table-data" align="center">{data.samplingDate ? (data.samplingDate).slice(0, -14) : null}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default CompleteDataTable;
