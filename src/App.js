import './App.css';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ListExpenses from './components/ListExpenses/ListExpenses';
import NewExpense from './components/NewExpense/NewExpense';



function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Expense</Link></li>
          <li><Link to="/list">List Expenses</Link></li>
        </ul>
        <Switch>
          <Route path="/new" component={NewExpense} /> 
          <Route path="/list/:id" component={ListExpenses} />
          <Route path="/list" component={ListExpenses} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
