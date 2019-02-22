$(document).ready(function(){
	if($(window).width() > 990 ){
		$('.menu-bar ul.menu li.menu-item a#about').click(function(){
			$('.rightcard .slide #about-card').addClass('chaysang');
			$('.rightcard .slide #resume-card').removeClass('chaysang');
			$('.rightcard .slide #skill-card').removeClass('chaysang');
			$('.rightcard .slide #works-card').removeClass('chaysang');
			$('.rightcard .slide #contact-card').removeClass('chaysang');
		});
		$('.menu-bar ul.menu li.menu-item a#resume').click(function(){
			$('.rightcard .slide #resume-card').addClass('chaysang');
			$('.rightcard .slide #about-card').removeClass('chaysang');
			$('.rightcard .slide #skill-card').removeClass('chaysang');
			$('.rightcard .slide #works-card').removeClass('chaysang');
			$('.rightcard .slide #contact-card').removeClass('chaysang');
		});
		$('.menu-bar ul.menu li.menu-item a#skill').click(function(){
			$('.rightcard .slide #skill-card').addClass('chaysang');
			$('.rightcard .slide #about-card').removeClass('chaysang');
			$('.rightcard .slide #resume-card').removeClass('chaysang');
			$('.rightcard .slide #works-card').removeClass('chaysang');
			$('.rightcard .slide #contact-card').removeClass('chaysang');

		});
		$('.menu-bar ul.menu li.menu-item a#works').click(function(){
			$('.rightcard .slide #works-card').addClass('chaysang');
			$('.rightcard .slide #about-card').removeClass('chaysang');
			$('.rightcard .slide #resume-card').removeClass('chaysang');
			$('.rightcard .slide #skill-card').removeClass('chaysang');
			$('.rightcard .slide #contact-card').removeClass('chaysang');
		});
		$('.menu-bar ul.menu li.menu-item a#contact').click(function(){
			$('.rightcard .slide #contact-card').addClass('chaysang');
			$('.rightcard .slide #works-card').addClass('chaysang');
			$('.rightcard .slide #about-card').removeClass('chaysang');
			$('.rightcard .slide #resume-card').removeClass('chaysang');
			$('.rightcard .slide #skill-card').removeClass('chaysang');
			$('.rightcard .slide #works-card').removeClass('chaysang');
		});
	};
	if($(window).width() < 990 ){
		$(".menu-bar a.one-page-menu-item").click(function(){
		 		layhref = $(this).attr('href');
		 		console.log(layhref);
		 	  	$('html,body').animate({scrollTop:$(layhref).offset().top});
		 	  	return false ; 
		 	  
		 	 });

	}

})