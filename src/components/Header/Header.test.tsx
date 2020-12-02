import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';
import { SeaWorldContextProps } from '../../ts/types/app_types';
import SeaWorldContext from '../../context/SeaWorldContext';
import { ElementState } from '../../ts/enums/app_enums';

const mockFn = jest.fn();
describe('Header tests', () => {
  const seaWorldContext: SeaWorldContextProps = {
    isConfigurationModalVisible: true,
    seaWorldElements: null,
    seaWorldSpace: {width: 0, height: 0, elementSize: 20}
  }
  beforeEach(() => {
  
    render(<SeaWorldContext.Provider value={seaWorldContext}>
        <Header title={"Sea world"} handleConfigurationVisible={mockFn} />
      </SeaWorldContext.Provider>);
  })

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/Sea world/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('should call handleConfigurationVisible fn', () => {
    const icon = screen.getByTestId('settings-icon');
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(mockFn).toHaveBeenCalled();
  });

  test('should have island container and show 0 if the space is not set', () => {
    const icon = screen.getByTestId('sun-icon');
    expect(icon).toBeInTheDocument();
    const asterisk = screen.getByTestId('asterisk-icon');
    expect(asterisk).toBeInTheDocument();
    const island = screen.getByText('Islands');
    expect(island).toBeInTheDocument();
    const badge = screen.getByTestId('badge-island-number').innerHTML;
    expect(badge).toBe("0");
  });

  test('should have filledItems container and show numbers of islands', () => {
    const newProps: SeaWorldContextProps = {
      ...seaWorldContext,
      seaWorldElements: [
        {
          id: 0,
          state: ElementState.EMPTY
        },
        {
          id: 1,
          state: ElementState.FILLED
        }
      ]
    };
    render(
      <SeaWorldContext.Provider value={newProps}>
      <Header title={"Sea world"} handleConfigurationVisible={mockFn} />
      </SeaWorldContext.Provider>
    );
    const badge = screen.getAllByTestId('badge-island-number')[1].innerHTML;
    expect(badge).toBe("1");
  });
  test('should have island container and show numbers of islands', () => {
    const newProps: SeaWorldContextProps = {
      ...seaWorldContext,
      seaWorldElements: [
        {
          id: 0,
          state: ElementState.EMPTY
        },
        {
          id: 1,
          state: ElementState.FILLED
        }
      ]
    };
    render(
      <SeaWorldContext.Provider value={newProps}>
      <Header title={"Sea world"} handleConfigurationVisible={mockFn} />
      </SeaWorldContext.Provider>
    );
    const badge = screen.getAllByTestId('badge-island-number')[1].innerHTML;
    expect(badge).toBe("1");
  });
});