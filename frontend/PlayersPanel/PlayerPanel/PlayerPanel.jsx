import * as React from 'react';
import './PlayerPanel.scss';

const PlayerPanel = ({ card }) => (
    <div className="playerPanel-root">
        {console.log(card)}
        <h1 className="playerPanel-title">{`PLAYER № ${card.id}`}</h1>
        <div className="resourses">
            <h2 className="playerPanel-title-h2">SHOP</h2>
            <div className="resources-shop">
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-b`} />
                    <div className="shop-num">x{card.store.seeds}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-s`} />
                    <div className="shop-num">x{card.store.small}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-m`} />
                    <div className="shop-num">x{card.store.medium}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-l`} />
                    <div className="shop-num">x{card.store.large}</div>
                </div>
            </div>
        </div>
        <div className="resourses">
            <h2 className="playerPanel-title-h2">GREENHOUSE</h2>
            <div className="resources-shop">
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-b`} />
                    <div className="shop-num">x{card.inventory.seeds}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-s`} />
                    <div className="shop-num">x{card.inventory.small}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-m`} />
                    <div className="shop-num">x{card.inventory.medium}</div>
                </div>
                <div className="shop-item">
                    <div className={`shop-title-${card.id}-l`} />
                    <div className="shop-num">x{card.inventory.large}</div>
                </div>
            </div>
        </div>
        <div>
            <h2 className="playerPanel-title-h2">
                SUN: {card.energy} POINTS: {card.points}
            </h2>
        </div>
    </div>
);

export default PlayerPanel;
