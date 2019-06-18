//高さそろえる

module.exports = (op) => {
	
	let _g_defaultOp = {
		target: '.js-accordion',
		parentName: '.js-accordion-parent', // クリック要素
		childName: '.js-accordion-child', // アコーディオン要素
		speed: 300, // 速度
		timing: 'ease', // タイミング
		linkage: true, // アコーディオン連動
		collapsible: true, // 折りたたみ有効
		setBefore: function() {},
		setAfter: function() {},
		animationAfter: function() {},
	}

	let _g_op = Object.assign(_g_defaultOp, op);

	let gArray = {}; fArray = {}, arrayLength = 0;

	function init() {
		let _t = this;
			gArray = {};
			_t.target = document.querySelectorAll(_g_op.target);

		[].slice.call(_t.target).forEach(function(event, index) {
			gArray[index] = new accordionWrap(event);
			gArray[index].set();
		});
	}

	class accordionWrap {
		constructor(_c_tg) {
			let _t = this;
				_t.tg = _c_tg;
				_t.targetParents = _t.tg.querySelectorAll(_g_op.parentName);
				_t.arrayLength = _t.targetParents.length;
		}
		set() {
			let _t = this;
				_t.fArray = {};
			[].slice.call(_t.targetParents).forEach(function(event, index) {
				_t.fArray[index] = new accordionChild(event, _t.fArray, _t.arrayLength);
				_t.fArray[index].set();
			});
		}
	}

	class accordionChild {
		constructor(_c_tg, _c_array, _c_length) {
			let _t = this;
				_t.targetParent = _c_tg;
				_t.targetParent.style.cursor = 'pointer';
				_t.targetChild = _c_tg.nextElementSibling;
				_t.targetChild.style.overflow = 'hidden';
				_t.targetChild.style.transitionProperty = 'height';
				_t.targetChild.style.transitionDuration = _g_op.speed + 'ms';
				_t.targetChild.style.transitionTimingFunction = _g_op.timing;
				_t.clientH = _t.targetChild.clientHeight;
				_t.currentFlag = false;
				_t.array = _c_array;
				_t.arrayLength = _c_length;
		}
		set() {
			let _t = this;

			_g_op.setBefore();

			(_t.targetParent.classList.contains("is-open")) ? _t.open(_t) : _t.close(_t) ;

			_t.targetParent.addEventListener('click',function(){
				_t.lastH = _t.targetChild.style.height;
				for(let i = 0; i < _t.arrayLength; i++) {
					_t.array[i].currentFlag = false;
				}

				_t.currentFlag = true;
				
				if(_t.lastH == '0px') {
					_t.open();
				} else if(_g_op.collapsible) {
					_t.close();
				}

				if(_g_op.linkage) {
					_t.linkage();
				}

			},false);

			
			_t.targetChild.addEventListener('transitionend', function() {
				if(_t.currentFlag == true) {
					_g_op.animationAfter();
				}
			},false);
			

			_g_op.setAfter();
		}
		open() { // 開く処理
			let _t = this;
				_t.targetChild.style.height = _t.clientH + 'px'
		}
		close() { // 閉じる処理
			let _t = this;
				_t.targetChild.style.height = '0px';
				_t.currentFlag = false;
		}
		linkage() { // アコーディオン連動
			let _t = this;
				_t.lastH = _t.targetChild.style.height;
			for(let i = 0; i < _t.arrayLength; i++) {
				if(_t.array[i].currentFlag == false) {
					_t.array[i].close();
				}
			}
		}
	}
	init();
}

