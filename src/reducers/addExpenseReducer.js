import { ADD_EXPENSE } from '../actions/action_constants';

export default function addExpenseReducer(state, action) {
    if (action.type === ADD_EXPENSE) {
      const newExpenses = [
        ...state.expenses, 
        {...action.payload, id: state.nextExpenseId}
      ];
      return {
        expenses: newExpenses,
        nextExpenseId: state.nextExpenseId + 1
      }
    }
  
    return state;
}