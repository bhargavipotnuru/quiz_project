$(document).ready(function() {
	$("#quiz-form").submit(function(event) {
		event.preventDefault();
		var q1 = $("#q1").val();
		var q2 = $("#q2").val();
		var correct = 0;
		if (q1 == "b") {
			correct++;
			$("#q1").addClass("border-success");
		} else {
			$("#q1").addClass("border-danger");
		}
		if (q2 == "b") {
			correct++;
			$("#q2").addClass("border-success");
		} else {
			$("#q2").addClass("border-danger");
		}
		$("#results").html("<h2>You got " + correct + " out of 2 questions correct!</h2>");
	});
});
