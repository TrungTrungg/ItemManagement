import React, { Children, ElementType, ReactElement, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
    to?: string;
    href?: string;
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default' | string;
    size?: 'sm' | 'lg' | 'md';
    rounded?: Object;
    disable?: Object;
    isButton?: boolean;
    className?: any;
    children?: ReactNode;
}
type ButtonProps = Props & Record<string, unknown>;

const Button = ({
    to,
    href,
    color,
    size,
    rounded,
    disable,
    isButton = true,
    children,
    className,
    ...passProps
}: ButtonProps) => {
    let Component: any = 'button';
    const props: Props = {
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    } else if (!isButton) Component = 'span';

    const classes = cx({ [className]: className, disable, rounded }, color, size);

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

export default Button;
