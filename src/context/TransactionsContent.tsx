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
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children } : TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL(`http://localhost:3000/transactions`)
    if(query) {
      url.searchParams.append('q', query);
    }
    const requestTransactions = await fetch(url);
    const data = await requestTransactions.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}