import { ReactNode, Dispatch, SetStateAction } from 'react';
import { IItems } from '../../../types/itemType';

export interface HeadingProps {
    id: string;
    name: string;
    status: string;
    ordering: string;
    action: string;
}

export interface ItemContextProps {
    items: IItems[] | null;
    data: Object;
    setData: Dispatch<React.SetStateAction<{}>>;
    updateApiEndpoint: (endPoint: string) => void;
    updateStatus: () => void;
}
interface Props {
    children?: ReactNode;
    headingData: HeadingProps[];
}
export type ListItemProps = Props & Record<string, unknown>;
