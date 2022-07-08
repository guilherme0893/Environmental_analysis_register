import React, { useEffect, useState } from 'react';

import axios from 'axios';

function SampleTable() {
  const [samples, setSamples] = useState([]);

  async function getAll() {
    return axios.get('http://localhost:3004/samples').then((response) => {
      setSamples(response.data);
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
              X Coordinate
            </th>
            <th data-testid="header-cell">
              Y Coordinate
            </th>
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {
            samples.map((sample) => (
              <tr key={sample.id}>
                <td data-testid="td">{sample.name}</td>
                <td data-testid="td">{sample.x_coordinate.toFixed(2)}</td>
                <td data-testid="td">{sample.y_coordinate.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default SampleTable;
