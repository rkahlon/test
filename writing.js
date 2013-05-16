var i = 0;

function drawCircle() {
	
	i++;


	
	var svgNS = "http://www.w3.org/2000/svg";
	var myCircle = document.createElementNS(svgNS,"circle");
	myCircle.setAttributeNS(null,"id","mycircle");
	myCircle.setAttributeNS(null,"cx",200+(10*i));
	myCircle.setAttributeNS(null,"cy",200+(10*i));
	myCircle.setAttributeNS(null,"r",i*i);
	myCircle.setAttributeNS(null,"fill","none");
	myCircle.setAttributeNS(null,"stroke","blue");
	myCircle.setAttributeNS(null,"stroke-width","4");

	document.getElementById("mySVG").appendChild(myCircle);
}

/*
for (var x = 1; x < 15; x++) {
	drawCircle(x);
}
*/

setInterval(function(){drawCircle()},1000);
