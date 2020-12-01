import React from 'react';
import { render } from '@testing-library/react';
import ConfigurationModal from './index';
import SeaWorldContext from '../../context/SeaWorldContext';
import { SeaWorldContextProps } from '../../ts/types/app_types';

const mockFn = jest.fn();
describe('ConfigurationModal should behave as expected', () => {

    let screen : any  = null
    const seaWorldContext: SeaWorldContextProps = {
        isConfigurationModalVisible: true,
        seaWorldElements: null,
        seaWorldSpace: {width: 0, height: 0}
    }

    beforeAll(() => {
        screen = render(
            <SeaWorldContext.Provider value={seaWorldContext}>
                <ConfigurationModal handleChangeGrid={mockFn} handleConfigurationVisible={mockFn} handleSetSeaWordElements={mockFn}  />
            </SeaWorldContext.Provider>
        );
    })
    test('Should have Modal Title', () => {
        const title = screen.getByText(/Please, set the Sea world space/s);
        expect(title).toBeInTheDocument()
    });
    test('Should have 2 input fields to define grid', () => {
        const { container } = render(
            <SeaWorldContext.Provider value={seaWorldContext}>
                <ConfigurationModal handleChangeGrid={mockFn} handleConfigurationVisible={mockFn} handleSetSeaWordElements={mockFn} />
            </SeaWorldContext.Provider>
        );
        console.log(container.getElementsByTagName('input').length)
        const numberElements = container.getElementsByTagName('input').length;
        expect(numberElements).toBe(1);
      });
    test('Should have 1 button that represents sea element', () => {
        const {container} = render(
            <SeaWorldContext.Provider value={seaWorldContext}>
                <ConfigurationModal handleChangeGrid={mockFn} handleConfigurationVisible={mockFn} handleSetSeaWordElements={mockFn} />
            </SeaWorldContext.Provider>
        );
        const numberElements = container.getElementsByTagName('button').length;
        expect(numberElements).toBe(1);
      });
})
