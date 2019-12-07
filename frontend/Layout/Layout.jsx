import React from 'react';
import content from '../Layout/data';
import cards from '../Layout/cards';
import './Layout.scss';
import PlayersPanel from '../PlayersPanel/PlayersPanel.jsx';
import Field from '../Field/Field';

const Layout = () => (
    <div>
        <div className="layout-root">
            <Field content={content} />
            <PlayersPanel cards={cards} />
        </div>
        <div className="layout-button-root">
            <button className="layout-button">Step</button>
        </div>
    </div>
);

export default Layout;
