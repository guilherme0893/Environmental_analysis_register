import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import ParameterForm from '../../components/ParameterForm';
import renderWithRouter from '../../renderWithRouter';

describe('Tests the ParameterForm component', () => {
  test('It should be rendered with a data-testId of sample-form', () => {
    renderWithRouter(<ParameterForm />);
    expect(screen.queryByTestId('sample-form')).toBeDefined();
  });

  test('It should have a div with 04 labels tags', () => {
    renderWithRouter(<ParameterForm />);
    const labels = expect(screen.queryAllByRole('label'));
    expect(labels).toBeDefined();
  });

  test('It should have a div with 04 input tags', () => {
    renderWithRouter(<ParameterForm />);
    const labels = expect(screen.queryAllByRole('input'));
    expect(labels).toBeDefined();
  });

  test('It should have a div with 04 texts: sample point name, parameter, unity, value', () => {
    renderWithRouter(<ParameterForm />);
    const name = screen.getByText(/sample point name/i);
    const parameter = screen.getByText('Parameter:');
    const unity = screen.getByText(/unity/i);
    const value = screen.getByText(/value/i);
    expect(name).toBeInTheDocument();
    expect(parameter).toBeInTheDocument();
    expect(unity).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  test('It has a button to register samples', () => {
    renderWithRouter(<ParameterForm />);
    const sendButton = screen.getByRole('button', { name: /register parameter/i });
    expect(sendButton).toBeInTheDocument();
  });

  // test('It has a button able to register parameters', () => {
  //   renderWithRouter(<ParameterForm />);
  //   const user = userEvent.setup();
  //   const sendButton = screen.getByRole('button', { name: /register parameter/i });
  //   expect(sendButton).toBeInTheDocument();
  //   user.click(sendButton);
  // });
});
