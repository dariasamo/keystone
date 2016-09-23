import React from 'react';
import ListModal from './ListModal';
import { Glyph, Row, Card } from 'elemental';

const ListDiagram = ({ list }) => (
    <div className="list-diagram">
      <Row>
        <div className="list-title">
          {list.key}
        </div>
      </Row>
      <Row>
        {Object.values(list.fields).map(field =>
          <Card>
            <a href="#" onClick={this.toggleModal}>{field.label}</a>
          </Card>
          )}
      </Row>
    </div>
  )

module.exports = ListDiagram;
