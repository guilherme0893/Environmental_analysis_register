/* eslint-disable consistent-return */
import React from 'react';
import GlobalContext from '../context/GlobalContext';
import SampleForm from './SampleForm';
import ParameterForm from './ParameterForm';

function Form() {
  const { form } = React.useContext(GlobalContext);

  return (
    <div data-testid="main-form">
      {
        form === 'default' ? null : null
      }
      {
        form === 'samples' ? <SampleForm /> : null
      }
      {
        form === 'parameters' ? <ParameterForm /> : null
      }
    </div>
  );
}

export default Form;
