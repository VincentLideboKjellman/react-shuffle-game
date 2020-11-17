import { TILE_COUNT, GRID_SIZE} from "./constants";

// Checks if game is solvable
export const isSolvable = (tiles) => {
    let product = 1;
    for(let i = 1, l = TILE_COUNT - 1; i <= l; i++){
        for(let j = i + 1, m = l + 1; j <= m; j++){
            product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
        }
    }
    return Math.round(product) === 1;
}

//Checks if game is solved/win condition
export const isSolved = (tiles) => {
    for(let i = 0, l = tiles.length; i < l; i++){
        if(tiles[i] !== i){
            return false
        }
    }
    return true;
}

//Get index of specific tile
export const getIndex = (row, col) => {
    return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// get row and column as an object for a specified index
export const getMatrixPosition = (index) => {
    return {
        row: Math.floor(index / GRID_SIZE),
        col: index % GRID_SIZE,
    };
}
// get visual position because the tiles are absolute, calculating what each positions has in pixels
export const getVisualPosition = (row, col, width, height) => {
    return {
        x: col * width,
        y: row * height,
    };
}

//shuffle and makes sure its solvable
export const shuffle = (tiles) => {
    const shuffledTiles = [
        ...tiles
        .filter((t) => t !== tiles.length - 1)
        .sort(() => Math.random() - 0.5),
        tiles.length - 1,
    ];
    return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
        ? shuffledTiles
        : shuffle(shuffledTiles);
}

// checks if are you pressing a tile adjecant to an empty slot
export const canSwap = (src, dest, GRID_SIZE) => {
    const { row: srcRow, col: srcCol } = getMatrixPosition( src, GRID_SIZE )
    const { row: destRow, col: destCol } = getMatrixPosition( dest, GRID_SIZE);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

// moves the tile into the empty slot
export const swap = (tiles, src, dest) => {
    const tilesResult = [...tiles];
    [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]]
    return tilesResult;
}




