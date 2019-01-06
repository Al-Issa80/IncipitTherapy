/*var a = require('jquery-aniview');
 
var output = a.without([1, 2, 3], 1);
console.log(output);

$('.aniview').AniView();

var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);*/



var map;
var onRoute = {lat: 51.503466, lng: -0.307160};
function initMap(){
map = new google.maps.Map(document.getElementById('myMap'), {center: onRoute, zoom: 16
});
  var marker = new google.maps.Marker({position: onRoute, map: map});
}

