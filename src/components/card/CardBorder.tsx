import { CardColor } from "../../types";

const baseBorderStyle = {
  backgroundImage: "url(assets/card_mg.png)",
  width: "204px",
  height: "248px",
  position: "relative",
};

const BORDER_STYLES: Record<CardColor, any> = {
  [CardColor.BLUE]: {
    ...baseBorderStyle,
    backgroundPosition: "0px -1778px",
  },
  [CardColor.RED]: {
    ...baseBorderStyle,
    backgroundPosition: "-72px -1332px",
  },
};

type CardBorderProps = {
  color: CardColor;
};

const CardBorder = ({ color }: CardBorderProps) => (
  <div style={BORDER_STYLES[color]} />
);

export default CardBorder;
