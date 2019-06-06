//高さそろえる

module.exports = (className) => {
	
	let elm = document.querySelectorAll(className);
	if(elm != null) {
		
		let array = [], arrayLength = 0, arrayCount = 0;
		arrayLengthSet(array);

		function arrayLengthSet(ar) {
			let offTop = 0;
			Array.prototype.slice.call(elm).forEach(function(event, i) {
				if(offTop !== 0 && offTop !== event.offsetTop) {
					arrayLength++;
				}
				offTop = event.offsetTop;
			});
			for(let i = 0; i <= arrayLength; i++) {
				ar.push([]);
			}
			arraySetFunc(ar);
		}

		function arraySetFunc(ar) {
			let offTop = 0;
			Array.prototype.slice.call(elm).forEach(function(event, i) {
				if(offTop !== 0 && offTop !== event.offsetTop) {
					arrayCount++;
				}
				ar[arrayCount].push(event);
				offTop = event.offsetTop;
			});
			heightSetFunc(ar);
		}

		function heightSetFunc(ar) {
			let height;
			for(let i = 0; i <= arrayCount; i++) {
				height = 0;
				ar[i].forEach(function(event, index) {
					if (index === 0 || index % ar[i].length === 0) {
						height = event.clientHeight;

						for (let n = index + 1; n <= index + ar[i].length - 1; n++) {
							if (height < ar[i][n].clientHeight) {
								height = ar[i][n].clientHeight;
							}
						}

						for (let n = index; n <= index + index + ar[i].length - 1; n++) {
							ar[i][n].style.height = height + "px" ;
						}
					}
				});
			}
		}
	}
}

