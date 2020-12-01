import React from 'react'
import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: blue;
`;


const SeaWorldElement = ({ id, state, position }: ISeaWorldElementProps) =>{

    const handleStateChange = () => {

    };

    return (
        <StyledDiv onClick={handleStateChange} />
    )
}

export default SeaWorldElement
