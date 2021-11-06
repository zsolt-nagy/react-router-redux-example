import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { addExpense } from './actions/actions';

import { Provider } from 'react-redux';

// REDUX Experiment



const action = addExpense({
    itemName: 'Printer',
    itemPrice: 19800, // in cents
    quantity: 1
});


console.log(store);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
store.dispatch(addExpense({
    itemName: 'Expensive collectors card',
    itemPrice: 25519800, // in cents
    quantity: 1
  }));
console.log(store.getState());
store.dispatch(addExpense({
    itemName: '1000 sheets of paper',
    itemPrice: '499', // in cents
    quantity: 1000
  }));
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
