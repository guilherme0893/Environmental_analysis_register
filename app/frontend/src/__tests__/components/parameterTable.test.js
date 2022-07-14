import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import ParameterTable from '../../components/parameters/ParametersTable';
import renderWithRouter from '../../renderWithRouter';

describe('Tests the ParameterTable component', () => {
  test('It should be rendered with a data-testId of table in the table tag', () => {
    renderWithRouter(<ParameterTable />);
    expect(screen.queryByTestId('table')).toBeDefined();
  });

  test('It should be rendered with a data-testId of table-head in the  thead tag', () => {
    renderWithRouter(<ParameterTable />);
    expect(screen.queryByTestId('table-head')).toBeDefined();
  });

  test('It should be rendered with a data-testId of table-row in the  tr tag', () => {
    renderWithRouter(<ParameterTable />);
    expect(screen.queryByTestId('table-row')).toBeDefined();
  });

  test('It should be rendered 04 th tag with a data-testId of header-cell', () => {
    renderWithRouter(<ParameterTable />);
    const headers = screen.queryAllByTestId('header-cell');
    expect(headers.length).toBe(4);
  });

  test('It should be rendered with a data-testId of table-body in the tbody tag', () => {
    renderWithRouter(<ParameterTable />);
    expect(screen.queryByTestId('table-body')).toBeDefined();
  });
});
