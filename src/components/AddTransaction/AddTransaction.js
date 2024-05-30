import React, {useContext, useState} from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text, 
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Add new Transaction</h3>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-controll'>
                    <label className='form-label' htmlFor="text">Text</label>
                    <input className='form-input' type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter the Text' />
                </div>
                <div className='form-controll'>
                    <label className='form-label' htmlFor="amount">Amount</label>
                    <input className='form-input' type='number' value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter the amount'></input>
                </div>

                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction