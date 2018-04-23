var fahGlobalResults = 0
var celGlobalResults = 0


CTA.onclick = farCalculation


function farCalculation() {

var farGet = document.querySelector("#fahInput").value

celGlobalResults = (farGet - 32) / 1.8

document.querySelector("#celInput").value = celGlobalResults

}