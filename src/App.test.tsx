import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Header', () => () => <div data-testid={"Header"} />);
jest.mock('./components/ConfigurationModal', () => () => <div data-testid={"ConfigurationModal"} />);
jest.mock('./components/SeaWorldGrid', () => () => <div data-testid={"SeaWorldGrid"} />);

describe('SeaWorldGrid should behave as expected', () => {
  test('Render without Problem and contains all components', () => {
    render(<App />);
    const headerComponent = screen.getByTestId(/Header/);
    expect(headerComponent).toBeInTheDocument();
    const configurationModal = screen.getByTestId(/ConfigurationModal/);
    expect(configurationModal).toBeInTheDocument();
    const seaWorldGrid = screen.getByTestId(/SeaWorldGrid/);
    expect(seaWorldGrid).toBeInTheDocument();
  });
});