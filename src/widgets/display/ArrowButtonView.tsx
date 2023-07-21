import React from 'react';

interface IArrowProps {
    onClick: () => void;
    direction: 'up' | 'down' | 'left' | 'right';
}

export function ArrowButtonView(props: IArrowProps) {
    return <i className={`arrow ${props.direction}`} onClick={props.onClick}></i>;
}
