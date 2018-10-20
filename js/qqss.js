
(function($, undefined){

	$.storage = new $.store();
	
	var _ = {
		points: 0,
		cache : {},
		cached : false,
		history : "",		
		defaults : {			
			levels : 2,
			load_cache : false,
			start_level : 1,			
			num_questions : 5,			
			files: {			
				prefix : 'level',
				path : '/qqss/beta/questions/'				
			}
		},	

		dialog: function (id, f) {
		    var maskHeight = $(document).height(),
		    	maskWidth = $(window).width(),
		    	winH = $(window).height(),
		    	winW = $(window).width();
		    	
		    $('#mask').css({ 'width': maskWidth, 'height': maskHeight })
		    .fadeIn(1000).fadeTo("slow", 0.8);
		    
		    $(id).css({
		        top: winH / 2 - $(id).height() / 2,
		        left: winW / 2 - $(id).width() / 2
		    });
		    
		    $(id).fadeIn(2000, function () {
		        if (f) f();
		    });
		}
	}	
			
	window.QQSS = _;	
	
})(jQuery);


QQSS.dialog('#dialog_start', function () {

    $('.start-game').click(function () {	
        $('.window').fadeOut(function () {
            $('#mask').fadeOut('fast');
        });                
       	return false;
    });
});
