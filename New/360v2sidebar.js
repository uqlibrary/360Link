document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');


document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse new-report-problem-send' onClick='validateForm()'>Send Report</button></div>";




jQuery(function($){
	$('.new-report-problem-send').on('click', function(event) {	
		if (document.getElementById("reportProblemEmail").value == "") {
		alert("Please enter an email address before sending your report.");
	} else {
	$("#patronName").val($("#reportProblemName").val());
	$("#patronEmail").val($("#reportProblemEmail").val());
	$("#patronMessage").val($("#reportProblemMessage").val());
	reportBadLink("Link Not Working");
	$('.report-problem-form').hide();
	showReportProblemConfirmation();
}
});
})