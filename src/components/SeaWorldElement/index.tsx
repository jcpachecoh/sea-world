import React from 'react';
import styled from 'styled-components'
import { ElementState } from '../../ts/enums/app_enums';
import { theme } from '../../theme';

interface DivComponentProps {
    readonly state: ElementState;
    readonly elementSize: number | undefined;
};

const StyledDiv = styled.div<DivComponentProps>`
    background-color: ${props => props.state === ElementState.EMPTY ? theme.colors.seaBlue : theme.colors.islandBrown};
    width: ${props => props.elementSize}px;
    height: ${props => props.elementSize}px;
    border: 1px solid ${theme.colors.onyx};
    &:hover {
        opacity: 0.8;
    }
`;

interface ISeaWorldElementComponentProps {
    handleStateChange: (id: number) => void;
    id: number;
    state: ElementState;
    elementSize: number | undefined;
}

const SeaWorldElement = ({ id, state, elementSize, handleStateChange}: ISeaWorldElementComponentProps) =>{

    return (
        <StyledDiv
            onClick={() => handleStateChange(id)}
            data-testid={'sea-world-element'}
            state={state}
            elementSize={elementSize}
        />
    )
}

export default SeaWorldElement
