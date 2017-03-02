$(document).ready(function() {
	$('#order_file').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
           $('.wrap_photo').css('background-image', 'url("' + reader.result + '")');
           $('.wrap_photo').html(' ');
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        	$('.wrap_photo').css('background', '#cccccc');
           	$('.wrap_photo').html('Photo');

        }
    });


	$('#photo_artist').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
           $('.artist_photo_inner_displayed').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        	$('.artist_photo_inner_displayed').css('background', '#cccccc');

        }
    });


    $(".wrap_photo").click(function() {
		$('#order_file').click();
    });

    $(".check_button").click(function () {
    	$(".check_button").removeClass("active");
    	$(this).addClass("active");
    });

    $(".portfolio_item_inner_link a").click(function(e) {
    	e.preventDefault();
    	if ($(this).closest('.portfolio_item').hasClass('selected_item')) {
    		$(this).closest('.portfolio_item').removeClass('selected_item');
    	}
    	else {
    		$(this).closest('.portfolio_item').addClass('selected_item');
    	}
    });

    $(".textarea_change").bind('input propertychange', function() {
    	var maxLength = $(".textarea_change").attr('maxlength');
		var text = $(this).val();
		var textLength = text.length;
		if (textLength > maxLength) {
		   $(".maxlenth_texarea").html(textLength + '/' + maxLength);
		}
		else {
		   $(".maxlenth_texarea").html(textLength + '/' + maxLength);
		}
    });

    $(".cities_buy_tickets_item_title").click(function() {
    	if($(this).closest(".cities_buy_tickets_item").find('.cities_buy_tickets_places').length > 0) {
	    	$(this).closest(".cities_buy_tickets_item").find('.cities_buy_tickets_places').slideToggle();
	    	if ($(this).closest(".cities_buy_tickets_item").hasClass('active_city')) {
	    		$(this).closest(".cities_buy_tickets_item").removeClass("active_city");
	    	}
	    	else {
	    		$(this).closest(".cities_buy_tickets_item").addClass("active_city");
	    	}
	    }
    });

    allocationTitle();
});


function allocationTitle() {
	var list_title = $('.cities_buy_tickets_item');
	list_title.each(function () {
		var this_width = $(this).width();
		var list_rows = $(this).find('.cities_buy_tickets_item_title');
		var left = this_width - list_rows.width();

		left = Math.floor((Math.random() * left) + 0);
		list_rows.css('padding-left', left);

	});
}