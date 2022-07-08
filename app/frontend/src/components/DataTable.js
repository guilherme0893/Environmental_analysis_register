/* eslint-disable consistent-return */
import React from 'react';
import GlobalContext from '../context/GlobalContext';
import SampleTable from './SampleTable';
import ParameterTable from './ParameterTable';

function DataTable() {
  const { data } = React.useContext(GlobalContext);

  return (
    <div data-testid="data-table">
      {
        data === 'default' ? null : null
      }
      {
        data === 'samples' ? <SampleTable /> : null
      }
      {
        data === 'parameters' ? <ParameterTable /> : null
      }
    </div>
  );
}

export default DataTable;
