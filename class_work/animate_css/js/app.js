// As a User
// When I click on the button
// I want the header to bounce


$('#animate-me').click(animateText)

function animateText() {
  $('h1').addClass('animated infinite bounce')

  var right = $('img').css('right')

  console.log(right)

  if (right == '0px') {

  } else {
  	$('img').animate({

  		'right': '0',
  	})
  }



}

// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

$('#shrink').click(shrinkGlobe)

function shrinkGlobe() {
  $('img').animate({
    'height':'5px', 
    'width': '5px',
  }, 500)
}


// As a User
// When I click the button
// I want to see the globe move to the right of the screen










// As a User
// When I click the button again
// I want the globe to return




