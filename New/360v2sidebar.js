document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');

function validate() {
	document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' onchange='validate()' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' onchange='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='enabled'>Send Report</button></div>";
}


document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' onchange='validate()' placeholder='Please enter your name (required)' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' placeholder='Please enter your email address (required)' onchange='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' placeholder='Please enter your comments (optional)' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='disabled'>Send Report</button></div>";