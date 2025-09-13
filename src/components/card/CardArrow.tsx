import { CardDirection } from "../../types";

const baseArrowStyle = {
  backgroundImage: "url(assets/card_mg.png)",
  position: "absolute",
};

const ARROW_STYLES: Record<CardDirection, any> = {
  [CardDirection.N]: {
    ...baseArrowStyle,
    width: "35px",
    height: "22px",
    backgroundPosition: "-924px -1082px",
    top: "1px",
    left: "84px",
  },
  [CardDirection.NE]: {
    ...baseArrowStyle,
    width: "28px",
    height: "29px",
    backgroundPosition: "-1702px -1892px",
    top: "8px",
    right: "7px",
  },
  [CardDirection.E]: {
    ...baseArrowStyle,
    width: "22px",
    height: "35px",
    backgroundPosition: "-1748px -1895px",
    top: "106px",
    right: "1px",
  },
  [CardDirection.SE]: {
    ...baseArrowStyle,
    width: "28px",
    height: "29px",
    backgroundPosition: "-1702px -1944px",
    bottom: "7px",
    right: "7px",
  },
  [CardDirection.S]: {
    ...baseArrowStyle,
    width: "35px",
    height: "22px",
    backgroundPosition: "-1775px -1950px",
    bottom: "1px",
    left: "84px",
  },
  [CardDirection.SW]: {
    ...baseArrowStyle,
    width: "27px",
    height: "28px",
    backgroundPosition: "-1753px -1985px",
    bottom: "8px",
    left: "8px",
  },
  [CardDirection.W]: {
    ...baseArrowStyle,
    width: "22px",
    height: "35px",
    backgroundPosition: "-1772px -1895px",
    top: "106px",
    left: "1px",
  },
  [CardDirection.NW]: {
    ...baseArrowStyle,
    width: "27px",
    height: "28px",
    backgroundPosition: "-1731px -1933px",
    top: "8px",
    left: "8px",
  },
};

type CardArrowProps = {
    dir: CardDirection;
}

const CardArrow = ({ dir }: CardArrowProps) => (
    <div style={ARROW_STYLES[dir]} />
);

export default CardArrow;
