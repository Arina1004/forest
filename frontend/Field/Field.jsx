import * as React from 'react';
import Cell from './Cell/Cell';

import './Field.scss';

const Field = content => (
    <div className="field-root">
        {content.content.map(row => row.map(cell => <Cell player={cell.player} type={cell.type} coord={cell.coord} />))}
    </div>
);

export default Field;
