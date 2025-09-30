export enum CardColor {
    RED,
    BLUE
}

export enum CardDirection {
    N,
    NE,
    E,
    SE,
    S,
    SW,
    W,
    NW,
}

export enum BattleType {
    PHYSICAL,
    MAGICAL,
    FLEXIBLE,
    ASSAULT,
}

export interface CardInfo {
    index: number;
    name: string;
    power: number;
    type: BattleType;
    physDefense: number;
    magicDefense: number;
}

export interface Card {
    info: CardInfo;
    color: CardColor;
    arrows: CardDirection[];
}

export type BoardCell = Card | "block" | null;

export interface Game {
    board: BoardCell[][];
    hands: Card[][];
    turn: number;
}
