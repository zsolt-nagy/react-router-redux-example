import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteExpense } from '../../actions/action_creators';
import { useDispatch } from 'react-redux';

export default function ListExpenses(props) {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expenses);
    const expenseType = props.match.params.id ?? 'All';

    function handleDelete(event) {
        dispatch(deleteExpense({id: event.target.dataset.id}));
    }

    const tableRows = expenses
        .filter( expense => expense.id == expenseType || expenseType === 'All' )
        .map( expense => (
            <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.itemName}</td>
                <td>{expense.itemPrice}</td>
                <td>{expense.quantity}</td>
                <td>{expense.itemPrice * expense.quantity}</td>
                <td><Link to={"/list/"+expense.id}>View</Link></td> 
                <td>
                    <button 
                        onClick={handleDelete}
                        data-id={expense.id}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));

    return (
        <div>
            <h2>List Expenses ({ expenseType })</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>View Expense</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
