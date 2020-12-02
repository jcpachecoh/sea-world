import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SeaWorldElement from './index';
import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';
import { ElementState } from '../../ts/enums/app_enums';

const elementProps : ISeaWorldElementProps = {
    id: 1,
    state: ElementState.EMPTY
}
const mockFn = jest.fn();
describe('SeaWorldElement should behave as expected', () => {
    beforeEach(() => {
        render(<SeaWorldElement {...elementProps} handleStateChange={mockFn} elementSize={20} />);
    })
    test('Should have 1 div that represents sea element', () => {
        const seaWorldElement = screen.getByTestId('sea-world-element');
        expect(seaWorldElement).toBeInTheDocument();
    });
    test('Should trigger handleStateChange when the div is clicked', () => {
        const seaWorldElement = screen.getByTestId('sea-world-element');
        expect(seaWorldElement).toBeInTheDocument();
        fireEvent.click(seaWorldElement);
        expect(mockFn).toBeCalled();
    });
})
