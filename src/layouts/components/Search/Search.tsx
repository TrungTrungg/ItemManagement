import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import Form from '../../../components/Form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { ItemContext } from '../../../Context/ItemProvider';

const cx = classNames.bind(styles);

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const { updateApiParam, updateApiEndpoint } = useContext(ItemContext);

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setSearchName(event.target.name);
    };

    const handleSearch = () => {
        updateApiParam({ search: searchValue });
    };

    const handleClear = () => {
        updateApiEndpoint('adm/api/item');
        updateApiParam({});
        setSearchValue('');
        inputRef.current?.focus();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                ref={inputRef}
                type="text"
                name="search"
                textarea
                rounded
                placeholder="Search for..."
                value={searchValue}
                onChange={handleInputChange}
            />
            <Button color="primary" size="md" onClick={handleSearch}>
                Search
            </Button>
            <Button color="success" size="md" onClick={handleClear}>
                Clear
            </Button>
        </Form>
    );
};

export default Search;
