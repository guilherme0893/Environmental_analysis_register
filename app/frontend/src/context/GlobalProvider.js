/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [form, setForm] = useState('');

  const contextValues = {
    value,
    setValue,
    data,
    setData,
    form,
    setForm,
  };

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
