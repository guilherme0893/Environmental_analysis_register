import React from 'react';
import FormSelect from '../components/FormSelect';
import Header from '../components/Header';
import Form from '../components/Form';
import DataTable from '../components/DataTable';
import TableSelect from '../components/TableSelect';

function Main() {
  return (
    <div>
      <Header />
      <FormSelect />
      <Form />
      <TableSelect />
      <DataTable />
    </div>
  );
}

export default Main;
