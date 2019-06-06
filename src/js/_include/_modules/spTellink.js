//スマホのときだけ電話番号用リンク

module.exports = (trigger) => {
	let	linkTarget = document.querySelectorAll(trigger);
	if(op.UA == 'pc'){
		Array.prototype.slice.call(linkTarget).forEach(function(event) {
			event.outerHTML = event.innerHTML
		});
	}
}