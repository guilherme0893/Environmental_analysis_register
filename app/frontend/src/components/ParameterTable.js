/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

function ParameterTable() {
  const [parameters, setParameters] = useState([]);

  async function getAll() {
    return axios.get('http://localhost:3004/parameters').then((response) => {
      setParameters(response.data);
    });
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <table data-testid="table">
        <thead data-testid="table-head">
          <tr data-testid="table-row">
            <th data-testid="header-cell">
              Sample
            </th>
            <th data-testid="header-cell">
              Parameter
            </th>
            <th data-testid="header-cell">
              Unity
            </th>
            <th data-testid="header-cell">
              Value
            </th>
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {
            parameters.map((parameter, index) => (
              <tr>
                <td key={index}>{parameter.samplePointName}</td>
                <td key={index}>{parameter.parameter}</td>
                <td key={index}>{parameter.parameterUnity}</td>
                <td key={index}>{parameter.parameterValue.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ParameterTable;
