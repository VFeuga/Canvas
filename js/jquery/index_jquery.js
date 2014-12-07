window.onload = function() {
	var sens = -1;
	
	// Transition avec fonction de rappel
	function transition() {
		alert('ok');
		sens *= -1;
		pendule.transitionTo({
			rotation: sens * Math.PI / 4, 
			duration: 2,
			easing: "ease-in-out",
			callback: function() {transition();}
		});		
	}
	
	// Scène
	var scène = new Kinetic.Stage({
	  container: "kinetic",
	  width: 500,
	  height: 300
	});
	
	var calque = new Kinetic.Layer();
	
	// Construction du pendule avec un groupe
	var pendule = new Kinetic.Group( {
		x: 250,
		y: 50
	});
	var boule = new Kinetic.Ellipse({
		x: 0,
		y: 180,
		radius: 20,
		fill: "blue"
	});
	var fil = new Kinetic.Line({
		points: [0, 0, 0, 180],
		stroke: "black"
	});
	
	pendule.add(fil);
	pendule.add(boule);
	calque.add(pendule);
	scène.add(calque);
	
	transition();
};