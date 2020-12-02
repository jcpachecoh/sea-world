import React from 'react'
import { Badge } from 'react-bootstrap'
import { Sun } from 'react-bootstrap-icons';
import { StyledDiv } from '.';
import SeaWorldContext from '../../context/SeaWorldContext';

import { DFS } from '../../utils';


const IslandsContainer = () => {
    return <SeaWorldContext.Consumer>
    {
            ({ matrix, seaWorldSpace}) => {
            const width = seaWorldSpace && seaWorldSpace.width;
            const height = seaWorldSpace && seaWorldSpace.height;
 
            const getIslands = (): number => {
                let islands = 0;
                if (width && height && matrix) {
                const visited: boolean[][] = Array(width).fill(false).map(() => Array(height));
                    for (let i = 0; i < width; i++) {
                        for (let j = 0; j < height; j++) {
                            if (matrix[i][j] === 1 && !visited[i][j])
                             {
                                DFS(matrix, i, j, visited, width, height);
                                ++islands;
                            }
                        }
                    }
                }
                return islands;
            }
            return (
                <StyledDiv>
                    <Sun data-testid={'sun-icon'} />
                    <h2>
                        Islands <Badge variant="light" data-testid={"badge-island-number"}>{getIslands()}</Badge>
                    </h2>
                </StyledDiv>
            )
        }
    }
    </SeaWorldContext.Consumer>
}

export default IslandsContainer
