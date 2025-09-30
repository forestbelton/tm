import { useState } from "react";
import { ALL_CARDS } from "./cards";
import Card from "./components/Card";
import { CardColor, CardDirection } from "./types";
import Board from "./components/Board";

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <>
      {/*<select onChange={(ev) => setCardIndex(parseInt(ev.target.value, 10))}>
        {[...Array(ALL_CARDS.length).keys()]
        .map((_, idx) =>
          <option key={idx} value={idx}>
            {ALL_CARDS[idx].name}
          </option>
        )}
      </select>

      <Card
        card={{
          info: ALL_CARDS[cardIndex],
          color: CardColor.BLUE,
          arrows: [CardDirection.NE, CardDirection.E, CardDirection.SE],
        }}
      />*/}
      <Board board={[
        [
          {
            info: ALL_CARDS[0],
            color: CardColor.BLUE,
            arrows: [CardDirection.NE, CardDirection.E, CardDirection.SE],
          },
          {
            info: ALL_CARDS[1],
            color: CardColor.BLUE,
            arrows: [CardDirection.NE, CardDirection.E, CardDirection.SE],
          },
          {
            info: ALL_CARDS[2],
            color: CardColor.BLUE,
            arrows: [CardDirection.NE, CardDirection.E, CardDirection.SE],
          },
          {
            info: ALL_CARDS[3],
            color: CardColor.BLUE,
            arrows: [CardDirection.NE, CardDirection.E, CardDirection.SE],
          },
        ],
        [],
        [],
        [],
      ]} />
    </>
  );
}

export default App;
