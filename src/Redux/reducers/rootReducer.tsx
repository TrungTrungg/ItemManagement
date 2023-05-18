import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from '../slices/itemSlice';

const rootReducer = combineReducers({
    item: itemReducer,
});

export default rootReducer;
