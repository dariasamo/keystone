import React from 'react';
import ListModal from './ListModal';
import { Row, Card } from 'elemental';

const ListDiagram = ({ list }) => (
	<div className="list-diagram">
		<Row>
			<div className="list-title">
				{list.key}
			</div>
		</Row>
		<Row>
			{Object.values(list.fields).map(field =>
				<Card key={field.path}>
					<ListModal label={field.label} keys={Object.keys(field)} values={Object.values(field)} />
				</Card>
				)}
		</Row>
	</div>
);

module.exports = ListDiagram;
