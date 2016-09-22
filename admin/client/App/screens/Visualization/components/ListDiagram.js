import React from 'react';

const ListDiagram = ({ list }) => (
    <div>
      {list.key}
      <ul>
        {Object.values(list.fields).map(field => <li>{field.label}</li>
        )}
      </ul>
    </div>
  )

module.exports = ListDiagram;
