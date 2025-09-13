import { BattleType, type CardInfo } from "./types";

const BATTLE_TYPE_CHARS: Record<string, BattleType> = {
  P: BattleType.PHYSICAL,
  M: BattleType.MAGICAL,
  X: BattleType.FLEXIBLE,
  A: BattleType.ASSAULT,
};

const parseCard = (raw: string[], index: number): CardInfo => {
  const [name, stats] = raw;
  const match = /^([A-F0-9])([PMXA])([A-F0-9])([A-F0-9])$/.exec(stats);
  if (match === null) {
    throw new Error(`invalid stats for "${name}": "${stats}"`);
  }
  return {
    index,
    name,
    power: parseInt(match[1], 16),
    type: BATTLE_TYPE_CHARS[match[2]],
    physDefense: parseInt(match[3], 16),
    magicDefense: parseInt(match[4], 16),
  };
};

export const ALL_CARDS = [
  // 1-10
  ["Goblin", "0P00"],
  ["Fang", "0P00"],
  ["Skeleton", "0P00"],
  ["Flan", "0M01"],
  ["Zaghnol", "0P00"],
  ["Lizard Man", "0P00"],
  ["Zombie", "1M10"],
  ["Bomb", "1M01"],
  ["Ironite", "1P10"],
  ["Sahagin", "1P10"],
  // 11-20
  ["Yeti", "1M01"],
  ["Mimic", "1M11"],
  ["Wyerd", "1M01"],
  ["Mandragora", "1M02"],
  ["Crawler", "2P20"],
  ["Sand Scorpion", "2P20"],
  ["Nymph", "2M02"],
  ["Sand Golem", "2P20"],
  ["Zuu", "2P02"],
  ["Dragonfly", "2P21"],
  // 21-30
  ["Carrion Worm", "2M11"],
  ["Cerberus", "2P20"],
  ["Antlion", "3P21"],
  ["Cactuar", "3PC0"],
  ["Gimme Cat", "3M11"],
  ["Ragtimer", "3M21"],
  ["Hedgehog Pie", "3M12"],
  ["Ralvuimago", "3P40"],
  ["Ochu", "3P21"],
  ["Troll", "3P32"],
  // 31-40
  ["Blazer Beetle", "4P51"],
  ["Abomination", "4P33"],
  ["Zemzelett", "4M15"],
  ["Stroper", "4P30"],
  ["Tantarian", "4M22"],
  ["Grand Dragon", "4P44"],
  ["Feather Circle", "4M22"],
  ["Hecteyes", "4M04"],
  ["Ogre", "5P41"],
  ["Armstrong", "5M24"],
  // 41-50
  ["Ash", "5M33"],
  ["Wraith", "5M40"],
  ["Gargoyle", "5M32"],
  ["Vepal", "5M33"],
  ["Grimlock", "5M23"],
  ["Tonberry", "2P33"],
  ["Veteran", "5M19"],
  ["Garuda", "6M41"],
  ["Marlboro", "5M36"],
  ["Mover", "6MF0"],
  // 51-60
  ["Abadon", "7M62"],
  ["Behemoth", "BP46"],
  ["Iron Man", "CP60"],
  ["Nova Dragon", "EP7C"],
  ["Ozma", "DM0C"],
  ["Hades", "FMC1"],
  ["Holy", "8M23"],
  ["Meteor", "BMA0"],
  ["Flare", "CM00"],
  ["Shiva", "5M05"],
  // 61-70
  ["Ifrit", "6M90"],
  ["Ramuh", "4M16"],
  ["Atomos", "4M66"],
  ["Odin", "CM84"],
  ["Leviathan", "BM61"],
  ["Bahamut", "CM85"],
  ["Ark", "EM55"],
  ["Fenrir", "8M21"],
  ["Madeen", "AM16"],
  ["Alexander", "DMB5"],
  // 71-80
  ["Excalibur II", "FPB0"],
  ["Ultima Weapon", "FP16"],
  ["Masamune", "CPB3"],
  ["Elixir", "6M66"],
  ["Dark Matter", "CM3C"],
  ["Ribbon", "0MCF"],
  ["Tiger Racket", "0P01"],
  ["Save the Queen", "6P30"],
  ["Genji", "0P6A"],
  ["Mythril Sword", "1P00"],
  // 81-90
  ["Blue Narciss", "8P81"],
  ["Hilda Garde 3", "6P30"],
  ["Invincible", "BP8C"],
  ["Cargo Ship", "2P60"],
  ["Hilda Garde 1", "6P40"],
  ["Red Rose", "8P18"],
  ["Theater Ship", "1P61"],
  ["Viltgance", "EP81"],
  ["Chocobo", "0P00"],
  ["Fat Chocobo", "1P11"],
  // 91-100
  ["Mog", "1M00"],
  ["Frog", "0P00"],
  ["Oglop", "2P10"],
  ["Alexandria", "0PB6"],
  ["Lindblum", "0P6B"],
  ["Two Moons", "6M55"],
  ["Gargant", "2P03"],
  ["Namingway", "7M77"],
  ["Boco", "7P77"],
  ["Airship", "7P77"],
].map(parseCard);

if (ALL_CARDS.length !== 100) {
    throw new Error(`expected 100 cards, found ${ALL_CARDS.length}!`);
}