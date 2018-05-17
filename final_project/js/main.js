// $(window).scroll(changeHeader)

// function changeHeader () {
// 	var userPosition = $(window).scrollTop();
// 	if (userPosition > 150) {
// 		$('nav').addClass('nav-scroll')
// 	} else {
// 		$('nav').removeClass('nav-scroll')
// 		}
// 	}



$('#nav-burger-icon').click(showMenu)



function showMenu() {


	$( "main" ).addClass( "blur-background " );
	$( "header" ).addClass( "blur-background " );
	$( ".mobile-burger" ).addClass( "modal-visible" );

}


$('.mobile-burger').click(hideMenu)



function hideMenu() {


	$( "main" ).removeClass( "blur-background " );
	$( "header" ).removeClass( "blur-background " );
	$( ".mobile-burger" ).removeClass( "modal-visible" );

}

// scroll events

var $animation_elements = $('.thumbnail-metadata');
var $window = $(window);


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll')


function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('animated fadeInLeft');
    } else {
      $element.removeClass('animated fadeInLeft');
    }
  });
}


// Page transition 

document.body.className += ' fade-out';


$(function() {
    $('body').removeClass('fade-out');
});


//nav hide and show

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

	

















