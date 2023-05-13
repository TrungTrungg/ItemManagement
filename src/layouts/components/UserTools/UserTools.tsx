import React from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import styles from './UserTools.module.scss';

import List from '../../../components/List';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

const UserTools = () => {
    const itemsDrop = [
        {
            className: 'tool-item',
            comp: (
                <Button to="#">
                    <FontAwesomeIcon icon={faUser} className="fa-fw" />
                    User Profile
                </Button>
            ),
        },
        {
            className: 'tool-item',
            comp: (
                <Button to="#">
                    <FontAwesomeIcon icon={faGear} className="fa-fw" />
                    Setting
                </Button>
            ),
        },
        { className: 'divider' },
        {
            className: 'tool-item',
            comp: (
                <Button to="#">
                    <FontAwesomeIcon icon={faSignOut} className="fa-fw" />
                    Logout
                </Button>
            ),
        },
    ];

    return (
        <ul className={cx('user-tools')}>
            <li className={cx('tool-extend')}>
                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                <FontAwesomeIcon icon={faCaretDown} />
                <List items={itemsDrop} className={cx('tools')} />
            </li>
        </ul>
    );
};

export default UserTools;
