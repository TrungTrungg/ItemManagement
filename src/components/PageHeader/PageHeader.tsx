import React, { ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './PageHeader.module.scss';

const cx = classnames.bind(styles);

interface PageHeaderProps {
    children: ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
    return <h1 className={cx('page-title')}>{children}</h1>;
};

export default PageHeader;
