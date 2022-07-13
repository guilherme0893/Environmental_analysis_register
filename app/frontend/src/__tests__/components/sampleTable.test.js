import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SampleTable from '../../components/SampleTable';
import renderWithRouter from '../../renderWithRouter';

describe('Tests the SampleTable component', () => {
  test('It should be rendered with a data-testId of table in the table tag', () => {
    renderWithRouter(<SampleTable />);
    expect(screen.queryByTestId('table')).toBeDefined();
  });

  test('It should be rendered with a data-testId of table-head in the  thead tag', () => {
    renderWithRouter(<SampleTable />);
    expect(screen.queryByTestId('table-head')).toBeDefined();
  });

  test('It should be rendered with a data-testId of table-row in the  tr tag', () => {
    renderWithRouter(<SampleTable />);
    expect(screen.queryByTestId('table-row')).toBeDefined();
  });

  test('It should be rendered 03 th tag with a data-testId of header-cell', () => {
    renderWithRouter(<SampleTable />);
    const headers = screen.queryAllByTestId('header-cell');
    expect(headers.length).toBe(3);
  });

  test('It should be rendered with a data-testId of table-body in the tbody tag', () => {
    renderWithRouter(<SampleTable />);
    expect(screen.queryByTestId('table-body')).toBeDefined();
  });
});
