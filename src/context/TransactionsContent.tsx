import { ReactNode, createContext, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: Transaction[]
}

export const TransactionsContext = createContext<TransactionsContextProps>({ transactions: [] })

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children } : TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const requestTransactions = await fetch('http://localhost:3000/transactions');
    const data = await requestTransactions.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, }}>
      {children}
    </TransactionsContext.Provider>
  )
}