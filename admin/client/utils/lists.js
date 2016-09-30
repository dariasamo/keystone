/**
 * Exports an object of lists, keyed with their key instead of their name and
 * wrapped with the List helper (./List.js)
 */

import List from './List';

const assingLists = function() {
	exports.listsByKey = {};
	exports.listsByPath = {};

	for (const key in global.Keystone.lists) {
		// Guard for-ins
		if ({}.hasOwnProperty.call(global.Keystone.lists, key)) {
			var list = new List(global.Keystone.lists[key]);
			exports.listsByKey[key] = list;
			exports.listsByPath[list.path] = list;
		}
	}

	return exports.listsByKey;
}

if (global.Keystone) {
	assignLists();
}

export default assingLists;
