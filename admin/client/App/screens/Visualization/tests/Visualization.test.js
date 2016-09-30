import React from 'react';
import demand from 'must';
import { shallow } from 'enzyme';

import { Visualization } from '../index';

import ListDiagram from '../components/ListDiagram';

describe('<Visualization />', () => {
	before(() => {
		global.Keystone = {
			nav: {
				sections: [],
			},
			orphanedLists: [],
			lists: {
        listsByKey: {
          Post: {
            key: 'post'
          }
        }
      },
		};
	});

	it('should render a flat nav if specified', () => {
		const component = shallow(<Visualization />);
    demand(component.find(ListDiagram).length).eql(1);
    // demand(component.find(ListDiagram).at(0).prop('lists')).eql(orphanedLists);
	});

});
