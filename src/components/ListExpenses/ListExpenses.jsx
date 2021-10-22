import React from 'react';

export default function ListExpenses(props) {
    console.log(props);
    const expenseType = props.match.params.id ?? 'All';
    return (
        <div>
            List Expenses ({ expenseType })
        </div>
    )
}
