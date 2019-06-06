const initFunc = require('../_modules/initFunc.js');
const matchHeight = require('../_modules/matchHeight.js');
const smoothScroll = require('../_modules/smoothScroll.js');
const spTellLink = require('../_modules/spTellLink.js');

// マークアップアコーディオン用
function markupBlock() {
	$(".l-markupBlock").on('click','.p-markupBtn',function(){
		$(this).next().slideToggle();
	})
	$(".l-markupBlock").each(function(){
		var str = $(this).find('.pug+.source code').text();
		
		str = replaceAll(str, '                        ', '');
		$(this).find('.pug+.source code').text(str);

		var str = $(this).find('.js+.source code').text();
		
		str = replaceAll(str, '                        ', '');
		$(this).find('.js+.source code').text(str);
	});
	function replaceAll(str, beforeStr, afterStr){
		var reg = new RegExp(beforeStr, "g");
		return str.replace(reg, afterStr);
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