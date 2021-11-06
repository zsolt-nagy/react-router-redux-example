import { DELETE_EXPENSE } from '../actions/action_constants';

export default function deleteExpenseReducer(state, action) {
    if (action.type === DELETE_EXPENSE) {
      const newExpenses = state.expenses.filter(expense => expense.id != action.payload);
      return {
        expenses: newExpenses,
        nextExpenseId: state.nextExpenseId
      }
    }
  
    return state;
}