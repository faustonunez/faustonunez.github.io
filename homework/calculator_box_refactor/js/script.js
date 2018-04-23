var total = 0;



//This is adding

$('#a10').click(a10Results);

function a10Results() {

	total = total + 10;

	$('#out').html(total)
}


$('#a20').click(a20Results);

function a20Results() {

	total = total + 20;

	$('#out').html(total)
}


$('#a30').click(a30Results);

function a30Results() {

	total = total + 30;

	$('#out').html(total)
}


//This is substracting 

$('#n10').click(n10Results);

function n10Results() {

	total = total - 10;

	$('#out').html(total)
}


$('#n20').click(n20Results);

function n20Results() {

	total = total - 20;

	$('#out').html(total)
}


$('#n30').click(n30Results);

function n30Results() {

	total = total - 30;

	$('#out').html(total)
}



// Changing background color

$('#red').click(redResults);

function redResults() {

	$('#out').css("background-color","red")
}


$('#blue').click(blueResults);

function blueResults() {

	$('#out').css("background-color","blue")
}


// Resetting

$('#out').click(outResults);

function outResults() {

	$('#out').css("background-color","white")
	$('#out').html(0)
}








// Javascript 



// document.querySelector('#a20').onclick = a20Results;

// function a20Results() {

// 	total += 20;

// 	document.querySelector('#out').innerHTML = total;
// }




// document.querySelector('#a30').onclick = a30Results;

// function a30Results() {

// 	total += 30;

// 	document.querySelector('#out').innerHTML = total;
// }








// //This is substracting 



// document.querySelector('#n10').onclick = n10Results;

// function n10Results() {

// 	total -= 10;

// 	document.querySelector('#out').innerHTML = total;
// }



// document.querySelector('#n20').onclick = n20Results;

// function n20Results() {

// 	total -= 20;

// 	document.querySelector('#out').innerHTML = total;
// }




// document.querySelector('#n30').onclick = n30Results;

// function n30Results() {

// 	total -= 30;

// 	document.querySelector('#out').innerHTML = total;
// }








// //Changing background color 


// document.querySelector('#red').onclick = redResults;

// function redResults() {

// 	document.querySelector('#out').style.backgroundColor = 'red';
// }


// document.querySelector('#blue').onclick = blueResults;

// function blueResults() {

// 	document.querySelector('#out').style.backgroundColor = 'blue';
// }



// //Reseting 


// document.querySelector('#out').onclick = outResults;

// function outResults() {

// 	total = 0;

// 	document.querySelector('#out').innerHTML = total;

// 	document.querySelector('#out').style.backgroundColor = 'white';
// }



