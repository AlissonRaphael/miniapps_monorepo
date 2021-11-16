import { useState, FormEvent, useContext } from 'react'
import ReactModal from 'react-modal'

import { FormStyle, InOutStyle, RadioButtonStyle } from "./styles"
import CloseIcon from '../../assets/close_black_24dp.svg'
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import { svgFilter } from "../../styles/svg-filters"
import { TransactionsContext } from '../../Context'


ReactModal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function Modal({ isOpen, onRequestClose }: ModalProps){
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    const transaction = { title, amount, type, category }

    await createTransaction(transaction)

    onRequestClose()
  }

  return (
    <ReactModal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button type="button" className="react-modal-close" onClick={onRequestClose}>
        <img src={CloseIcon} alt="Botão fechar"/>
      </button>
      <FormStyle onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <InOutStyle>
          <RadioButtonStyle
            type="button"
            onClick={() => setType('deposit')} 
            isActive={type === 'deposit'}
            color={'green'}
          >
            <img src={ArrowCircle} style={svgFilter.upArrow} alt="Entradas"/>
            <span>Entradas</span>
          </RadioButtonStyle>
          <RadioButtonStyle
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            color={'red'}
          >
            <img src={ArrowCircle} style={svgFilter.downArrow} alt="Saidas"/>
            <span>Saidas</span>
          </RadioButtonStyle>
        </InOutStyle>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </ReactModal>
  )
}
