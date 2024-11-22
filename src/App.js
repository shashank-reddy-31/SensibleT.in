import React, {useState} from 'react'
import TransactionForm from './components/TransactionForm/TransactionForm'
import TransactionList from './components/TransactionList/TransactionList'
import TransactionDetails from './components/TransactionDetails/TransactionDetails'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const handleAddTransaction = transaction => {
    setTransactions([...transactions, transaction])
  }

  const handleSelectTransaction = transaction => {
    setSelectedTransaction(transaction)
  }

  return (
    <div className="App">
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onSelectTransaction={handleSelectTransaction}
      />
      <TransactionDetails transaction={selectedTransaction} />
    </div>
  )
}

export default App

