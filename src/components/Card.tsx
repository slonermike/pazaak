import React, { Component } from 'react';
import '../Card.css';

export enum DeckType {
    MAIN_DECK,
    SIDE_DECK
}

const CARD_TYPE_CLASSES = [
    'deck-main',
    'deck-side'
]

export interface CardProps {
    value: number;
    deck: DeckType;
    reversible?: boolean;
}

export default class Card extends Component<CardProps> {

    private getReversibleUnderlay() {
        return (
            <div className="underlay">
                <div className="top" />
                <div className="bottom" />
                <div className="left" />
                <div className="right" />
            </div>
        );
    }

    public render() {
        const { value, deck: type, reversible = false } = this.props;
        const cardStyles = ['card', CARD_TYPE_CLASSES[type]];
        reversible && cardStyles.push('reversible');
        value < 0 && cardStyles.push('negative');

        return (
            <div className={cardStyles.join(' ')}>
                { reversible ? this.getReversibleUnderlay() : <div className="underlay" /> }
                <div className="overlay" />
                <div className="value">{(reversible ? '±' : '') + value}</div>
            </div>
        );
    }
}