// As a user
// When I click anywhere on the page
// I expect the click counter to increase by 1


// As a user
// When the click counter reaches 5
// I expect the background of the body to be red


// As a user
// When the click counter reaches 10
// I expect the background of the body to be green


// As a user
// When the click counter reaches 15
// I expect the background of the body to be blue


// var count = 0;

// $("#clickme").click(clickCount);

// function clickCount(event) {

// count += 1;

// console.log(count)

// if (count === 5) {

// $('body').css('background-color','red')

// // } else if (count = 10) {

// // $('body').css('background-color','blue')

// // } 

// }


var total = 0;

$("#clickme").click(clickCount);
	
function clickCount(event) {

total = total + 1;

$("#click-num").html(total)

// if (total === 5) {
// 	$('body').css('background-color','red')
// } else if (total === 10) {
// 	$('body').css('background-color','blue')
// } else if (total === 15) {
// 	$('body').css('background-color','green')
// }

}



