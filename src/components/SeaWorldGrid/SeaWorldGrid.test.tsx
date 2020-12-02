import React from 'react';
import { render, screen } from '@testing-library/react';
import SeaWorldGrid from './index';
import SeaWorldContext from '../../context/SeaWorldContext';
import { SeaWorldContextProps } from '../../ts/types/app_types';
import { ElementState } from '../../ts/enums/app_enums';

const mockFn = jest.fn();
describe('SeaWorldGrid should behave as expected', () => {
    const seaWorldContext: SeaWorldContextProps = {
        isConfigurationModalVisible: true,
        seaWorldElements: null,
        seaWorldSpace: { width: 0, height: 0, elementSize: 20 },
        matrix: null
    }

    beforeAll(() => {
        render(<SeaWorldContext.Provider value={seaWorldContext}>
            <SeaWorldGrid handleStateChange={mockFn} />
        </SeaWorldContext.Provider>
        );
    })
    test('Should render empty when grid is not defined', () => {
        const { container } = render(<SeaWorldContext.Provider value={seaWorldContext}>
            <SeaWorldGrid handleStateChange={mockFn}  />
        </SeaWorldContext.Provider>
        );
        const elements = container.getElementsByTagName('div').length;
        expect(elements).toBe(1);
    });

    test('Should render 2 elements based on props', () => {
        const newProps: SeaWorldContextProps = {
            ...seaWorldContext,
            seaWorldElements: [{
                id: 0,
                state: ElementState.EMPTY,
                position: {
                    x: 0,
                    y: 0
                }
            },
            {
                id: 1,
                state: ElementState.FILLED,
                position: {
                    x: 0,
                    y: 0
                }
            }
        ]
        }
        render(<SeaWorldContext.Provider value={newProps}>
            <SeaWorldGrid handleStateChange={mockFn}  />
        </SeaWorldContext.Provider>
        );
        const elements = screen.getAllByTestId('sea-world-element').length;
        expect(elements).toBe(2);
    });
})
