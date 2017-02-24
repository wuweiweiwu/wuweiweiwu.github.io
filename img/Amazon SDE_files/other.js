//http://jsbin.com/ucolu

$(window).load(function()
{
				 $('.text-scroll') .css({'height': (($(window).height()) - 280)+'px'});
					$(window).bind('resize', function(){
							$('.text-scroll') .css({'height': (($(window).height()) -280)+'px'});
					});

				 $('.scroll-inner') .css({'height': (($(window).height()) - 220)+'px'});
       	 $(window).bind('resize', function(){
            $('.scroll-inner') .css({'height': (($(window).height()) -220)+'px'});
           
        	});
				 $('.tabContents') .css({'height': (($(window).height()) - 275)+'px'});
        $(window).bind('resize', function(){
            $('.tabContents') .css({'height': (($(window).height()) -275)+'px'});
        });

			
				
				 $('.page-sec-inner') .css({'height': (($(window).height()) - 220)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner') .css({'height': (($(window).height()) - 220)+'px'});
        });
				

				 $('.page-sec-inner-resume') .css({'height': (($(window).height()) - 135)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner-resume') .css({'height': (($(window).height()) -135)+'px'});
        });
				
				 $('.page-sec-inner3') .css({'height': (($(window).height()) - 185)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner3') .css({'height': (($(window).height()) -185)+'px'});
        });
				
				 $('.page-sec-inner2') .css({'height': (($(window).height()) - 300)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner2') .css({'height': (($(window).height()) - 300)+'px'});
        });
				
				
				 $('.page-sec-inner4') .css({'height': (($(window).height()) - 160)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner4') .css({'height': (($(window).height()) - 160)+'px'});
            //alert('resized');
        });
				
				
				
				 $('.page-sec-inner5') .css({'height': (($(window).height()) - 40)+'px'});
        $(window).bind('resize', function(){
            $('.page-sec-inner5') .css({'height': (($(window).height()) - 40)+'px'});
            //alert('resized');
        });
				
				
				  //FAQ effect
			
						$('.set-of-tasks h3').each(function() {
							var tis = $(this), state = false, answer = tis.next('.hide').hide().css('height','auto').slideUp();
							tis.click(function() {
								state = !state;
								answer.slideToggle(state);
								tis.toggleClass('active',state);
							});
						});
});
