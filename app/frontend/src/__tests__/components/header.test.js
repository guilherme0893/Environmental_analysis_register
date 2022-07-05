import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Tests the header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('It should have a data-testId of main-header', () => {
    expect(screen.getByTestId('main-header')).toBeDefined();
  });

  it('It should be rendered a text with Arcadis in the title as a h1', () => {
    const title = screen.getByRole('heading', { value: 'Arcadis', level: 1 });
    expect(title).toBeInTheDocument();
  });
});
