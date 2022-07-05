import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../../pages/Main';

describe('Tests the Main page', () => {
  it('It should be rendered with a Header', () => {
    render(<Main />);
    expect(screen.getByTestId('main-header')).toBeDefined();
  });
});
