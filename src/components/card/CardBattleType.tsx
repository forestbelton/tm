import { BattleType } from "../../types";

const baseTypeStyle = {
  backgroundImage: "url(assets/card_mg.png)",
  width: "34px",
  height: "33px",
};

const TYPE_STYLES: Record<BattleType, any> = {
    [BattleType.PHYSICAL]: {
        ...baseTypeStyle,
        backgroundPosition: "-1794px -2011px",
    },
    [BattleType.MAGICAL]: {
        ...baseTypeStyle,
        backgroundPosition: "-852px -1152px",
    },
    [BattleType.FLEXIBLE]: {
        ...baseTypeStyle,
        backgroundPosition: "-1794px -1975px",
    },
    [BattleType.ASSAULT]: {
                ...baseTypeStyle,
        backgroundPosition: "-924px -1196px",
    },
};

type CardBattleTypeProps = {
  type: BattleType;
};

const CardBattleType = ({ type }: CardBattleTypeProps) => (
  <div style={TYPE_STYLES[type]} />
);

export default CardBattleType;
