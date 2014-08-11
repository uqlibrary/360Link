document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');

function validateForm() {
	var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Please enter a valid e-mail address before submitting your report.");
        return false;
    }
}


document.getElementsByClassName("report-problem-form hide").innerHTML = "<div class='report-problem-form hide'>
					<p>
						Send report and we'll investigate the problem. Enter your name and email only if you wish to be contacted.
					</p>
					<label for='reportProblemName'>Name:</label>
					<input type='text' id='reportProblemName' />
					<label for='reportProblemEmail' name='email'>Email:</label>
					<input type='text' id='reportProblemEmail' />
					<label for='reportProblemMessage'>Message:</label>
					<textarea rows='3' id='reportProblemMessage'></textarea>				
					<button class='btn report-problem-cancel'>Cancel</button>
					<button class='btn btn-inverse report-problem-send' type='submit' value'Send Report'></button>
				</div>
";