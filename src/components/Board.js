import react from "react";
import Tile from ".Tile";
import { BOARD_SIZE, GRID_SIZE, TILE_COUNT } from "../constants";
const Board = () => {
    // Keep track of the tiles in states
    const[tiles, setTiles] = useState([...Array(TILE_COUNT).keys]);
    // Based on board size
    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };

    return (
    <>
        <ul style={style} className="board">
            {tiles.map((tile, index) => (
            <Tile
                key={tile}
                index={index}
                tile={tile}
                width={pieceWidth}
                height={pieceHeight}
                />
            ))}
        </ul>
        <button>slumpa</button>
    </>
    );
}

export default Board;