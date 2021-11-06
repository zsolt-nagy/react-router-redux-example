import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../actions/actions';

export default function ListExpenses(props) {
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();
    const expenseType = props.match.params.id ?? 'All';

    const handleDelete = event => {
        dispatch(deleteExpense(event.currentTarget.dataset.id));
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
                <td><Link to={"/list/" + expense.id}>List Expense</Link></td>
                <td>
                    <button data-id={expense.id} onClick={handleDelete}>
                        Delete Expense
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
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
