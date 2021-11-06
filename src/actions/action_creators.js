import { ADD_EXPENSE } from './action_constants';

export const addExpense = (payload) => ({
    type: ADD_EXPENSE,
    payload
});