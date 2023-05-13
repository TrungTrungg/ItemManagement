import React, { useContext, useEffect, useState, useMemo } from 'react';
import classnames from 'classnames/bind';

import { ItemContext } from '../../../Context/ItemProvider';

import styles from './StatusFilter.module.scss';

import httpRequest from '../../ulties/httpRequest';

import Button from '../../../components/Button/Button';

const cx = classnames.bind(styles);

interface IStt {
    name: string;
    count: number;
    style: string;
}

const StatusFilter = () => {
    const [filter, setFilter] = useState<IStt[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { sttFilter } = useContext(ItemContext);
    return (
        <>
            {!sttFilter ? (
                <div>Loading...</div>
            ) : (
                sttFilter.map((sttItem: IStt, i: number) => {
                    return (
                        <Button key={i} color={sttItem.style} size="md" rounded to={`/adm/item/${sttItem.name}`}>
                            {`${sttItem.name} (${sttItem.count})`}
                        </Button>
                    );
                })
            )}
        </>
    );
};

export default StatusFilter;
