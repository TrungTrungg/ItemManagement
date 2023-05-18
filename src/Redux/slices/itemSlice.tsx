import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItems, IPagination, ISttFilter } from '../../types/itemType';

interface ItemState {
    items: IItems[];
    pagination: IPagination;
    sttFilter: ISttFilter[];
}

const itemSlice = createSlice({
    name: 'item',
    initialState: {} as ItemState,
    reducers: {},
});

export default itemSlice.reducer;
