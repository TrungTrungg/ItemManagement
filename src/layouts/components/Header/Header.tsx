import React from 'react';
import classnames from 'classnames/bind';

import styles from './Header.module.scss';
import Button from '../../../components/Button';

const cx = classnames.bind(styles);

const Header = () => {
    return (
        <div className={cx('brand')}>
            <Button to="/adm/item" className={cx('brand-link')} isButton={true}>
                NodeJS Training
            </Button>
        </div>
    );
};

export default Header;
