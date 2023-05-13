import React from 'react';

import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faGear, faSignOut, faDashboard } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';

import List from '../../../components/List';
import Button from '../../../components/Button';

const cx = classnames.bind(styles);

const Sidebar = () => {
    const itemSide = [
        {
            className: 'sidebar-item',
            comp: (
                <Button to="adm">
                    <FontAwesomeIcon icon={faDashboard} className="fa-fw" />
                    Dashboard
                </Button>
            ),
        },
        {
            className: 'sidebar-item',
            comp: (
                <Button to="adm/item">
                    <FontAwesomeIcon icon={faDashboard} className="fa-fw" />
                    CRUD
                </Button>
            ),
        },
    ];
    return (
        <div className={cx('sidebar')}>
            <List items={itemSide}></List>
        </div>
    );
};

export default Sidebar;
