import React from 'react';

function Table() {
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
        <tbody data-testid=" table-body">
          <tr>
            <td>
              NAME
            </td>
            <td>
              NUMBER
            </td>
            <td>
              NUMBER
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
