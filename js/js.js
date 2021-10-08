$(document).ready(function(){
	// slider edit speed
	$('.carousel').carousel({
  		interval: 2000
	});
// fade gear
	$('.gear-check').click(function(){
		$('.color-option').fadeToggle();
	});

// style le by jquery
	var licolor = $('.color-option ul li');
	licolor
	.eq(0).css('backgroundColor','#2398db').end()
	.eq(1).css('backgroundColor','#4CAF50').end()
	.eq(2).css('backgroundColor','#F62459').end()
	.eq(3).css('backgroundColor','#FC7C2A');

// change them of website by click li 
	licolor.click(function(){
		//console.log($(this).attr('data-value'));	
		$('link[href *= "them"]').attr('href', $(this).attr('data-value'));
	});

	
// loading page
	$(window).load(function()
	{
		
		$('.overlay-loading h2').fadeOut(5000, function(){
			$('body').css('overflow', 'auto');
			$(this).parent().fadeOut(1000, function(){
				$(this).remove(); // remove parent after hidden it 
			});
		});
	}
	);


	var btn = $('#s-top');
	$(window).scroll(function(){

		
		var scroll = $(this).scrollTop();
		if(scroll > 700){
			btn.fadeIn(100);
			
		} else{
			btn.fadeOut(100);
		}
	});
	
	btn.click(function(){
			$('body, html').animate({scrollTop: 0},500);
			$(window).scrollTop(0);
	}); 





});
