const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

var c = false;
if(c == true){
    document.getElementById("notsafe").style.display = "none";
    document.getElementById("safe").style.color = "green";

}else{
    document.getElementById("safe").style.display = "none";
    document.getElementById("notsafe").style.color = "red";
}


mobile_nav.addEventListener("click", () => toggleNavbar());
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;


    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
    function error() {
    status.textContent = 'Unable to retrieve your location';
    }
    if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
    } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
    }
    }
    document.querySelector('#find-me').addEventListener('click', geoFindMe);
