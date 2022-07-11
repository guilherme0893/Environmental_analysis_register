/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [form, setForm] = useState('');
  const [samples, setSamples] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [sample, setSample] = useState([]);
  const [parameter, setParameter] = useState([]);
  const [completeData, setCompleteData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);

  const contextValues = React.useMemo(() => ({
    value,
    setValue,
    data,
    setData,
    form,
    setForm,
    samples,
    setSamples,
    parameters,
    setParameters,
    sample,
    setSample,
    parameter,
    setParameter,
    completeData,
    setCompleteData,
    selectValue,
    setSelectValue,
  }), [value, data, form, samples, parameters, sample, parameter, selectValue, selectValue]);

  return (
    <GlobalContext.Provider value={contextValues}>
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
