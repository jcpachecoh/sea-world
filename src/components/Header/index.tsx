import React from 'react'
import styled from 'styled-components'
import { Sliders } from 'react-bootstrap-icons';

import { theme } from '../../theme'
import IslandsContainer from './IslandsContainer';
import FilledItemsContainer from './FilledItemsContainer';

interface HeaderProps {
    title: string;
    handleConfigurationVisible: () => void;
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.onyx};
    color: ${theme.colors.powderWhite};
    display: flex;
    font-size: ${theme.fontSizes.medium};
    justify-content: space-around;
    padding: 32px;

    h1 {
        text-align: center;
    }
`

interface StyledDivProps {
    width?: number;
    direction?: string;
}

export const StyledDiv = styled.div<StyledDivProps>`
    width: ${props => props.width ? props.width : '100%'};
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
`;

function Header({ title, handleConfigurationVisible }: HeaderProps) {

    return (
        <StyledHeader>
            <StyledDiv width={400} direction={'column'}>
                <FilledItemsContainer />
                <IslandsContainer />
            </StyledDiv>
            <h1>{title}</h1>
            <Sliders data-testid={'settings-icon'} onClick={handleConfigurationVisible} />
        </StyledHeader>
    )
     
}

export default Header
