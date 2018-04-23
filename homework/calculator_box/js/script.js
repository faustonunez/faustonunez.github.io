var total = 0;



//This is adding

document.querySelector('#a10').onclick = a10Results;

function a10Results() {

	total = total + 10;

	document.querySelector('#out').innerHTML = total;
}



document.querySelector('#a20').onclick = a20Results;

function a20Results() {

	total += 20;

	document.querySelector('#out').innerHTML = total;
}




document.querySelector('#a30').onclick = a30Results;

function a30Results() {

	total += 30;

	document.querySelector('#out').innerHTML = total;
}








//This is substracting 



document.querySelector('#n10').onclick = n10Results;

function n10Results() {

	total -= 10;

	document.querySelector('#out').innerHTML = total;
}



document.querySelector('#n20').onclick = n20Results;

function n20Results() {

	total -= 20;

	document.querySelector('#out').innerHTML = total;
}




document.querySelector('#n30').onclick = n30Results;

function n30Results() {

	total -= 30;

	document.querySelector('#out').innerHTML = total;
}








//Changing background color 


document.querySelector('#red').onclick = redResults;

function redResults() {

	document.querySelector('#out').style.backgroundColor = 'red';
}


document.querySelector('#blue').onclick = blueResults;

function blueResults() {

	document.querySelector('#out').style.backgroundColor = 'blue';
}



//Reseting 


document.querySelector('#out').onclick = outResults;

function outResults() {

	total = 0;

	document.querySelector('#out').innerHTML = total;

	document.querySelector('#out').style.backgroundColor = 'white';
}



