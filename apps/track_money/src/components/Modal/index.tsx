import ReactModal from 'react-modal'

import { ContentStyle } from "./styles"


ReactModal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function Modal({ isOpen, onRequestClose }: ModalProps){
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <ContentStyle>
        <h2>Cadastrar transação</h2>
      </ContentStyle>
    </ReactModal>
  )
} 