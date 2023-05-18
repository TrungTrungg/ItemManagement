import { ReactNode, createContext, useEffect, useState, useMemo } from 'react';
import httpRequest from '../ulties/httpRequest';
import { IItems, IPagination, ISttFilter } from '../types/itemType';

interface ListItemProps {
    currStatus?: string;
    items?: IItems[];
    keyword?: string;
    pagination?: IPagination;
    sttFilter?: ISttFilter[];
}

export const ItemContext = createContext<any>(undefined);

const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [listItems, setListItems] = useState<ListItemProps>({});
    const [isChange, setIsChange] = useState<boolean>(false);
    const [apiEndpoint, setApiEndpoint] = useState<string>('adm/api/item');
    const [apiParam, setApiParam] = useState<Object>({});
    const [data, setData] = useState<Object>({});

    const { currStatus, items, keyword, pagination, sttFilter } = listItems;

    const updateStatus = () => {
        setIsChange(!isChange);
    };

    const updateApiEndpoint = (newEndpoint: string) => {
        setApiEndpoint(newEndpoint);
    };

    const updateApiParam = (newParam: string | number) => {
        setApiParam(newParam);
    };

    const getListItems = async () => {
        try {
            const res = await httpRequest.get(apiEndpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: { ...apiParam },
            });

            return setListItems(res.data);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getListItems();
    }, [apiEndpoint, apiParam, isChange]);

    return (
        <ItemContext.Provider
            value={{
                currStatus,
                items,
                keyword,
                pagination,
                sttFilter,
                data,
                setData,
                updateApiEndpoint,
                updateApiParam,
                updateStatus,
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
