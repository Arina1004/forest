import React from 'react';
import classNames from 'classnames';
import './Tree.scss';

const Tree = props => <div className={classNames('tree-root', `tree-${props.player}-${props.type}`)} />;

export default Tree;
