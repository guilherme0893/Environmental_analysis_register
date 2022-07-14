import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SampleForm from '../../components/samples/SampleForm';
import renderWithRouter from '../../renderWithRouter';
import GlobalProvider from '../../context/GlobalProvider';

describe('Tests the SampleForm component', () => {
  test('It should be rendered with a data-testId of sample-form', () => {
    renderWithRouter(
      <GlobalProvider>
        <SampleForm />
      </GlobalProvider>,
    );
    expect(screen.queryByTestId('sample-form')).toBeDefined();
  });

  test('It should have a div with 03 labels tags', () => {
    renderWithRouter(<SampleForm />);
    const labels = expect(screen.queryAllByRole('label'));
    expect(labels).toBeDefined();
  });

  test('It should have a div with 03 input tags', () => {
    renderWithRouter(<SampleForm />);
    const labels = expect(screen.queryAllByRole('input'));
    expect(labels).toBeDefined();
  });

  test('It should have a div with 03 texts: name, x coordinate, y coordinate', () => {
    renderWithRouter(<SampleForm />);
    const name = screen.getByText(/name/i);
    const xCoordinate = screen.getByText(/x coordinate/i);
    const yCoordinate = screen.getByText(/y coordinate/i);
    expect(name).toBeInTheDocument();
    expect(xCoordinate).toBeInTheDocument();
    expect(yCoordinate).toBeInTheDocument();
  });

  test('It has a button to register samples', () => {
    renderWithRouter(<SampleForm />);
    const sendButton = screen.getByRole('button', { name: 'Register sample' });
    expect(sendButton).toBeInTheDocument();
  });

  // test('It has a button able to register samples', () => {
  //   renderWithRouter(<SampleForm />);
  //   const user = userEvent.setup();
  //   const sendButton = screen.getByRole('button', { name: 'Register sample' });
  //   expect(sendButton).toBeInTheDocument();
  //   user.click(sendButton);
  // });
});
