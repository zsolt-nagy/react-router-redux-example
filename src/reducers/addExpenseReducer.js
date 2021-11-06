const initialState = {
    expenses: [],
    nextExpenseId: 1
}

export default function addExpenseReducer(state = initialState, action) {
    if (action.type === 'ADD_EXPENSE') {
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