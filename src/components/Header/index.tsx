import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

import { Sliders } from 'react-bootstrap-icons';

interface HeaderProps {
    title: string;
    handleConfigurationVisible: () => void;
}

const StyledHeader = styled.header`
    text-align: center;
    padding: 32px;
    font-size: 32px;
    background-color: ${theme.colors.onyx};
    color: ${theme.colors.powderWhite};

    svg {
        position: absolute;
        right: 20px;
    }
`


function Header({ title, handleConfigurationVisible }: HeaderProps) {
    return (
        <StyledHeader>
            {title}
            <Sliders data-testid={'settings-icon'} onClick={handleConfigurationVisible} />
        </StyledHeader>
    )
}

export default Header
