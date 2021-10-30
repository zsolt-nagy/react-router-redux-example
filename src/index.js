import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// REDUX Experiment
const initialState = {
  expenses: [],
  nextExpenseId: 1
}


function addExpenseReducer(state = initialState, action) {
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

const action = {
  type: 'ADD_EXPENSE',
  payload: {
    itemName: 'Printer',
    itemPrice: 19800, // in cents
    quantity: 1
  }
}

const store = configureStore({ reducer: addExpenseReducer });
console.log(store);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
store.dispatch({
  type: 'ADD_EXPENSE',
  payload: {
    itemName: 'Expensive collectors card',
    itemPrice: 25519800, // in cents
    quantity: 1
  }
});
console.log(store.getState());
store.dispatch({
  type: 'ADD_EXPENSE',
  payload: {
    itemName: '1000 sheets of paper',
    itemPrice: '499', // in cents
    quantity: 1000
  }
});
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
