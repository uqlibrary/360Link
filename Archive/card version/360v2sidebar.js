document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/New/360v2sidebar.css">');
document.write('<link rel="shortcut icon" href="http://assets.summon.serialssolutions.com/4be462afb32d95e23c3a5dec">');

function validate() {
    var re = /\S+@\S+\.\S+/;
    var emailToTest = document.getElementById("reportProblemEmail").value;
    var emailIsValid = re.test(emailToTest);
    var nameIsValid = (document.getElementById("reportProblemName").value != "");
    if (emailIsValid && nameIsValid) {
        document.getElementsByClassName("btn btn-inverse report-problem-send")[0].disabled = false;
    } else if (!emailIsValid || !nameIsValid) {
        document.getElementsByClassName("btn btn-inverse report-problem-send")[0].disabled = true;
    }
}
document.getElementsByClassName("report-problem-form hide")[0].innerHTML = "<div class='report-problem-form hide'><p><a href='mailto:eresources@library.uq.edu.au?subject=UQ summon 360 link helper error report&body=Enter a description of the problem.%0D%0A%0D%0A-------------%0D%0APlease do not delete this URL:%0D%0A [sub]' onclick='this.href = this.href.replace('[sub]',encodeURIComponent(window.location.href))'>Send us an email</a> or describe the problem below and we'll get back to you as soon as possible:</p><label for='reportProblemName'>Name:</label><input type='text' oninput='validate()' onclick='validate()' onkeychange='validate()' onkeydown='validate()' placeholder='Please enter your name (required)' id='reportProblemName' /><label for='reportProblemEmail' name='email'>Email:</label><input type='text' placeholder='Please enter your email address (required)' onkeydown='validate()' onkeychange='validate()' onclick='validate()' oninput='validate()' id='reportProblemEmail' /><label for='reportProblemMessage'>Message:</label><textarea rows='3' placeholder='Please enter your comments (optional)' id='reportProblemMessage'></textarea><button class='btn report-problem-cancel'>Cancel</button><button class='btn btn-inverse report-problem-send' disabled='disabled'>Send Report</button></div>";
document.getElementsByTagName("img")[0].src = "https://www.library.uq.edu.au/360Link/Testing/360/Library.png";