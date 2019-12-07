import * as React from 'react';
import Cell from './Cell/Cell';

import './Field.scss';

const Field = ({content}) => (
    <div className="field-root">
        {console.log(content.content)}
        {content.content.map(row => row.map(cell => <Cell player={cell.player} type={cell.type} coord={[cell.x, cell.y]} />))}
    </div>
);

export default Field;
