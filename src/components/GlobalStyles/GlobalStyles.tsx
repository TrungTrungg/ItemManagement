import React, { ReactNode } from 'react';

import './GlobalStyles.module.scss';

interface GSProps {
    children: ReactNode;
}

const GlobalStyles = ({ children }: GSProps) => {
    return <>{children}</>;
};

export default GlobalStyles;
