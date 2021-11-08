import { useState } from 'react'
import ReactModal from 'react-modal'

import { FormStyle, InOutStyle, RadioButtonStyle } from "./styles"
import CloseIcon from '../../assets/close_black_24dp.svg'
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import { svgFilter } from "../../styles/svg-filters"


ReactModal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function Modal({ isOpen, onRequestClose }: ModalProps){
  const [type, setType] = useState('deposit')

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
      <FormStyle>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <InOutStyle>
          <RadioButtonStyle type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'}>
            <img src={ArrowCircle} style={svgFilter.upArrow} alt="Entradas"/>
            <span>Entradas</span>
          </RadioButtonStyle>
          <RadioButtonStyle type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'}>
            <img src={ArrowCircle} style={svgFilter.downArrow} alt="Saidas"/>
            <span>Saidas</span>
          </RadioButtonStyle>
        </InOutStyle>

        <input type="text" placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </ReactModal>
  )
}
