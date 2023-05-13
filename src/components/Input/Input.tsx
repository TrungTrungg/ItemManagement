import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface Props {
    className?: any;
    name?: string;
    textArea?: Object;
    center?: Object;
    rounded?: Object;
    bold?: Object;
    type: string;
}

type InputProps = Props & Record<string, unknown>;

const Input = ({ className, name, textArea, rounded, bold, center, type, ...passProps }: InputProps) => {
    const props = {
        ...passProps,
    };

    const classes = cx({ [className]: className, textArea, rounded, center, bold });

    return <input className={classes} name={name} type={type} {...props} readOnly />;
};

export default Input;
