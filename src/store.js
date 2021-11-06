import addExpenseReducer from './reducers/addExpenseReducer';
import deleteExpenseReducer from './reducers/deleteExpenseReducer';
import { configureStore } from '@reduxjs/toolkit';
import { ADD_EXPENSE, DELETE_EXPENSE } from './actions/action_constants';


const initialState = {
    expenses: [],
    nextExpenseId: 1
}

const rootReducer = (state = initialState, action) => {
    if (action.type === DELETE_EXPENSE) {
        return deleteExpenseReducer(state, action);
    } else if (action.type === ADD_EXPENSE) {
        return addExpenseReducer(state, action);
    }
    return state;
}

const store = configureStore({ reducer: rootReducer });

export default store;

