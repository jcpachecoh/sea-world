import React from 'react'
import { Badge } from 'react-bootstrap'
import { Asterisk } from 'react-bootstrap-icons';
import { StyledDiv } from '.';
import SeaWorldContext from '../../context/SeaWorldContext';
import { ElementState } from '../../ts/enums/app_enums';


const FilledItemsContainer = () => {

    return <SeaWorldContext.Consumer>
    {
        ({ seaWorldElements }) => {
            const filledItems = seaWorldElements ? seaWorldElements.filter(ele => ele.state === ElementState.FILLED).length : 0;
            return (
                <StyledDiv>
                    <Asterisk data-testid={'asterisk-icon'} />
                    <h2>
                        Filled: <Badge variant="light" data-testid={"badge-filled-number"}>{filledItems}</Badge>
                    </h2>
                </StyledDiv>
            )
        }
    }
    </SeaWorldContext.Consumer>
}

export default FilledItemsContainer;
