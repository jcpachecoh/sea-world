import React from 'react';
import { render, screen } from '@testing-library/react';
import SeaWorldContainer from './index';

jest.mock('../Header', () => () => <div data-testid={"Header"} />);
jest.mock('../ConfigurationModal', () => () => <div data-testid={"ConfigurationModal"} />);
jest.mock('../SeaWorldGrid', () => () => <div data-testid={"SeaWorldGrid"} />);

describe('SeaWorldGrid should behave as expected', () => {
  test('Render without Problem and contains all components', () => {
    render(<SeaWorldContainer />);
    const headerComponent = screen.getByTestId(/Header/);
    expect(headerComponent).toBeInTheDocument();
    const configurationModal = screen.getByTestId(/ConfigurationModal/);
    expect(configurationModal).toBeInTheDocument();
    const seaWorldGrid = screen.getByTestId(/SeaWorldGrid/);
    expect(seaWorldGrid).toBeInTheDocument();
  });
});