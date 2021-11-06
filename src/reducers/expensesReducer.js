import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/action_constants';


export default function expensesReducer(state, action) {
    if (action.type === ADD_EXPENSE) {
      const newExpenses = [
        ...state.expenses, 
        {...action.payload, id: state.nextExpenseId}
      ];
      return {
        expenses: newExpenses,
        nextExpenseId: state.nextExpenseId + 1
      }
    } else if (action.type === DELETE_EXPENSE) {
      const newExpenses = state.expenses.filter(expense =>
        expense.id != action.payload.id
      );
      return {
        expenses: newExpenses,
        nextExpenseId: state.nextExpenseId
      }
    }
  
    return state;
}