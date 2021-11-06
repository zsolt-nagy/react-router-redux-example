import addExpenseReducer from './reducers/addExpenseReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: addExpenseReducer });

export default store;

