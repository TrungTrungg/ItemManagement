import React, { useContext, useState, ChangeEvent, Dispatch } from 'react';
import classNames from 'classnames/bind';

import styles from './BulkAction.module.scss';

import Button from '../../../components/Button';
import { ItemContext } from '../../../Context/ItemProvider';
import httpRequest from '../../../ulties/httpRequest';

const cx = classNames.bind(styles);

interface OptionsProps {
    value?: string;
    name: string;
}

interface BulkActionProps {
    options: OptionsProps[];
    name: string;
    className?: any;
    rounded?: Object;
}

interface IContext {
    data: Object;
    setData: Dispatch<React.SetStateAction<{}>>;
    updateStatus: () => void;
}

const BulkAction = ({ options, name, className, rounded }: BulkActionProps) => {
    const { updateStatus, data, setData } = useContext<IContext>(ItemContext);

    const [option, setOption] = useState('');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const classes = cx({ [className]: className, rounded });

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value !== '') {
            setIsDisabled(false);
            setOption(event.target.value);
        } else setIsDisabled(true);
    };

    const handleClick = async () => {
        const URL = option;
        try {
            const res = await httpRequest.post(URL, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            throw error;
        }
        updateStatus();
    };

    return (
        <>
            <select name={name} className={classes} onChange={handleChange}>
                {options.map((option, i) => {
                    return (
                        <option key={i} value={option.value}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
            <Button color="primary" size="md" rounded disabled={isDisabled} type="button" onClick={handleClick}>
                Apply
            </Button>
        </>
    );
};

export default BulkAction;
