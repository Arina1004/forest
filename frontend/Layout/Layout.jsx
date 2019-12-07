import React from 'react';
import './Layout.scss';
import PlayersPanel from '../PlayersPanel/PlayersPanel.jsx';
import Field from '../Field/Field';

import {environment} from '../../engine/index';

const Layout = () => {
    return <div>
        <div className="layout-root">
            <Field content={environment.getState().field} />
            {/* <PlayersPanel cards={environment.getState().players} /> */}
        </div>
        <div className="layout-button-root">
            <button className="layout-button" onClick={() => environment.step()}>Step</button>
        </div>
    </div>
};

export default Layout;
