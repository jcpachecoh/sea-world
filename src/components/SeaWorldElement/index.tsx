import React, { useRef } from 'react'
import { IElementPositionProps } from '../../ts/interfaces/app_interfaces';
import styled from 'styled-components'
import { ElementState } from '../../ts/enums/app_enums';

const StyledDiv = styled.div`
    background-color: blue;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    &:hover {
        opacity: 0.8;
    }
`;

interface ISeaWorldElementComponentProps {
    handleStateChange: (id: number) => void;
    id: number;
    state: ElementState;
    position: IElementPositionProps;
}

const SeaWorldElement = ({ id, state, position, handleStateChange}: ISeaWorldElementComponentProps) =>{
    const divElement= useRef(null);


    return (
        <StyledDiv onClick={() => handleStateChange(id)} data-id={id} ref={divElement}/>
    )
}

export default SeaWorldElement
