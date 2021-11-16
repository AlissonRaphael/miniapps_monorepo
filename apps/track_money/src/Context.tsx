import { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "./services/api"


interface TransactionInterface {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: Date,
}

interface TransactionInputInterface {
  title: string,
  amount: number,
  type: string,
  category: string
}

interface TransactionProviderPropsInterface {
  children: ReactNode
}

interface TransactionContextDataInterface {
  transactions: TransactionInterface[],
  createTransaction: (transaction: TransactionInputInterface) => void
}


export const TransactionsContext = createContext<TransactionContextDataInterface>(
  {} as TransactionContextDataInterface
)

export function TransactionProvider({ children }: TransactionProviderPropsInterface) {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data))
  }, [])

  const createTransaction = (transaction: TransactionInputInterface) => {
    const data = { ...transaction, createdAt: new Date() }
    api.post('/transactions', data)
  }

  return ( 
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}
