import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental';

var ListModal = React.createClass({
	propTypes: {
	},
  getInitialState () {
    return {
      modalIsOpen: false
    };
  },
  toggleModal () {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  },
	render () {
    const { label } = this.props;

		return (
      <span>
        <a href="#" onClick={this.toggleModal}>{label}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onCancel={this.toggleModal}
          backdropClosesModal
        >
          <ModalHeader
            text={label}
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
      </span>
		);
	},
});

module.exports = ListModal;
