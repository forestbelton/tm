import { type BoardCell } from "../types";
import Card from "./Card";

type BoardProps = {
  board: BoardCell[][];
};

const boardStyle = {
  backgroundImage: "url(assets/card_mg.png)",
  backgroundPosition: "-1010px 0",
  width: "1008px",
  height: "1080px",
  paddingLeft: "82px",
  paddingTop: "37px",
  boxSizing: "border-box",
  display: "flex",
  gap: "2px",
};

const Board = ({ board }: BoardProps) => {
  const cells = [];
  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      if (typeof board[y][x] === "object") {
        cells.push(<Card card={board[y][x]} />);
      } else {
        cells.push(<div />);
      }
    }
  }

  return <div style={boardStyle}>{cells}</div>;
};

export default Board;
