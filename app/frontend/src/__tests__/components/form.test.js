import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../components/Header';

describe('Tests the Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('It should be rendered with a data-testId of sampleForm', () => {
    expect(screen.getByTestId(/sample-form/i)).toBeDefined();
  });
});
