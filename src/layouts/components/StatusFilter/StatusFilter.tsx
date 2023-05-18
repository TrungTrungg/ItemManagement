import React, { useContext, useEffect, useState, useMemo } from 'react';
import classnames from 'classnames/bind';

import { ItemContext } from '../../../Context/ItemProvider';

import styles from './StatusFilter.module.scss';

import httpRequest from '../../../ulties/httpRequest';

import Button from '../../../components/Button/Button';

const cx = classnames.bind(styles);

interface IStt {
    name: string;
    count: number;
    style: string;
}

interface ISttFilter {
    sttFilter: IStt[] | null;
    updateApiEndpoint: (endPoint: string) => void;
    updateApiParam: (params: { page?: number | string }) => void;
}

const StatusFilter = () => {
    const [filter, setFilter] = useState<IStt[] | null>(null);
    const { sttFilter, updateApiEndpoint, updateApiParam } = useContext<ISttFilter>(ItemContext);

    useEffect(() => {
        setFilter(sttFilter);
    }, [sttFilter]);

    const handleOnclick = (status: string) => {
        updateApiEndpoint(`adm/api/item/status/${status}`);
        updateApiParam({});
    };

    return (
        <>
            {!filter ? (
                <div>Loading...</div>
            ) : (
                filter.map((sttItem: IStt, i: number) => {
                    const status = sttItem.name.toLowerCase();

                    return (
                        <Button key={i} color={sttItem.style} size="md" rounded onClick={() => handleOnclick(status)}>
                            {`${sttItem.name} (${sttItem.count})`}
                        </Button>
                    );
                })
            )}
        </>
    );
};

export default StatusFilter;
