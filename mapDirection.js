// JavaScript Document


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();



var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var starter = new google.maps.LatLng(27.649395, 85.335827);
  var mapOptions = {
    zoom:15,
    center: starter
  }
  map = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions);
  directionsDisplay.setMap(map);
  
}



function calcRoute() {
  var start = new google.maps.LatLng(27.649395, 85.335827);
  var end = document.getElementById('address').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}






google.maps.event.addDomListener(window, 'load', initialize);