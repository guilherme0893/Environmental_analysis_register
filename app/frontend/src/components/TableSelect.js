import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function TableSelect() {
  const { setData } = useContext(GlobalContext);

  const onHandleChange = (value) => {
    setData(value);
  };

  return (
    <div data-testid="table-select">
      <select onChange={(event) => onHandleChange(event.target.value)}>
        <option value="default">Pick parameters or samples</option>
        <option value="samples">Samples</option>
        <option value="parameters">Parameters</option>
      </select>
    </div>
  );
}

export default TableSelect;
