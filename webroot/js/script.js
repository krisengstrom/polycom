(function() {

	var buttons = document.querySelectorAll('button');
	for (var i=0; i<buttons.length; i++) {
		
		if (buttons[i].type == 'button') {
			buttons[i].addEventListener('click', function() {
				var scrollStep = -window.scrollY / (1000 / 15);
				var scrollInterval = setInterval(function() {
					if (window.scrollY != 0)
						window.scrollBy(0, scrollStep);
					else
						clearInterval(scrollInterval);
				}, 15);
			});
		}
	}

})();