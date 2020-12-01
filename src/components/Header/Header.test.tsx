import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';

const mockFn = jest.fn();
test('renders learn react link', () => {
  render(<Header title={"Sea world"} handleConfigurationVisible={mockFn} />);
  const linkElement = screen.getByText(/Sea world/i);
  expect(linkElement).toBeInTheDocument();
});


test('should call handleConfigurationVisible fn', () => {
    render(<Header title={"Sea world"} handleConfigurationVisible={mockFn} />);
    const icon = screen.getByTestId('settings-icon');
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(mockFn).toHaveBeenCalled();
  });
