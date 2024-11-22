import React from 'react'
import './TransactionList.css'

const TransactionList = ({transactions, onSelectTransaction}) => {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul>
          {transactions.map((tran, index) => (
            <li key={index} onClick={() => onSelectTransaction(tran)}>
              {tran.description}: ${tran.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TransactionList