// import { useState, useEffect } from "react";
import "../styles/board.css";
import Tile from "./Tile";
import { Pieces, movingPiece, clickedPiece, droppingPiece } from "./Pieces";

const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const pieces = Pieces();

const Board = () => {
  let board = [];

  for (let i = rows.length - 1; i >= 0; i--) {
    for (let j = 0; j < columns.length; j++) {
      let result = (i + j) % 2;
      let img = undefined;

      if (i === 1 || i === 6 || i === 0 || i === 7) {
        pieces.map(({ image, x, y }) =>
          x === j && y === i ? (img = image) : null
        );
      }

      board.push(<Tile key={`${i},${j}`} num={result} image={img} />);
    }
  }

  return (
    <div
      onMouseUp={droppingPiece}
      onMouseMove={movingPiece}
      onMouseDown={clickedPiece}
      className="board"
    >
      {board}
    </div>
  );
};

export default Board;
