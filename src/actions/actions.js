import { ADD_EXPENSE, DELETE_EXPENSE } from './action_constants';

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense
});

export const deleteExpense = (expenseId) => ({
    type: DELETE_EXPENSE,
    payload: expenseId
});