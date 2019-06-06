const initFunc = require('../_modules/initFunc.js');
const matchHeight = require('../_modules/matchHeight.js');

// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		matchHeight('.js-matchHeight');
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
		matchHeight('.js-matchHeight');
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option);
}