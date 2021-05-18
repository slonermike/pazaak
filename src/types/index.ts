import { DeckType } from "../components/Card";

export enum GameStage {
    CHOOSE_DECK,
    GAMEPLAY,
    GAME_OVER
}

export interface Card {
    type: DeckType;
    value: number;
    reversible?: boolean;
}

export interface DeckSet {
    playerDeck: Card[];
    opponentDeck: Card[];
    mainDeck: Card[];
}

export interface GameState {
    gameStage: GameStage;
    deckSet: DeckSet;
}