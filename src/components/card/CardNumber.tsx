const baseNumberStyle = {
  backgroundImage: "url(assets/card_mg.png)",
};

const NUMBER_STYLES: any[] = [
  [1068, 1124],
  [1038, 1196, 23],
  [1032, 1160],
  [1032, 1124, 33],
  [996, 1196, 33],
  [996, 1160],
  [998, 1123, 30, 34],
  [961, 1196, 32],
  [960, 1160],
  [962, 1124, 31],
  [924, 1196],
  [924, 1160],
  [924, 1124],
  [888, 1188],
  [888, 1152],
  [853, 1188, 33],
].map((coords) => ({
  ...baseNumberStyle,
  width: `${coords[2] || 34}px`,
  height: `${coords[3] || 33}px`,
  backgroundPosition: `-${coords[0]}px -${coords[1]}px`,
}));

type CardNumberProps = {
  value: number;
};

const CardNumber = ({ value }: CardNumberProps) => (
  <div style={NUMBER_STYLES[value]} />
);

export default CardNumber;
