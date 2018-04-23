// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


// $('#first').click(swapFirst)

// function swapFirst() {
// 	$('#bigimage').attr('src', 'img/1.jpg')
// }


// $('#second').click(swapSecond)

// function swapSecond() {
// 	$('#bigimage').fadeOut(function() { 
// 		$('#bigimage').attr('src', 'img/2.jpg').fadeIn() 
// 	})

// }


// $('#third').click(swapThird)

// function swapThird() {
// 	$('#bigimage').attr('src', 'img/3.jpg')
// }


// $('#fourth').click(swapFourth)

// function swapFourth() {
// 	$('#bigimage').attr('src', 'img/4.jpg')
// }




$('.thumb').click(changeImage)

function changeImage() {
	
	var newSrc = $(event.currentTarget).attr("src")

	$('#bigimage').attr('src', newSrc)
}