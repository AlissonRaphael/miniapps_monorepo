import { useState } from 'react'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header/'
import { Modal } from './components/Modal'

import { GlobalStyle } from './styles/global'


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyle/>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard/>
    </>
  )
}
