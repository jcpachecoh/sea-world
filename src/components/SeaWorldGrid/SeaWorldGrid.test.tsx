import React from 'react';
import { render } from '@testing-library/react';
import SeaWorldGrid from './index';
import SeaWorldContext from '../../context/SeaWorldContext';
import { SeaWorldContextProps } from '../../ts/types/app_types';

const mockFn = jest.fn();
describe('SeaWorldGrid should behave as expected', () => {
    const seaWorldContext: SeaWorldContextProps = {
        isConfigurationModalVisible: true,
        seaWorldElements: null,
        seaWorldSpace: {width: 0, height: 0}
    }

    beforeAll(() => {
        render(<SeaWorldContext.Provider value={seaWorldContext}>
            <SeaWorldGrid />
        </SeaWorldContext.Provider>
        );
    })
    test('Should render empty when grid is not defined', () => {
        const { container } = render(<SeaWorldContext.Provider value={seaWorldContext}>
            <SeaWorldGrid />
        </SeaWorldContext.Provider>
        );
        const elements = container.getElementsByTagName('div').length;
        expect(elements).toBe(1);
    });
})
