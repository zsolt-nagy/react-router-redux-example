import { ADD_EXPENSE } from './action_constants';

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense
})