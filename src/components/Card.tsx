import { BattleType, type Card as CardType } from "../types";
import CardArrow from "./card/CardArrow";
import CardBackground from "./card/CardBackground";
import CardBattleType from "./card/CardBattleType";
import CardBorder from "./card/CardBorder";
import CardNumber from "./card/CardNumber";
import CardSprite from "./card/CardSprite";

type CardProps = {
  card: CardType;
};

const Card = ({ card }: CardProps) => (
  <CardBackground color={card.color}>
    <CardSprite index={card.info.index} />
    <CardBorder color={card.color} />
    {card.arrows.map((dir) => (
      <CardArrow key={dir} dir={dir} />
    ))}
    <div
      style={{
        position: "absolute",
        bottom: 30,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardNumber value={card.info.power} />
      <CardBattleType type={card.info.type} />
      <CardNumber value={card.info.physDefense} />
      <CardNumber value={card.info.magicDefense} />
    </div>
  </CardBackground>
);

export default Card;
