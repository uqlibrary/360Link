document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');

function validate() {
	var re = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?;
	var emailToTest = document.getElementById("reportProblemEmail").value;
	var emailIsValid = re.test(emailToTest);
	var nameIsValid = (document.getElementById("reportProblemName").value != "");
	if (emailIsValid && nameIsValid) {
		document.getElementsByClassName("btn btn-inverse report-problem-send")[0].disabled = false;
	} else if (!emailIsValid || !nameIsValid) {
		document.getElementsByClassName("btn btn-inverse report-problem-send")[0].disabled = true;
	}
}


document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p>Send report and we'll investigate the problem.Enter your name and email only if you wish to be contacted.</p><label for='reportProblemName'>Name:</label><input type='text' oninput='validate()' onclick='validate()' onkeychange='validate()' onkeydown='validate()' placeholder='Please enter your name (required)' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' placeholder='Please enter your email address (required)' onkeydown='validate()' onkeychange='validate()' onclick='validate()' oninput='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' placeholder='Please enter your comments (optional)' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='disabled'>Send Report</button></div>";