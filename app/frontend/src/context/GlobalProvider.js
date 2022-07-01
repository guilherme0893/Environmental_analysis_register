/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [value, setValue] = useState('');

  const contextValues = {
    value,
    setValue,
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
