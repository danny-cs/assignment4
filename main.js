$("document").ready(function() {
	console.log("Ready.");

	// var i = 0;
	// setInterval(function() {
	// 	if(i % 2 == 0) {
	// 		$("h1").text("Even.");	
	// 	} else {
	// 		$("h1").text("Odd.");	
	// 	}
	// 	i++;
	// }, 1000);

	$(".btnCalculate").click(function() {
		alert($("#userinput").val());
	});

});