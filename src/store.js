import expensesReducer from './reducers/expensesReducer';
import { configureStore } from '@reduxjs/toolkit';
import { ADD_EXPENSE, DELETE_EXPENSE } from './actions/action_constants';


const initialState = {
    expenses: [],
    nextExpenseId: 1
}

const rootReducer = (state = initialState, action) => expensesReducer(state, action);

const store = configureStore({ reducer: rootReducer });

export default store;

