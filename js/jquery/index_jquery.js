$(document).ready(function(){

  $('canvas').drawRect({
    strokeStyle: '#c33',
    strokeWidth: 4,
    layer:true,
    name:"myBox",
    x: 150, y: 100,
    width: 200,
    height: 100,
    cornerRadius: 10
  }).drawImage({
  source: './images/default.png',
  x: 100, y: 100,
  width: 200, height: 125
});


  var rot = 360;
  var vitesse = 400;

  $("#plus").click(function(){
    // Animate layer properties
    $('canvas').animateLayer('myBox', {
      x: 150,
      y: 150,
      width: 100,
      rotate:rot,
      height: 50,

    }, 1000, 
    function(layer) {

      for(var i = 0; i < 2;i++){
        $(this).animateLayer(layer, {
          x: 250,
          y: 100,
          rotate:rot*2,
        }, vitesse, 'linear');


        $(this).animateLayer(layer, {
          x: 100,
          y: 100,
          rotate:rot*3,
        }, vitesse, 'linear');
      }




    }

    );
  });

});