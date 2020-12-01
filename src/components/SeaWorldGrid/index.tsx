import React from 'react'
import styled from 'styled-components';

import SeaWorldContext from '../../context/SeaWorldContext';

import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';

import { theme } from '../../theme';

import SeaWordElement from '../SeaWorldElement';

const StyledContainer = styled.div`
    border: 1px solid ${theme.colors.lightBlue};
`;



const SeaWorldGrid = () => {

    const handleStateChange = (id: number) => {
        console.log("el id", id);
        
    }
    return <SeaWorldContext.Consumer>
        {
            ({ seaWorldElements }) => {
                console.log('seaWorldElements inside', seaWorldElements)
                return (
                    <StyledContainer>
                        {seaWorldElements && seaWorldElements.map((el: ISeaWorldElementProps, key: number) => {
                            return (
                                <SeaWordElement
                                    id={el.id}
                                    state={el.state}
                                    position={el.position}
                                    key={key}
                                    handleStateChange={handleStateChange} />
                            )
                        })}
                    </StyledContainer>
                )}
        }
    </SeaWorldContext.Consumer>
}

export default SeaWorldGrid
