import * as React from 'react';
import Cell from './Cell/Cell';

import './Field.scss';

const Field = ({content, it}) => (
    <div className="field-root" data-it={it}>
        {console.log("field", content)}
        {content.content.map(row => row.map(cell => <Cell player={cell.player} type={cell.type} coord={[cell.x, cell.y]} />))}
    </div>
);

export default Field;
