// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc



    function initMap() {
    var newYOrkCity = {lat: 40.730610, lng: -73.935242};
    var restaurant1 = {lat: 40.7231259, lng: -73.9946453};
    var restaurant2 = {lat: 40.7557344, lng: -73.9830204};
    var restaurant3 = {lat: 40.7825612, lng: -73.9826615};


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: newYOrkCity
    });
    var marker = new google.maps.Marker({
      position: newYOrkCity,
      map: map
    });

    map.setMapTypeId('terrain');

   	$('button').click(FavoritePlaces)

	function FavoritePlaces() {

	  var marker = new google.maps.Marker({
      position: restaurant1,
      map: map
    });

	  var marker = new google.maps.Marker({
      position: restaurant2,
      map: map
    });

	  var marker = new google.maps.Marker({
      position: restaurant3,
      map: map
    });


	}



  }










