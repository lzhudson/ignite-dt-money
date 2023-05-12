import { useMemo } from 'react'
import { TransactionsContext } from '../context/TransactionsContent'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
