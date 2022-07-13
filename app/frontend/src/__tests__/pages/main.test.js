import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../../pages/Main';

describe('Tests the Main page', () => {
  it('It should be rendered with a Header', () => {
    render(<Main />);
    expect(screen.getByTestId(/main-header/i)).toBeDefined();
    expect(screen.getByTestId(/main-form/i)).toBeDefined();
    expect(screen.getByTestId(/form-select/i)).toBeDefined();
    expect(screen.getByTestId(/table-select/i)).toBeDefined();
    expect(screen.getByTestId(/data-table/i)).toBeDefined();
  });
});
