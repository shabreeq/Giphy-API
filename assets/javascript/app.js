var topics = ["football", "soccer", "baseball", "volleyball", "basketball", "tennis", "hockey", "criicket", "swimming"];





$("#btn1").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=football&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn2").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=soccer&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn3").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=baseball&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn4").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=volley+ball&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn5").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=basketball&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn6").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=tennis&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn7").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=hockey&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn8").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=cricket&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});

$("#btn9").click(function(){
  console.log("The this button was clicked.");
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=swimming&api_key=2pGUWkUrmjLWyIovDKaJljMFahdsxZzH&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
 
});



