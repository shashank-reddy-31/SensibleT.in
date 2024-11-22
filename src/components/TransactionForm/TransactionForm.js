import React, {useState} from 'react'
import './TransactionForm.css'

const TransactionForm = ({onAddTransaction}) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (description && amount) {
      onAddTransaction({description, amount: parseFloat(amount)})
      setDescription('')
      setAmount('')
    } else {
      alert('Please fill in both fields.')
    }
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm