import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContent'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, currentTransaction) => {
      if (currentTransaction.type === 'income') {
        acc.income += currentTransaction.price
        acc.total += currentTransaction.price
      } else if (currentTransaction.type === 'outcome') {
        acc.outcome += currentTransaction.price
        acc.total -= currentTransaction.price
      }
      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
