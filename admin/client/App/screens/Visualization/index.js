import React from 'react';
import { Container, Spinner } from 'elemental';
import { connect } from 'react-redux';
import { ListDiagram } from './components/ListDiagram';
import lists from '../../../utils/lists.js';

var Visualization = React.createClass({
	displayName: 'Visualization',
	componentDidMount () {
	},
	getSpinner () {
		if (this.props.counts && Object.keys(this.props.counts).length === 0
			&& (this.props.error || this.props.loading)) {
			return (
				<Spinner />
			);
		}
		return null;
	},
	render () {
		const spinner = this.getSpinner();
    const listObject = Object.values(lists.listsByKey);
		return (
			<Container data-screen-id="home">
				<div className="dashboard-header">
					<div className="dashboard-heading">{Keystone.brand}</div>
				</div>
				<div className="dashboard-groups">
					{(this.props.error) && (
						<AlertMessages
							alerts={{ error: { error:
								"There is a problem with the network, we're trying to reconnect...",
							} }}
						/>
					)}
					{/* Render flat nav */}
					{Keystone.nav.flat ? (
						<Lists
							counts={this.props.counts}
							lists={Keystone.lists}
							spinner={spinner}
						/>
					) : (
            <div>
              {listObject.map(list => <ListDiagram list={list} />)}
            </div>
					)}
				</div>
			</Container>
		);
	},
});

export {
	Visualization,
};

export default connect((state) => ({
	counts: state.home.counts,
	loading: state.home.loading,
	error: state.home.error,
}))(Visualization);
