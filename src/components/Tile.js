import "../styles/tile.css";

const Tile = ({ num, image }) => {
  return num ? (
    <div className="tile light-tile">
      {image && (
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="chess-piece"
        ></div>
      )}
    </div>
  ) : (
    <div className="tile dark-tile">
      {image && (
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="chess-piece"
        ></div>
      )}
    </div>
  );
};

export default Tile;
