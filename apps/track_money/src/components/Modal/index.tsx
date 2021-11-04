import ReactModal from 'react-modal'

import { FormStyle } from "./styles"
import CloseIcon from '../../assets/close_black_24dp.svg'


ReactModal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function Modal({ isOpen, onRequestClose }: ModalProps){
  return (
    <ReactModal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button type="button" className="react-modal-close">
        <img src={CloseIcon} alt="Botão fechar"/>
      </button>
      <FormStyle>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </ReactModal>
  )
} 