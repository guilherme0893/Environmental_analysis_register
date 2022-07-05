import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../components/Header';
import renderWithRouter from '../../renderWithRouter';

describe('Tests the Form component', () => {
  test('It should be rendered with a data-testId of sample-form', () => {
    renderWithRouter(<Form />);
    expect(screen.queryByTestId('sample-form')).toBeDefined();
  });
  test('It should have a div with 03 labels tags', () => {
    renderWithRouter(<Form />);
    const labels = expect(screen.queryAllByRole('label'));
    expect(labels).toBeDefined();
  });
  test('It should have a div with 03 input tags', () => {
    renderWithRouter(<Form />);
    const labels = expect(screen.queryAllByRole('input'));
    expect(labels).toBeDefined();
  });
});
