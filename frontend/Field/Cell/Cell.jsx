import React from 'react';
import classNames from 'classnames';
import Tree from './Tree/Tree';
import './Cell.scss';
import { CELL_CONTENT_EMPTY } from '../../../types/enums';

const Cell = item => (
    <div
        className={classNames('cell-root', {
            'cell-fertility-low':
                item.coord[0] === 0 || item.coord[0] === 5 || item.coord[1] === 0 || item.coord[1] === 5,
            'cell-fertility-mean':
                (item.coord[0] === 1 && item.coord[1] >= 1 && item.coord[1] <= 4) ||
                (item.coord[0] === 4 && item.coord[1] >= 1 && item.coord[1] <= 4) ||
                (item.coord[1] === 1 && item.coord[0] >= 1 && item.coord[0] <= 4) ||
                (item.coord[1] === 4 && item.coord[0] >= 1 && item.coord[0] <= 4),
            'cell-fertility-high': item.coord[0] >= 2 && item.coord[0] <= 3 && item.coord[1] >= 2 && item.coord[1] <= 3
        })}>
        {item.player !== -1 && <Tree player={item.player} type={item.type} />}
    </div>
);

export default Cell;
