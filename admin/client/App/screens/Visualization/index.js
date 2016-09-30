import React from 'react';
import { Container } from 'elemental';
import { connect } from 'react-redux';

import AlertMessages from '../../shared/AlertMessages';
import ListDiagram from './components/ListDiagram';
import lists from '../../../utils/lists.js';

var Visualization = React.createClass({
	displayName: 'Visualization',
	componentDidMount () {
	},
	render () {
		const listObject = Object.values(lists.listsByKey);
		console.log(listObject);
		return (
			<Container data-screen-id="home">
				<div className="dashboard-header">
					<div className="dashboard-heading">Lists</div>
					<p>Here you can see all lists available in your project and their respective fields</p>
				</div>
				<div className="dashboard-groups">
					{(this.props.error) && (
						<AlertMessages
							alerts={{ error: { error:
								"There is a problem with the network, we're trying to reconnect...",
							} }}
						/>
					)}
					{/* Render diagram */}
					<div>
						{listObject.map(list => <ListDiagram key={list.path} list={list} />)}
					</div>
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
