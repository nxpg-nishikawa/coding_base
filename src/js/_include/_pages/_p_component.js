const initFunc = require('../_modules/initFunc.js');
const matchHeight = require('../_modules/matchHeight.js');
const smoothScroll = require('../_modules/smoothScroll.js');
const spTellLink = require('../_modules/spTellLink.js');
const accordionSet = require('../_modules/accordionSet.js');

// マークアップアコーディオン用
function markupBlock() {

	init();
	function init() {
		let _t = this;

		_t.$target = $(".l-markupBlock");
		_t.$target.on('click','.p-markupBtn',function(){
			$(this).next().slideToggle();
		})
		replaceWord(_t.$target,'.pug+.source code', '                        ')
		replaceWord(_t.$target,'.js+.source code', '                        ')
	}
	function replaceAll(_f_str, _f_beforeStr, _f_afterStr){
		let _t = this;
		_t.reg = new RegExp(_f_beforeStr, "g");
		return _f_str.replace(_t.reg, _f_afterStr);
	}
	function replaceWord(_f_$tg, _f_tg, _f_word) {
		let _t = this;
		_f_$tg.each(function(){
			_t.$str = $(this).find(_f_tg).text();
			_t.$str = replaceAll(_t.$str, _f_word, '');
			$(this).find(_f_tg).text(_t.$str);
		});
	}
}




// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		smoothScroll();
		matchHeight('.js-matchHeight');
		spTellLink('.js-tellLink', op);

		accordionSet({
			target: '.js-accordion'
		});

		markupBlock();
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
	initFunc(init, option, 'is-component');
}