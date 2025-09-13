const IMAGE_WIDTH = 2048;
const IMAGE_HEIGHT = 2048;

const getSpriteStyle = (index: number): any => ({
  backgroundImage: "url(assets/card_00.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: `${Math.floor((180 * IMAGE_WIDTH) / 168)}px ${Math.floor(
    (224 * IMAGE_HEIGHT) / 208
  )}px`,
  width: "180px",
  height: "224px",
  position: "absolute",
  top: "12px",
  left: "12px",
  zIndex: 0,
  backgroundPosition: `${-182 * (index % 12)}px ${
    -226 * Math.floor(index / 12)
  }px`,
});

type CardSpriteProps = {
    index: number;
};

const CardSprite = ({ index }: CardSpriteProps) => (
    <div style={getSpriteStyle(index)} />
);

export default CardSprite;
