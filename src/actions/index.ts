import * as constants from '../constants';

export type GameAction = StartNewGame;

export function startNewGame(): StartNewGame {
    return {
        type: constants.START_NEW_GAME
    }
}
export interface StartNewGame {
    type: constants.START_NEW_GAME
}