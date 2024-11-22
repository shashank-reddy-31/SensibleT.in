import React from 'react'
import './TransactionDetails.css'

const TransactionDetails = ({transaction}) => {
  return (
    <div className="transaction-details">
      <h2>Transaction Details</h2>
      {transaction ? (
        <div>
          <p>Description: {transaction.description}</p>
          <p>Amount: ${transaction.amount.toFixed(2)}</p>
        </div>
      ) : (
        <p>Select a transaction to see details.</p>
      )}
    </div>
  )
}

export default TransactionDetails