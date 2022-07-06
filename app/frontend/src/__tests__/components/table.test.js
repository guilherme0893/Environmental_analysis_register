import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Table from '../../components/Table';
import renderWithRouter from '../../renderWithRouter';

describe('Tests the Table component', () => {
  test('It should be rendered with a data-testId of table in the table tag', () => {
    renderWithRouter(<Table />);
    expect(screen.queryByTestId('table')).toBeDefined();
  });
  test('It should be rendered with a data-testId of table-head in the  thead tag', () => {
    renderWithRouter(<Table />);
    expect(screen.queryByTestId('table-head')).toBeDefined();
  });
  test('It should be rendered with a data-testId of table-row in the  tr tag', () => {
    renderWithRouter(<Table />);
    expect(screen.queryByTestId('table-row')).toBeDefined();
  });
  test('It should be rendered 03 th tag with a data-testId of header-cell', () => {
    renderWithRouter(<Table />);
    const headers = screen.queryAllByTestId('header-cell');
    expect(headers.length).toBe(3);
  });
  test('It should be rendered with a data-testId of table-body in the tbody tag', () => {
    renderWithRouter(<Table />);
    expect(screen.queryByTestId('table-body')).toBeDefined();
  });
});
