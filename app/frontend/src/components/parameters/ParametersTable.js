/* eslint-disable react/no-array-index-key */
import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ParametersTable() {
  const [parameters, setParameters] = React.useState([]);

  async function getAllParameters() {
    const response = await axios.get('http://localhost:3004/parameters');
    setParameters(response.data);
  }

  React.useEffect(() => {
    getAllParameters();
  });

  return (
    <Paper>
      <Table data-testid="table">
        <TableHead data-testid="table-head">
          <TableRow data-testid="table-row">
            <TableCell data-testid="header-cell" align="center">Sample</TableCell>
            <TableCell data-testid="header-cell" align="center">Parameter</TableCell>
            <TableCell data-testid="header-cell" align="center">Unity</TableCell>
            <TableCell data-testid="header-cell" align="center">Value</TableCell>
            <TableCell data-testid="header-cell" align="center">Sampling date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body">
          {parameters.map((parameter, index) => (
            <TableRow key={index}>
              <TableCell data-testid="table-data" align="center">{parameter.samplePointName}</TableCell>
              <TableCell data-testid="table-data" align="center">{parameter.parameter}</TableCell>
              <TableCell data-testid="table-data" align="center">{parameter.parameterUnity}</TableCell>
              <TableCell data-testid="table-data" align="center">{Number(parameter.parameterValue).toFixed(3)}</TableCell>
              <TableCell data-testid="table-data" align="center">{parameter.samplingDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ParametersTable;
