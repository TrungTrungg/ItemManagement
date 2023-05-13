import { ReactNode, createContext, useEffect, useState, useMemo } from 'react';
import httpRequest from '../layouts/ulties/httpRequest';

interface IPage {
    currPage?: number;
    itemsPerPage?: number;
    pageRange?: number;
    totalItem?: number;
}

interface IItem {
    id: string;
    name: string;
    status: string;
    ordering: number;
}
interface IStt {
    name: string;
    count: number;
    style: string;
}
interface ListItemProps {
    currStatus?: string;
    items?: IItem[];
    keyword?: string;
    pagination?: IPage;
    sttFilter?: IStt[];
}

export const ItemContext = createContext<any>('default');

const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [listItems, setListItems] = useState<ListItemProps>({});
    const { currStatus, items, keyword, pagination, sttFilter } = listItems;
    const getListItems = async () => {
        try {
            const res = await httpRequest.get('adm/api/item', {});
            return setListItems(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListItems();
    }, []);

    return (
        <ItemContext.Provider value={{ currStatus, items, keyword, pagination, sttFilter }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
