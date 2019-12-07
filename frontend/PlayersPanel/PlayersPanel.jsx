import * as React from 'react';
import PlayerPanel from './PlayerPanel/PlayerPanel';
import './PlayersPanel.scss';

const PlayersPanel = ({ cards }) => (
    <div className="playersPanel-root">
        {cards.map(card => (
            <PlayerPanel card={card} />
        ))}
    </div>
);

export default PlayersPanel;
