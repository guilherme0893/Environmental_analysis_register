import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Tests the header component', () => {
  it('It should be rendered in the Main page', () => {
    render(<Header />);
    expect(screen.getByTestId('main-header')).toBeDefined();
  });
});
