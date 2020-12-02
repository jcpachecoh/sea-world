import React from 'react'
import styled from 'styled-components';

import SeaWorldContext from '../../context/SeaWorldContext';

import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';

import SeaWordElement from '../SeaWorldElement';

interface ContainerComponentProps {
    readonly widthSize: number | undefined;
    readonly heightSize: number | undefined;
    readonly elementSize: number | undefined;
    readonly width: number | undefined;
    readonly heigth: number | undefined;
};

const StyledContainer = styled.div<ContainerComponentProps>`
    display: grid;
    height: ${props => props.heightSize}px;
    grid-template-columns: repeat(${props => props.width}, ${props => props.elementSize}px);
    grid-template-rows: repeat(${props => props.heigth}, ${props => props.elementSize}px);
    justify-items: stretch;
    margin: 0 auto;
    padding: 5px;
    width: ${props => props.widthSize}px;
`;

interface SeaWorldGridProps {
    handleStateChange: (id: number) => void;
}

const SeaWorldGrid = ({ handleStateChange }: SeaWorldGridProps) => {


    return <SeaWorldContext.Consumer>
        {
            ({ seaWorldElements, seaWorldSpace }) => {
                const elementSize = seaWorldSpace && seaWorldSpace.elementSize;
                const width = seaWorldSpace && seaWorldSpace.width;
                const height = seaWorldSpace && seaWorldSpace.height;
                const widthSize = seaWorldSpace && elementSize && seaWorldSpace.width * elementSize;
                const heightSize = seaWorldSpace && elementSize && seaWorldSpace.height * elementSize;
                return (
                    <StyledContainer width={width} heigth={height} widthSize={widthSize} heightSize={heightSize} elementSize={elementSize}>
                        {seaWorldElements && seaWorldElements.map((el: ISeaWorldElementProps, key: number) => {
                            return (
                                <SeaWordElement
                                    id={el.id}
                                    state={el.state}
                                    key={key}
                                    elementSize={elementSize}
                                    handleStateChange={(id: number) => handleStateChange(id)}
                                 />
                            )
                        })}
                    </StyledContainer>
                )}
        }
    </SeaWorldContext.Consumer>
}

export default SeaWorldGrid
