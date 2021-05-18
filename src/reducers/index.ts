import { GameAction } from '../actions';
import { Card, GameStage, GameState } from '../types';
import { START_NEW_GAME } from '../constants';
import { DeckType } from '../components/Card';

/**
 * Returns a random number in the provided range, inclusive of the extremes.
 */
function randomRange(min: number, max: number): number {
    return Math.random() * (max + 1 - min) + min;
}

/**
 * Create the 40 cards for the main deck (4 sets of 1-10)
 */
function createMainDeck(): Card[] {
    let cards: Card[] = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
            cards.push({
                type: DeckType.MAIN_DECK,
                value: j+1
            });
        }
    }

    return cards;
}

/**
 * Create a totally-randomized deck of positive, negative, and reversible cards.
 * @param numCards Number of cards in the deck.
 * @returns An array of side-deck cards
 */
function createSideDeck(numCards: number = 20): Card[] {
    let cards: Card[] = [];
    for (let i = 0; i < numCards; i++) {
        let typeRoll = randomRange(0, 2);
        let card: Card = {
            type: DeckType.SIDE_DECK,
            value: randomRange(1, 6)
        };

        switch (typeRoll) {
            // Positive
            case 0:
            break;

            // Negative
            case 1: {
                card.value *= -1;
            }
            break;

            // Reversible
            case 2: {
                // Mod into either 0 or 1.
                card.value = (card.value % 2) + 1;
                card.reversible = true;
            }
            break;
        }
        cards.push(card);
    }

    return cards;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case START_NEW_GAME: {
            return {
                ...state,
                gameStage: GameStage.CHOOSE_DECK,
                deckSet: {
                    mainDeck: state.deckSet.mainDeck.length === 0 ? state.deckSet.mainDeck : createMainDeck(),
                    playerDeck: createSideDeck(),
                    opponentDeck: createSideDeck()
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const defaultState: GameState = {
    gameStage: GameStage.CHOOSE_DECK,
    deckSet: {
        playerDeck: [],
        opponentDeck: [],
        mainDeck: []
    }
};
