import React from 'react';
import {useSelector} from 'react-redux';

export default function ListExpenses(props) {
    const expenses = useSelector(state => state.expenses);
    const expenseType = props.match.params.id ?? 'All';

    const tableRows = expenses
        .filter( expense => expense.id == expenseType || expenseType === 'All' )
        .map( expense => (
            <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.itemName}</td>
                <td>{expense.itemPrice}</td>
                <td>{expense.quantity}</td>
                <td>{expense.itemPrice * expense.quantity}</td>
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
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
