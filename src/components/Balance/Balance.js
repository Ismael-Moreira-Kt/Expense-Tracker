import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './style.css';


const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transactions => transactions.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalClass = total >= 0 ? 'total-positive' : 'total-negative';

  return (
    <div className='balance'>
      <h4 className='balance-title'>Your Balance</h4>
      <h1 className={totalClass}>${total}</h1>
    </div>
  )
}


export default Balance