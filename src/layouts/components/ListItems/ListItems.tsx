import { useState, useEffect, useContext, ChangeEvent, useRef } from 'react';
import classNames from 'classnames/bind';

import httpRequest from '../../../ulties/httpRequest';

import { ItemContext } from '../../../Context/ItemProvider';

import { HeadingProps, ItemContextProps, ListItemProps } from './types';
import { IItems } from '../../../types/itemType';

import styles from './listItems.module.scss';

import { Table, TableHeading, TableBody } from '../../../components/Table';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

const listItems = ({ headingData }: ListItemProps) => {
    const { items, updateStatus, setData, data } = useContext<ItemContextProps>(ItemContext);

    const [listItems, setListItems] = useState<IItems[] | null>(null);
    const [changeStatus, setChangeStatus] = useState<IItems | null>(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [listCheckbox, setListCheckbox] = useState<string[]>([]);
    const [listOrdering, setlistOrdering] = useState<(string | number)[]>([]);
    const [ordering, setOrdering] = useState<number>();

    const inputRef = useRef<HTMLInputElement>(null);

    // handle check/uncheck all checkbox
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const allCheckboxValue: string[] = [];
        if (listItems && isChecked === true)
            listItems.forEach((item, i) => {
                allCheckboxValue.push(item._id);
            });
        setListCheckbox(allCheckboxValue);
    }, [isChecked]);

    // handle check/uncheck each checkbox
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        const { value, checked } = e.target;
        const updatedListCheckbox = [...listCheckbox];

        if (checked) {
            updatedListCheckbox.push(value);
        } else {
            const index = updatedListCheckbox.indexOf(value);

            if (index !== -1) {
                updatedListCheckbox.splice(index, 1);
            }
        }
        setListCheckbox(updatedListCheckbox);
    };

    // set data for api
    useEffect(() => {
        setData({ cid: listCheckbox });
    }, [listCheckbox]);

    // handle change each item status
    const hanldeChangeStatus = async (id: string, status: string) => {
        const URL = `adm/api/item/change-status/${id}/${status}`;
        try {
            const res = await httpRequest.get(URL);
            setChangeStatus(res.data);
        } catch (error) {}
        updateStatus();
    };

    // handle change item ordering
    const handleChangeOrdering = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        const updateListOrdering = [...listOrdering];
        if (listItems)
            listItems.forEach((item, i) => {
                if (listCheckbox.includes(item._id)) updateListOrdering.push(e.target.value);
            });
        setlistOrdering(updateListOrdering);
    };

    useEffect(() => {
        console.log(listOrdering);
    }, [listOrdering]);

    // re-render when having  update
    useEffect(() => {
        if (items) {
            setListItems(items);
        }
    }, [items, changeStatus]);

    return (
        <Table
            headingChildren={
                <TableHeading>
                    {headingData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <th className={cx('col-checkbox')}>
                                    <Input type="checkbox" value="" onChange={handleChange} checked={isChecked} />
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
                    {!listItems ? (
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    ) : (
                        listItems.map((item: IItems, i: number) => {
                            if (changeStatus?._id === item._id) item.status = changeStatus.status;
                            let buttColor = item.status === 'active' ? 'success' : 'danger';
                            return (
                                <tr key={i}>
                                    <td>
                                        <Input
                                            type="checkbox"
                                            name={i}
                                            value={item._id}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e, i)}
                                            checked={listCheckbox.includes(item._id)}
                                        />
                                    </td>
                                    <td>{++i}</td>
                                    <td className={cx('col-name')}>{item.name}</td>
                                    <td className={cx('col-status')}>
                                        <Button
                                            color={buttColor}
                                            size="sm"
                                            rounded
                                            onClick={() => hanldeChangeStatus(item._id, item.status)}
                                        >
                                            {item.status}
                                        </Button>
                                    </td>
                                    <td>
                                        <Input
                                            type="number"
                                            value={item.ordering}
                                            ref={inputRef}
                                            rounded
                                            center
                                            bold
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeOrdering(e, i)}
                                        />
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

export default listItems;
