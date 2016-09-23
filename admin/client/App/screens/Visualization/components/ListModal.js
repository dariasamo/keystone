import React from 'react';
import { Modal } from 'elemental';

const ListModal = (
  <Modal
    isOpen={this.state.modalIsOpen}
    onCancel={this.toggleModal}
    backdropClosesModal
  >
    <ModalHeader
      text="Lots of text to show scroll behavior"
      showCloseButton
      onClose={this.toggleModal}
    />
    <ModalBody>
    </ModalBody>
    <ModalFooter>
      <Button type="primary" onClick={this.toggleModal}>Close modal</Button>
      <Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
    </ModalFooter>
  </Modal>
  )

module.exports = ListModal;
