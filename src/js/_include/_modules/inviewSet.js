let op = {
	TRIGGER: ".is-inview",
	ONE: ".is-inview-one"
}

module.exports = {
	set: (aj) => {
		function getViewportHeight() {
			var height = window.innerHeight; // Safari, Opera
			var mode = document.compatMode;
	
			if ( (mode || !$.support.boxModel) ) { // IE, Gecko
				height = (mode == 'CSS1Compat') ?
				document.documentElement.clientHeight : // Standards
				document.body.clientHeight; // Quirks
			}
	
			return height;
		}
		$(window).scroll(function () {
			var vpH = getViewportHeight(),
				scrolltop = (document.documentElement.scrollTop ?
					document.documentElement.scrollTop :
					document.body.scrollTop),
				elems = [];
			// naughty, but this is how it knows which elements to check for
			$.each($.cache, function () {
				if (this.events && this.events.inview) {
					elems.push(this.handle.elem);
				}
			});
			if (elems.length) {
				$(elems).each(function () {
					var $el = $(this),
						top = $el.offset().top,
						height = $el.height(),
						inview = $el.data('inview') || false;

					if (scrolltop > (top + height*aj) || scrolltop + vpH*aj < top) {
						if (inview) {
							$el.data('inview', false);
							$el.trigger('inview', [ false ]);                        
						}
					} else if (scrolltop < (top + height)) {
						if (!inview) {
							$el.data('inview', true);
							$el.trigger('inview', [ true ]);
						}
					}
				});
			}
		});
	},
	inviewOne: () => {
		if($(op.ONE).length) {
			$(op.ONE).one('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					$(this).addClass('is-animated');
				}
			});
		}
	},
	inview: () => {
		if($(op.TRIGGER).length) {
			
			$(op.TRIGGER).on('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					console.log('aaaaaaaaaaaaaaaa');
					$(this).addClass('is-animated');
				} else {
					$(this).removeClass('is-animated');
				}
			});
		}
	}
}
