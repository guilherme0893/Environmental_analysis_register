import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('Tests the NotFound page', () => {
  it('It should be a text Page not found as a h1', () => {
    render(<NotFound />);
    const notFoundText = screen.getByRole('heading', { value: /page not found/i, level: 1 });
    expect(notFoundText).toBeInTheDocument();
  });
});
