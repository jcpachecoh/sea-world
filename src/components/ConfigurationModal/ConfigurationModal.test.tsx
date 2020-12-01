import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConfigurationModal from './index';
import SeaWorldContext from '../../context/SeaWorldContext';
import { SeaWorldContextProps } from '../../ts/types/app_types';

const mockFn = jest.fn();
const mockFnButton = jest.fn();
describe('ConfigurationModal should behave as expected', () => {

    const seaWorldContext: SeaWorldContextProps = {
        isConfigurationModalVisible: true,
        seaWorldElements: null,
        seaWorldSpace: {width: 0, height: 0}
    }

    beforeEach(() => {
        render(
            <SeaWorldContext.Provider value={seaWorldContext}>
                <ConfigurationModal
                    handleChangeGrid={mockFn}
                    handleConfigurationVisible={mockFn}
                    handleSetSeaWordElements={mockFnButton}
                />
            </SeaWorldContext.Provider>
        );
    })

    test('Should have Modal Title', () => {
        const title = screen.getByText(/Please, set the Sea world space/s);
        expect(title).toBeInTheDocument()
    });
    test('Should have 2 input fields to define grid', () => {
        const inputWidth = screen.getByTestId('input-text-width')
        expect(inputWidth).toBeInTheDocument();
        const inputHeight = screen.getByTestId('input-text-height')
        expect(inputHeight).toBeInTheDocument();
      });
    test('Should have 1 button that represents sea element', () => {
        const button = screen.getByText('Create Sea World');
        expect(button).toBeInTheDocument();
    });

    test('Should call handleChangeGrid function ', () => {
        const inputWidth = screen.getByTestId('input-text-width')
        expect(inputWidth).toBeInTheDocument();
        fireEvent.change(inputWidth, {
            target: { value: 2 }
        });
        expect(mockFn).toHaveBeenCalled();
    });

    test('Should call handleConfigurationVisible function to hide modal ', () => {
        const xButton = screen.getByText('Close')
        expect(xButton).toBeInTheDocument();
        fireEvent.click(xButton);
        expect(mockFn).toHaveBeenCalled();
    });
    test('Should not call handleSetSeaWordElements function if values are invalid', () => {
        const inputWidth = screen.getByTestId('input-text-width')
        expect(inputWidth).toBeInTheDocument();
        fireEvent.change(inputWidth, {
            target: { value: 2 }
        });
        expect(mockFn).toHaveBeenCalled();
        const button = screen.getByText('Create Sea World');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByText('Please, verify data width or height can not be negative or 0'));
        expect(mockFnButton).toHaveBeenCalledTimes(0);
    });
})
