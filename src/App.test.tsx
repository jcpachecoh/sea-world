import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/SeaWorldContainer', () => () => <div data-testid={"SeaWorldContainer"} />);


describe('SeaWorldGrid should behave as expected', () => {
  test('Render without Problem and contains all components', () => {
    render(<App />);
    const seaWorldContainerComponent = screen.getByTestId(/SeaWorldContainer/);
    expect(seaWorldContainerComponent).toBeInTheDocument();
  });
});