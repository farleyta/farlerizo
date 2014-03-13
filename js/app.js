(function(){

	$(document).foundation();

	// Get the size of the screen
	var windowWidth = $(window).width();

	$(window).load( function(){

		// Throttled resize function to set screen width on 300ms after resize
		$(this).on('resize', Foundation.utils.throttle(function(e){
			windowWidth = $(window).width();
			
			if ( windowWidth <= 1024 ) {
				$('body').css('backgroundPosition', '');
			};

		}, 300));

		$(window).scroll(function(e){
			if ( windowWidth > 1024 ) {
				parallax();
			} 
		});

		// Simple parallax effect for ballons on larger screen
		function parallax(){
			var 	base = $(window).scrollTop(),
					initBlueV = 20,
					initRedV = 60,
					initGreenV = 200,

					initBlueH = '200px ',
					initRedH = '0px ',
					initGreenH = 'right ',

					newBlueV = Math.floor( ( base  * -0.4 ) + initBlueV ) + 'px, ',
					newRedV = Math.floor( ( base  * 0.8 ) + initRedV ) + 'px, ',
					newGreenV = Math.floor( ( base  * 0.2 ) + initGreenV ) + 'px, ';

					otherBGValues = '0 90px, top left';

			$('body').css('backgroundPosition', initBlueH + newBlueV + initRedH + newRedV + initGreenH + newGreenV + otherBGValues);
		}

	});
})();