import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

interface TableProps {
    headingChildren: ReactNode;
    bodyChildren: ReactNode;
}
interface TableChildProps {
    children: ReactNode;
}

const Table = ({ headingChildren, bodyChildren }: TableProps) => {
    return (
        <table className={cx('list-items')}>
            <thead>{headingChildren}</thead>
            <tbody>{bodyChildren}</tbody>
        </table>
    );
};
const TableHeading = ({ children }: TableChildProps) => {
    return <>{children}</>;
};

const TableBody = ({ children }: TableChildProps) => {
    return <>{children}</>;
};
export { Table, TableHeading, TableBody };
