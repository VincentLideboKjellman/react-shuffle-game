import React, { useState } from "react";
import Tile from "../components/Tile";
import { BOARD_SIZE, GRID_SIZE, TILE_COUNT } from "../constants";
import { canSwap, shuffle, swap, isSolved } from "../helpers";
const Board = () => {
    // Keep track of the tiles in states, gives an array of correct size
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    //const [isStarted, setIsStarted] = useState(false);
    console.log(tiles)
    // sets the state to the shuffled tiles from the helper functions
    const shuffleTiles = () => {
        //const shuffledTiles = shuffle(tiles)
        setTiles(shuffle)
    }

    // argument is the tile that has been clicked
    const swapTiles = (tileIndex) => {
        if(canSwap(tileIndex, tiles.indexOf(tiles.length -1 ))) {
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length -1))
            setTiles(swappedTiles)
        }
    }
     
    //Handle clicks
    const handleTileClick = (index) => {
        swapTiles(index)
    }

    const handleShuffleClick = () => {
        shuffleTiles()
    }

    //if you want a button to start game instead of onload
    // const handleStartClick = () => {
    //     shuffleTiles();
    //     setIsStarted(true);

    // }


    // Based on board size
    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };

    const solved = isSolved(tiles)

    //shuffles when you enter the site
    window.onload = function() {
        shuffleTiles()
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
                handleTileClick={handleTileClick}
                />
            ))}
        </ul>
        {solved && <div>Bra jobbat, du löste puzzlet! :) </div>}
        {/* {!isStarted ?
            (<button onClick={() => handleStartClick()}> Börja Spela </button>) :
            (<button onClick={() => handleShuffleClick()}> Slumpa </button> )} */}
            <button onClick={() => handleShuffleClick()}> Slumpa </button>
    </>
    );
}

export default Board;