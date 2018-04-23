// var fahGlobalResults = 0
// var celGlobalResults = 0


// CTA.onclick = farCalculation


// function farCalculation() {

// var farGet = document.querySelector("#fahInput").value

// celGlobalResults = (farGet - 32) / 1.8

// document.querySelector("#celInput").value = celGlobalResults


// }



var fahGlobalResults = 0
var celGlobalResults = 0

var test;

document.querySelector('#fahInput').onchange = fahCalculation
document.querySelector('#celInput').onchange = celCalculation



function fahCalculation() {

var farGet = document.querySelector("#fahInput").value

celGlobalResults = (farGet - 32) / 1.8

document.querySelector("#celInput").value = Math.round(celGlobalResults)

changeBK()

return fahGlobalResults

}


function celCalculation() {

var celGet = document.querySelector("#celInput").value

fahGlobalResults = (celGet * 1.8) + 32

document.querySelector("#fahInput").value = Math.round(fahGlobalResults)

changeBK()

return celGlobalResults

}



function changeBK() {

		if (0 <= fahGlobalResults <= 32 & celGlobalResults <= 0) {

			document.body.style.backgroundImage = "url('https://cupofjo.com/wp-content/uploads/2017/12/centralparl.jpg')";
		}  else {

			document.body.style.backgroundImage = "url('http://www.theexpeditioner.com/wordpress/wp-content/uploads/2013/05/Top-10-Free-Things-To-Do-In-New-York-City-This-Summer1.jpg";
		}
}

window.onchange = function () {
fahGlobalResults = fahCalculation()
celGlobalResults = celCalculation()
}








