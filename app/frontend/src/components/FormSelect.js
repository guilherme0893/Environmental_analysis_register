import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function FormSelect() {
  const { setForm } = useContext(GlobalContext);

  const onHandleChange = (value) => {
    setForm(value);
  };

  return (
    <div data-testid="form-select">
      <select onChange={(event) => onHandleChange(event.target.value)}>
        <option value="default">Choose action</option>
        <option value="samples">Register sample</option>
        <option value="parameters">Register parameters</option>
      </select>
    </div>
  );
}

export default FormSelect;
