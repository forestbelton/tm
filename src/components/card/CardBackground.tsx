import { CardColor } from "../../types";

const baseBgStyle = {
  backgroundImage: "url(assets/card_mg.png)",
  width: "204px",
  height: "248px",
  position: "relative",
  overflow: "hidden",
};

const BG_STYLES: Record<CardColor, any> = {
  [CardColor.BLUE]: {
    ...baseBgStyle,
    backgroundPosition: "-72px -1082px",
  },
  [CardColor.RED]: {
    ...baseBgStyle,
    backgroundPosition: "-206px -1767px",
  },
};

type CardBackgroundProps = {
    children: React.ReactNode;
    color: CardColor;
};

const CardBackground = ({ children, color }: CardBackgroundProps) => (
    <div style={BG_STYLES[color]}>
        {children}
    </div>
);

export default CardBackground;
