import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './BulkAction.module.scss';

const cx = classNames.bind(styles);

interface OptionsProps {
    value?: string;
    name: string;
}

interface BulkActionProps {
    options: OptionsProps[];
    name: string;
    className?: any;
    rounded?: Object;
}

const BulkAction = ({ options, name, className, rounded }: BulkActionProps) => {
    const classes = cx({ [className]: className, rounded });

    return (
        <select name={name} className={classes}>
            {options.map((option, i) => {
                return (
                    <option key={i} value={option.value}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
};

export default BulkAction;
