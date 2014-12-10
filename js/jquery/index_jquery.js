$(document).ready(function(){
//37 39

var type = 0;

var number = 1;
$(document).keydown(function(e){
  //alert(e.keyCode);
  if(e.keyCode == 37){
    type = 2;
  }else if(e.keyCode == 39){
    type = 1;
  }else{

  }
});

$(document).keyup(function(e){
  type = 0;

    var layer = $("canvas").getLayer('myBox');
  $('canvas').setLayer(layer,{
      source: './images/default.png'
    }).drawLayers();
});

   setInterval(function(){
    if(number >= 9 ) {number = 1;}
     if(type == 0){

     }else if(type == 1){
      moveRight(number);
    }else if(type == 2){
      moveLeft(number);
    }
  },50);

function moveRight(){


    var layer = $("canvas").getLayer('myBox');
    $('canvas').setLayer(layer,{
      source: './images/runRight ('+number+').png',
      x:"+=20"
    }).drawLayers();
    number++;
  

}

function moveLeft(){


    var layer = $("canvas").getLayer('myBox');
    $('canvas').setLayer(layer,{
      source: './images/runLeft ('+ number+').png',
      x:"-=20"
    }).drawLayers();
  
   number++;

}

$('canvas').drawImage({
  source: './images/jump (1).png',
  x: 100, y: 400,
  name: 'myBox',
  layer: true,
  width: 200, height: 125
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function f1(i){
  var layer = $("canvas").getLayer('myBox');
  $('canvas').setLayer(layer,{
    source: './images/jump ('+i+').png'

  }).drawLayers();
}

var rot = 360;
var vitesse = 400;

//  $("#plus").click(function(){
    // Animate layer properties

    //for(var i = 2; i < 17;i++){

   //  setTimeout(function() {
     // $('canvas').animateLayer('myBox', {

      var i = 1;



      //}
      //); 
  //  },100);}

   //}
//   });//click sur plus

});//Document ready