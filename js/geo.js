if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
} else {
console.log("Geolocation is not supported by this browser.");
}
// Function that will be called if the query succeeds
var geolocationSuccess = function(pos) {
console.log("Your location is " + pos.coords.latitude + "°, " + pos.coords.longitude +
"°.");
};
// Function that will be called if the query fails
var geolocationFailure = function(err) {
console.log("ERROR (" + err.code + "): " + err.message);
};
var getErrorCode = function(err) {
switch (err.code) {
case err.PERMISSION_DENIED:
return "PERMISSION_DENIED";
case err.POSITION_UNAVAILABLE:
return "POSITION_UNAVAILABLE";
case err.TIMEOUT:
return "TIMEOUT";
default:
return "UNKNOWN_ERROR";
}
};
if (navigator.geolocation) {
//after the user indicates that they want to turn on continuous location-tracking
var watchId = navigator.geolocation.watchPosition(updateLocation, geolocationFailure);
} else {
console.log("Geolocation is not supported by this browser.");
}
var updateLocation = function(position) {
console.log("New position at: " + position.coords.latitude + ", " +
position.coords.longitude);
};