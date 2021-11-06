import { ADD_EXPENSE, DELETE_EXPENSE } from './action_constants';

export const addExpense = (payload) => ({
    type: ADD_EXPENSE,
    payload
});

export const deleteExpense = (payload) => ({
    type: DELETE_EXPENSE,
    payload
});