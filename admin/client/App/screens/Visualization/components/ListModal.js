import React from 'react';
import { Modal, ModalHeader, ModalBody, Table } from 'elemental';

var ListModal = React.createClass({
	propTypes: {
	},
	getInitialState () {
		return {
			modalIsOpen: false,
		};
	},
	toggleModal () {
		this.setState({ modalIsOpen: !this.state.modalIsOpen });
	},
	render () {
		const { label } = this.props;
		const { keys } = this.props;
		const { values } = this.props;

		return (
			<span>
				<a href="#" onClick={this.toggleModal}>{label}</a>
				<Modal
					key={this.path}
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
						<Table className="field-options">
							<colgroup>
								<col width="40%" />
								<col width="40%" />
							</colgroup>
							<tbody>
								{keys.map(function (option, i) {
									return (
										<tr key={option}>
											<td>{option}</td>
											<td>{values[i].toString()}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</ModalBody>
				</Modal>
			</span>
		);
	},
});

module.exports = ListModal;
