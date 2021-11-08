import ReactModal from 'react-modal'

import { FormStyle, InputOutputStyle } from "./styles"
import CloseIcon from '../../assets/close_black_24dp.svg'
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import { svgFilter } from "../../styles/svg-filters"


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
      <button type="button" className="react-modal-close" onClick={onRequestClose}>
        <img src={CloseIcon} alt="Botão fechar"/>
      </button>
      <FormStyle>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <InputOutputStyle>
          <button type="button">
            <img src={ArrowCircle} style={svgFilter.upArrow} alt="Entradas"/>
            <span>Entradas</span>
          </button>
          <button type="button">
            <img src={ArrowCircle} style={svgFilter.downArrow} alt="Saidas"/>
            <span>Saidas</span>
          </button>
        </InputOutputStyle>

        <input type="text" placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </ReactModal>
  )
}
