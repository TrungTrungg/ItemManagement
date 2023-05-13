import React, { Children, ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classnames.bind(styles);

interface PanelProps {
    headingChildren: ReactNode;
    bodyChildren: ReactNode;
}

interface PanelChildProps {
    children: ReactNode;
}

const Panel = ({ headingChildren, bodyChildren }: PanelProps) => {
    return (
        <div className={cx('panel')}>
            {headingChildren}
            {bodyChildren}
        </div>
    );
};

const PanelHeading = ({ children }: PanelChildProps) => {
    return <div className={cx('panel-heading')}>{children}</div>;
};

const PanelBody = ({ children }: PanelChildProps) => {
    return <div className={cx('panel-body')}>{children}</div>;
};

export { Panel, PanelHeading, PanelBody };
