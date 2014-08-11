document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');

document.getElementById("reportProblemName").placeholder="Please enter your name (required)";
document.getElementById("reportProblemEmail").placeholder="Please enter your email address (required)";
document.getElementById("reportProblemMessage").placeholder="Please enter your comments (optional)";


// function validateForm(event, element) {
// 	if (document.getElementById("reportProblemEmail").value == "") {
// 		alert("Please enter an email address before sending your report.");
// 		event.stopPropagation();
// 		event.cancelBubble = true;
// 	}
// }

function validateForm() {
	document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' onchange='validate()' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' onchange='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='enabled'>Send Report</button></div>";
}


document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' onchange='validate()' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' onchange='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='disabled'>Send Report</button></div>";