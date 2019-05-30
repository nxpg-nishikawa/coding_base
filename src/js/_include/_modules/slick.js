// let sliderOption = {
// 	autoplay: false,
// 	arrows: false,
// 	centerMode: false,
// 	dots: false,
// 	infinite: true,
// 	slidesToShow: 4,
// 	slidesToScroll: 4,
// 	responsive: [
// 		{
// 			breakpoint: op.SP_WIDTH,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			}
// 		},
// 	]
// }


module.exports = class slick {
	constructor($tg) {
		this.target = $tg;
		this.slideLength = this.target.find('.slide').length;
	}
	set(op) {
		this.target.slick(op);
	}
	pager($pg) {
		let $sl = this.target;
		for(var i = 0; i < this.slideLength; i++) {
			$pg.append("</p>")
		}
		$pg.on('click', 'p', function(event) {
			$sl.slick('slickGoTo', $(this).index());
		});
	}
	arrow($pr, $nx) {
		let $sl = this.target;

		$pr.on('click', function(event) {
			$sl.slick('slickPrev');
		});
		$nx.on('click', function(event) {
			$sl.slick('slickNext');
		});
	}
}