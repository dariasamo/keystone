import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'elemental';

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
    const { keys } = this.props;
    const { values } = this.props;

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
            <ul>
              {keys.map(function(option,i) {
                return (
                  <li>{option} {values[i].toString()}</li>
                )}
              )}
            </ul>
          </ModalBody>
        </Modal>
      </span>
		);
	},
});

module.exports = ListModal;
