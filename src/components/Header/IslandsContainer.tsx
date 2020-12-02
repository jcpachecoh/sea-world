import React from 'react'
import { Badge } from 'react-bootstrap'
import { Sun } from 'react-bootstrap-icons';
import { StyledDiv } from '.';
import SeaWorldContext from '../../context/SeaWorldContext';
import { ElementState } from '../../ts/enums/app_enums';


const IslandsContainer = () => {

    return <SeaWorldContext.Consumer>
    {
        ({ seaWorldElements }) => {
            const islandNumbers = seaWorldElements ? seaWorldElements.filter(ele => ele.state === ElementState.FILLED).length : 0;
            return (
                <StyledDiv>
                    <Sun data-testid={'sun-icon'} />
                    <h2>
                        Islands <Badge variant="light" data-testid={"badge-island-number"}>{islandNumbers}</Badge>
                    </h2>
                </StyledDiv>
            )
        }
    }
    </SeaWorldContext.Consumer>
}

export default IslandsContainer
