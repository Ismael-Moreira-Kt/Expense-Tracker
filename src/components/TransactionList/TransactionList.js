import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './style.css'
import Transaction from '../Transaction/Transaction'



const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className='transaction-list'>
      <h3 className='history'>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}



export default TransactionList