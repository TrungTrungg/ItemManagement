import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface Props {
    className?: any;
    name?: string;
    textarea?: Object;
    center?: Object;
    rounded?: Object;
    bold?: Object;
    type: string;
    placeholder?: string;
    value?: any;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
type InputProps = Props & Record<string, unknown>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        type,
        center,
        name,
        bold,
        textarea,
        rounded,
        placeholder,
        value,
        checked = false,
        onChange,
    } = props;

    const classes = cx({ [className]: className, textarea, rounded, center, bold });

    return (
        <input
            className={classes}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            checked={checked}
        />
    );
});

export default Input;
