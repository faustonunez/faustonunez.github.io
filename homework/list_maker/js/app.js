// As a user
// When I enter an item in the input and click the button
// I expect to see a new item in the list

// $('#clickme').click(addItem)


// function addItem() {

// 	var itemName = $('#item').val()

// 	$('ul').prepend("<li>" + itemName + "</li>")

// 	$('#item').val("").focus()

// }





$('#clickme').click(addItem)


function addItem() {

	var itemName = $('#item').val()


	if (itemName === "") {
		
		alert("You need enter an item name")
	
	} else {

		$('ul').prepend("<li>" + itemName + "</li>")
	}


	$('#item').val("").focus()



	$('li').click(  

	function (event) {
	$(event.currentTarget).remove()

}

)

}



// Legendary Bonus:

// As a user
// When I click on an item I have already added
// I expect it to be removed from the list








// As a user
// Once I have added an item to the list
// I expect the input to be empty

// Bonus:

// As a user
// Once I have added an item to the list
// I expect the prompt to be focused on the input

// Harder Bonus:

// As a user
// When I try to add a blank item
// I expect to see an alert telling me to add an item
