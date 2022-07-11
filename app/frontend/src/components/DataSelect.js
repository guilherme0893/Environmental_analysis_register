/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from '../context/GlobalContext';

function DataSelect() {
  const {
    setCompleteData, selectValue, setSelectValue,
  } = useContext(GlobalContext);

  async function getCompleteData(selectValue) {
    if (selectValue === 'default') return null;
    if (selectValue === 'completeData') {
      await axios.get('http://localhost:3004/completeData')
        .then((response) => setCompleteData(response.data));
    }
    if (selectValue === 'overlimitData') {
      await axios.get('http://localhost:3004/overlimitData')
        .then((response) => setCompleteData(response.data));
    }
  }

  useEffect(() => {
    getCompleteData(selectValue);
  });

  const onHandleChange = (value) => {
    setSelectValue(value);
    console.log(selectValue);
  };

  return (
    <div>
      <select
        onChange={(event) => onHandleChange(event.target.value)}
      >
        <option value="default">Select option</option>
        <option value="completeData">Complete data</option>
        <option value="overlimitData">Overlimit data</option>
      </select>
    </div>
  );
}

export default DataSelect;