export const Pieces = () => {
  let pieces = [];

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
      pieces.push({
        image: `assets/pawn-${j ? "w" : "b"}.png`,
        x: i,
        y: j ? 1 : 6,
      });
    }
  }

  for (let i = 0; i < 2; i++) {
    const type = i ? "w" : "b";
    const y = i ? 0 : 7;
    pieces.push({ image: `assets/rook-${type}.png`, x: 0, y });
    pieces.push({ image: `assets/rook-${type}.png`, x: 7, y });
    pieces.push({ image: `assets/knight-${type}.png`, x: 1, y });
    pieces.push({ image: `assets/knight-${type}.png`, x: 6, y });
    pieces.push({ image: `assets/bishop-${type}.png`, x: 2, y });
    pieces.push({ image: `assets/bishop-${type}.png`, x: 5, y });
    pieces.push({ image: `assets/queen-${type}.png`, x: 3, y });
    pieces.push({ image: `assets/king-${type}.png`, x: 4, y });
  }

  return pieces;
};

let el = null;

export const clickedPiece = (e) => {
  el = e.target;

  if (el.classList.contains("chess-piece")) {
    el.style.position = "absolute";

    const x = e.clientX;
    const y = e.clientY;
    el.style.left = `calc(${x}px - (var(--pieces-size) / 2))`;
    el.style.top = `calc(${y}px - (var(--pieces-size) / 2))`;
  }
};

export const movingPiece = (e) => {
  if (el) {
    const x = e.clientX;
    const y = e.clientY;
    el.style.left = `calc(${x}px - (var(--pieces-size) / 2))`;
    el.style.top = `calc(${y}px - (var(--pieces-size) / 2))`;
  }
};

export const droppingPiece = (e) => {
  el = null;
};
