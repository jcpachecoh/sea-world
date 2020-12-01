import React from 'react';
import { render, screen } from '@testing-library/react';
import SeaWorldElement from './index';
import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';
import { ElementState } from '../../ts/enums/app_enums';

const elementProps : ISeaWorldElementProps = {
    id: 1,
    state: ElementState.EMPTY,
    position: {
        x: 0,
        y: 0
    }

}
const mockFn = jest.fn();
describe('SeaWorldElement should behave as expected', () => {
    test('Should have 1 div that represents sea element', () => {
        const { container }=render(<SeaWorldElement {...elementProps} />);
        const numberElements = container.getElementsByTagName('div').length;
        expect(numberElements).toBe(1);
      });
})
