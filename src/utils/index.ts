

const isSafe = (M: number[][], row: number, col: number, visited: boolean[][], numberRows: number, numberColumns: number) : boolean => 
{
    return (row >= 0) && (row < numberRows) && (col >= 0) && (col < numberColumns) && (M[row][col] === 1 && !visited[row][col]);
}


export const DFS = (M: number[][], row: number, col: number, visited: boolean[][], numberRows: number, numberColumns: number): void => 
{
    const rowNbr: number[] = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
    const colNbr: number[] = [ -1, 0, 1, -1, 1, -1, 0, 1 ];


    visited[row][col] = true;

    for (let k = 0; k < 8; ++k)
    if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited, numberRows, numberColumns))
        DFS(M, row + rowNbr[k], col + colNbr[k], visited, numberRows, numberColumns);
}
