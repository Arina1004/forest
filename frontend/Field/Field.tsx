import * as React from 'react';
import { Root } from './Field.styled';
import Cell from './Cell/Cell';

const Field = content => (
    <Root>
        {content.map(row => {
            row.map(cell => <Cell player={cell.player} type={cell.type} coord={cell.coord} />);
        })}
    </Root>
);

export default Field;
