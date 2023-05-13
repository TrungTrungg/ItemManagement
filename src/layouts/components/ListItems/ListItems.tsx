import { ReactNode, useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './ListItems.module.scss';
import { Table, TableHeading, TableBody } from '../../../components/Table';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { fetchData } from '../../../service/getData';
import { ItemContext } from '../../../Context/ItemProvider';

const cx = classNames.bind(styles);

interface IItem {
    id: string;
    name: string;
    status: string;
    ordering: number;
}

interface HeadingProps {
    id: string;
    name: string;
    status: string;
    ordering: string;
    action: string;
}

interface Props {
    children?: ReactNode;
    headingData: HeadingProps[];
}

type ListItemProps = Props & Record<string, unknown>;

const ListItems = ({ headingData }: ListItemProps) => {
    const { items } = useContext(ItemContext);
    return (
        <Table
            headingChildren={
                <TableHeading>
                    {headingData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <th>
                                    <Input type="checkbox" value="" />
                                </th>
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.status}</th>
                                <th className={cx('col-ordering')}>{data.ordering}</th>
                                <th>{data.action}</th>
                            </tr>
                        );
                    })}
                </TableHeading>
            }
            bodyChildren={
                <TableBody>
                    {!items ? (
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    ) : (
                        items.map((item: IItem, i: number) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <Input type="checkbox" value="" />
                                    </td>
                                    <td>{++i}</td>
                                    <td className={cx('col-name')}>{item.name}</td>
                                    <td className={cx('col-status')}>
                                        <Button color="success" size="sm" rounded>
                                            {item.status}
                                        </Button>
                                    </td>
                                    <td>
                                        <Input type="number" value={item.ordering} rounded center bold />
                                    </td>
                                    <td>
                                        <Button color="warning" size="md" rounded>
                                            Edit
                                        </Button>
                                        <Button color="danger" size="md" rounded>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </TableBody>
            }
        />
    );
};

export default ListItems;
