import React, { ReactNode } from 'react';
import clasNames from 'classnames/bind';

import styles from './List.module.scss';

const cx = clasNames.bind(styles);

type ItemProps = {
    className: any;
    comp?: any;
};

interface Props {
    className?: any;
    children?: ReactNode;
    items: ItemProps[];
}

type ListProps = Props & Record<string, unknown>;

const List = ({ className, items, children, ...passProps }: ListProps) => {
    const props = {
        ...passProps,
    };
    const classes = cx({ [className]: className });
    return (
        <ul className={className} {...props}>
            {items.map((item, i) => {
                return (
                    <li key={i} className={cx(item.className)}>
                        {item.comp}
                        {children}
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
