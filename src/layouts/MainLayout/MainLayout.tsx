import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import styles from './MaiLayout.module.scss';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserTools from '../components/UserTools/UserTools';

const cx = classNames.bind(styles);

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
                <UserTools />
            </div>
            <div className={cx('page-wrapper')}>
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
