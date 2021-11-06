import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../actions/actions';

export default function NewExpense() {
    const dispatch = useDispatch();
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const quantityInput = useRef(null);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addExpense({
            itemName: nameInput.current.value,
            itemPrice: priceInput.current.value, // in cents
            quantity: quantityInput.current.value
        }));
        nameInput.current.value = '';
        priceInput.current.value = '';
        quantityInput.current.value = '';
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
                <label>
                    Item name: 
                    <input 
                        type="text" 
                        name="name" 
                        ref={nameInput} />
                </label>
            </div>
            <div>
                <label>
                    Item price (in cents):
                    <input 
                        type="number" 
                        name="price" 
                        ref={priceInput}
                        required
                        min="1" />
                </label>
            </div>
            <div>
                <label>
                    Quantity: 
                    <input 
                        type="number" 
                        name="quantity" 
                        ref={quantityInput}
                        required
                        min="1" />
                </label>
            </div>
            <button type="submit">Add Expense</button>


        </form>
    )
}
