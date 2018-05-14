// As a User
// When I see the nav bar on desktop
// There is no burger (only Home/About/Contact/Blog)

// As a User
// When I see the nav bar on mobile
// I see a burger

// As a User
// When I click the burger
// I see the nav appear below the header

// As a User
// When I click the burger again
// I see the nav hide


$("#burger").click(burgerMenu) 

function burgerMenu() {

	$("#mobile-nav-items").slideToggle()


}


$(window).resize(hideNav);

function hideNav() {

	var width = $(window).width()

	if (width > 1024) {

		$("#mobile-nav-items").hide()

	}

}


console.log(window.close)