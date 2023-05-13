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
import BulkAction from '../../components/BulkAction';
import StatusFilter from '../../layouts/components/StatusFilter';
import ListItems from '../../layouts/components/ListItems';

const cx = classNames.bind(styles);

const Item = () => {
    const optionsAction = [
        { value: '', name: 'Bulk Action' },
        { value: 'adm/item/change-status/active', name: 'Active' },
        { value: 'adm/item/change-status/inactive', name: 'Inactive' },
        { value: 'adm/item/save-ordering', name: 'Change Ordering' },
        { value: 'adm/item/delete', name: 'Delete' },
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
                                    <Form action="" method="GET">
                                        <Input type="text" name="search" textArea rounded placeholder="Search for..." />
                                        <Button to="/" color="primary" size="md">
                                            Search
                                        </Button>
                                        <Button to="/" color="success" size="md">
                                            Clear
                                        </Button>
                                    </Form>
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
                                    <Button color="primary" size="md" rounded disable>
                                        Apply
                                    </Button>
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
            </div>
        </div>
    );
};

export default Item;
