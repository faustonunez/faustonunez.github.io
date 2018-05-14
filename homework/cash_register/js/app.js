// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

var total = 0

$('#entry').submit(addEntry)

function addEntry(event) {

	event.preventDefault()
	
	var newEntry = $('#newEntry').val()


	// if (newEntry === "") {

	// 	alert("Need to enter value")

	// } else {

	total = total + parseFloat(newEntry) 

	$('tbody').append("<tr><td></td> <td>" + newEntry + "</tr></td>")
	
	$('#total').html("$" + total)

	$('#newEntry').val('')

	}
	
// }




// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared
