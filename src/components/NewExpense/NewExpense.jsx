import React, { useRef } from 'react';
import { addExpense } from '../../actions/action_creators';
import { useDispatch } from 'react-redux';

export default function NewExpense() {
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const quantityInput = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addExpense({
            itemName: nameInput.current.value,
            itemPrice: Number.parseInt(priceInput.current.value, 10),
            quantity: Number.parseInt(quantityInput.current.value, 10)
        }));
        nameInput.current.value = '';
        priceInput.current.value = '';
        quantityInput.current.value = '';
    }
    return (
        <div>
            <h2>New Expense</h2>
            <form action="#" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
                        Expense Name:
                        <input 
                            type="text" 
                            name="item-name"
                            ref={nameInput} 
                            required
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Expense Price (in cents):
                        <input 
                            type="number" 
                            name="item-price"
                            ref={priceInput} 
                            required 
                            min="1"
                        />
                    </label>                    
                </div>
                <div className="form-row">
                    <label>
                        Quantity:
                        <input 
                            type="number" 
                            name="item-quantity"
                            ref={quantityInput} 
                            required 
                            min="1"
                        />
                    </label>   
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}
