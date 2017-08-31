// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");

  var e = "hola";
  console.log(e);
  e = 10;
  console.log(e);

  for (var i = 0; i < e; i++) {
    console.log("i es igual a:" + i);
  }

  while(e > 0){
    console.log("e es igual a: " + e);
    e--;
  }

  if(e >= 2){
    console.log("e es mayor e igual a 2");
  }else{
    console.log("e es menor a 2");
  }

  $$("#iniciar").on("click", click_btn);

}

function click_btn(){
  console.log("click");
  var usuario = $$('#username').val();
  var pass = $$('#password').val();

  console.log("user: "+ usuario+ " pass: "+pass);
}
