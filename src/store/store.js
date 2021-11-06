import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expensesReducer';

const initialState = {
    expenses: [],
    nextExpenseId: 1
}

const rootReducer = (state = initialState, action) => 
    expensesReducer(state, action);


const store = configureStore({ reducer: rootReducer });

export default store;


