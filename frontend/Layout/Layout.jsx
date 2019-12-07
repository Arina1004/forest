import React from 'react';
import './Layout.scss';
import PlayersPanel from '../PlayersPanel/PlayersPanel.jsx';
import Field from '../Field/Field';

import {getEnv} from '../../engine/index';

const Layout = () => {
  const [it, setIt] = React.useState(0);
    const environment =getEnv();
    console.log("");
    return <div>
        <div className="layout-root">
            <Field it={it} content={environment.getState().field} />
            <PlayersPanel it={it} cards={environment.getState().players} />
        </div>
        <div className="layout-button-root">
            <button className="layout-button" onClick={() => {
              environment.step();
              setIt(it+1);
              }}>Step</button>
        </div>
    </div>
};

export default Layout;
