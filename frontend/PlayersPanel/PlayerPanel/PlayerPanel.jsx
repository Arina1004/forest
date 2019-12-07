import * as React from 'react';
import './PlayerPanel.scss';

const PlayerPanel = ({ card }) => (
    <div className="playerPanel-root">
        {console.log(card)}
        <h1 className="playerPanel-title">{`PLAYER № ${card.player}`}</h1>
        <div className="resourses">
            <h2 className="playerPanel-title-h2">SHOP</h2>
            <div className="resources-shop">
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-b`} />
                    <div className="shop-num">x{card.resources.sprout}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-s`} />
                    <div className="shop-num">x{card.resources.small}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-m`} />
                    <div className="shop-num">x{card.resources.mean}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-l`} />
                    <div className="shop-num">x{card.resources.large}</div>
                </div>
            </div>
        </div>
        <div className="resourses">
            <h2 className="playerPanel-title-h2">GREENHOUSE</h2>
            <div className="resources-shop">
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-b`} />
                    <div className="shop-num">x{card.resources.sprout}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-s`} />
                    <div className="shop-num">x{card.resources.small}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-m`} />
                    <div className="shop-num">x{card.resources.mean}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.player}-l`} />
                    <div className="shop-num">x{card.resources.large}</div>
                </div>
            </div>
        </div>
        <div>
            <h2 className="playerPanel-title-h2">
                SUN: {card.sun} POINTS: {card.points}
            </h2>
        </div>
    </div>
);

export default PlayerPanel;
