import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './style.css'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2);
  const expense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0)).toFixed(2);

  return (
    <div className='inc-exp-container'>
        <div className='money-container'>
            <h4 className='inc-title'>Income</h4>
            <p className='money plus'>${income}</p>
        </div>
        <div className='money-container'>
            <h4 className='inc-title'>Expense</h4>
            <p className='money plus'>${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
