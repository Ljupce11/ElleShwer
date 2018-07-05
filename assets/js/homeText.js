$(document).ready(function() {

	/* Changes the workplace text while scrolling */

	$(window).scroll(function(event) {

		var text = ['Desai', 'MSC', 'Travelle', 'WCBN', 'Freelance'];
		var targetPositions = [701, 1401, 2101, 2801, 3201]; 
		var target = document.getElementById('change');
		var CurrPosition = $(window).scrollTop();

		if (CurrPosition < targetPositions[0]){
			target.innerHTML = 'MongoDB';
		}

		for (var i=0; i<text.length; i++){
			if (CurrPosition > targetPositions[i] - 1){
				target.innerHTML = text[i];
			}
		}

	});

});