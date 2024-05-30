import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import "./style.css"

const Transaction = ( {transaction} ) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'transaction-minus' : 'transaction-plus'}>
        <p>{transaction.text}</p> <span>{sign}${Math.abs(transaction.amount)}</span> <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction
