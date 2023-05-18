import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import styles from './Item.module.scss';
import PageHeader from '../../components/PageHeader';
import NotifyMess from '../../components/NotifyMess';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import BulkAction from '../../layouts/components/BulkAction';
import StatusFilter from '../../layouts/components/StatusFilter';
import ListItems from '../../layouts/components/ListItems';
import Search from '../../layouts/components/Search';
import { Statistics, PageInfo, Pagination } from '../../layouts/components/Pagination';

const cx = classNames.bind(styles);

const Item = () => {
    const optionsAction = [
        { value: '', name: 'Bulk Action' },
        { value: 'adm/api/item/change-status/active', name: 'Active' },
        { value: 'adm/api/item/change-status/inactive', name: 'Inactive' },
        { value: 'adm/api/item/save-ordering', name: 'Change Ordering' },
        { value: 'adm/api/item/delete', name: 'Delete' },
    ];
    const tableHeading = [
        {
            id: '#',
            name: 'Name',
            status: 'Status',
            ordering: 'Ordering',
            action: 'Action',
        },
    ];
    return (
        <div className={cx('content')}>
            <PageHeader>Item Management</PageHeader>
            <div className={cx('panel-group')}>
                <Panel
                    headingChildren={
                        <PanelHeading>
                            Search & Filter
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </PanelHeading>
                    }
                    bodyChildren={
                        <PanelBody>
                            <div className={cx('search-filter')}>
                                <div className={cx('status-filter')}>
                                    <StatusFilter />
                                </div>
                                <div className={cx('search')}>
                                    <Search />
                                </div>
                            </div>
                        </PanelBody>
                    }
                ></Panel>
                <Panel
                    headingChildren={<PanelHeading>List Items</PanelHeading>}
                    bodyChildren={
                        <PanelBody>
                            <div className={cx('action')}>
                                <div className={cx('bulk-action')}>
                                    <BulkAction name="action" options={optionsAction} className="options" rounded />
                                </div>
                                <div className={cx('add-action')}>
                                    <Button to="/adm/form" color="warning" size="md" rounded>
                                        Add New
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('table-list-items')}>
                                <ListItems headingData={tableHeading} />
                            </div>
                        </PanelBody>
                    }
                ></Panel>
                <Panel
                    headingChildren={
                        <PanelHeading>
                            Pagination{' '}
                            <div className={cx('item-right')}>
                                <Statistics />
                            </div>
                        </PanelHeading>
                    }
                    bodyChildren={
                        <PanelBody>
                            <div className={cx('pagination-content')}>
                                <div className={cx('page-info')}>
                                    <PageInfo />
                                </div>
                                <div className={cx('page-number')}>
                                    <Pagination />
                                </div>
                            </div>
                        </PanelBody>
                    }
                ></Panel>
            </div>
        </div>
    );
};

export default Item;
