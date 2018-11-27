var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZHJhZHJhZHJhIiwiYSI6ImNqbnFoNndrdjIyZ2Izd3BrOXFzcjNpOTEifQ.6T-J06AkCQGngUHwpRvpoA');
var myLoc;

var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'mapbox://styles/dradradra/cjp0b0j3k03di2rkdrl5nc5ke',

};

function preload() {
  myLoc = getCurrentPosition();
  santa = loadImage('assets/santa.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function daysLeft() {
  var m = month();
  var days;
  if (m < 12) {
    days = 30 - day() + 25;
  } else {days = 25 - day ();}
  return days;
}

function draw() {
  var daysToXMAs = daysLeft();
  santaLat = map(daysLeft(), 0, 365, myLoc.latitude, 90);
  clear();
  colorMode(RGB, 255);
  var point0 = myMap.latLngToPixel(90, 0);
  var point1 = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  var point2 = myMap.latLngToPixel(santaLat, myLoc.longitude);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(point0.x, point0.y, point1.x, point1.y);
  stroke(225, 0, 0);
  strokeWeight(6);
  line(point0.x, point0.y, point2.x, point2.y);
  imageMode(CENTER);
  image(santa, point2.x, point2.y, 56, 56);
}
