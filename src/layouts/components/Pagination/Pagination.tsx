import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';
import Button from '../../../components/Button/Button';
import { ItemContext } from '../../../Context/ItemProvider';
import List from '../../../components/List';

const cx = classNames.bind(styles);

interface IPage {
    currPage: number;
    from: number;
    itemsPerPage: number;
    pageRange: number;
    to: number;
    totalItems: number;
    totalPage: number;
    min: number;
    max: number;
}

interface IPageContext {
    pagination: IPage | null;
    updateApiParam: (params: { page?: number | string }) => void;
}

const Pagination = () => {
    const [page, setPage] = useState<IPage | null>(null);
    const { pagination, updateApiParam } = useContext<IPageContext>(ItemContext);
    let isDisabled = false;
    let color = '';
    useEffect(() => {
        setPage(pagination);
    }, [pagination]);

    const pageGroup: (number | string)[] = [];

    const handleOnclick = (pageNumber: string | number) => {
        let currentPage = pageNumber;
        if (pageNumber === '«' && page) currentPage = page.currPage - 1;
        if (pageNumber === '»' && page) currentPage = page.currPage + 1;
        updateApiParam({ page: currentPage });
    };

    if (page)
        for (let i = page.min - 1; i <= page?.max + 1; i++) {
            let pageNumber: number | string = i;

            if (pageNumber === page.min - 1) pageNumber = '«';
            if (pageNumber === page?.max + 1) pageNumber = '»';
            pageGroup.push(pageNumber);
        }

    return (
        <ul className={cx('list-flex')}>
            {!page || page.totalPage <= 1
                ? ''
                : pageGroup.map((pageNumber: number | string, i: number) => {
                      if (
                          (page?.currPage === 1 && pageNumber === '«') ||
                          (page?.currPage === page?.totalPage && pageNumber === '»')
                      )
                          isDisabled = true;
                      else isDisabled = false;
                      if (page?.currPage === pageNumber) color = 'primary';
                      else color = '';

                      return (
                          <li key={i}>
                              <Button
                                  color={color}
                                  size="md"
                                  rounded
                                  onClick={() => handleOnclick(pageNumber)}
                                  disabled={isDisabled}
                              >
                                  {pageNumber}
                              </Button>
                          </li>
                      );
                  })}
        </ul>
    );
};

const PageInfo = () => {
    const { pagination } = useContext<IPageContext>(ItemContext);
    return (
        <>
            <p className={cx('text')}>
                Number of elements on the page: <span>{pagination?.itemsPerPage}</span>
            </p>
            <p className={cx('text')}>
                Showing <span>{pagination?.from}</span> to <span>{pagination?.to}</span> of{' '}
                <span>{pagination?.totalItems}</span> entries
            </p>
        </>
    );
};

const Statistics = () => {
    const { pagination } = useContext<IPageContext>(ItemContext);
    return (
        <>
            <Button isButton={false} size="sm" color="danger">
                Total Entries: {pagination?.totalItems}
            </Button>
            <Button isButton={false} size="sm" color="primary">
                Total Pages: {pagination?.totalPage}
            </Button>
        </>
    );
};

export { Statistics, PageInfo, Pagination };
