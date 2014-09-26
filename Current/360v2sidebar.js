document.write('<link rel="stylesheet" type="text/css" href="https://www.library.uq.edu.au/360Link/Current/360v2sidebar.css">');
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
document.getElementsByTagName("img")[0].src = "https://www.library.uq.edu.au/360Link/Current/Library.png";


// Checks if "Still need help?" text is present, changes it to "Need help finding this?"
if (document.getElementsByClassName("custom-links-header").length != 0) {
	var requestDocDelURL = document.getElementsByClassName("custom-link-group")[0].getElementsByTagName("a")[0].href;
	var nameOfItem = requestDocDelURL.match(/=?publ0=([a-zA-Z+]*)/i);
    var nameOfItemNoSpaces = nameOfItem[1].split('+').join(' ');
	document.getElementsByClassName("custom-link-group")[0].innerHTML = "<a target='_blank' href='https://app.library.uq.edu.au/#/journals?C=" + nameOfItemNoSpaces + "&S=AC_T_B'>Check if we have this item online</a><br><a target='_blank' href='https://library.uq.edu.au/search~S7/t?search=" + nameOfItem[1] + "'>Check if we have this item in print</a><br> <a target='_blank' href='" + requestDocDelURL + "'>Request the item via Document Delivery</a><br>";
	var stillNeedHelpText = document.getElementsByClassName("custom-links-header")[0].innerHTML;
	if (stillNeedHelpText.indexOf("Still need help?") == 9) {
		document.getElementsByClassName("custom-links-header")[0].innerHTML = "Need help finding this?&nbsp;<span class='custom-links-open hide caret-plain' style='display: none;'><i class='icon-caret-down'></i></span><span class='custom-links-close caret-plain' style='display: inline;'><i class='icon-caret-up'></i></span>";
	}
}
// document.getElementById('link-not-working').remove();
// document.getElementById('go-back').outerHTML = "<a href id=​'go-back'>​Additional Options​</a>​<br><a href='' id='link-not-working-updated'>Report a problem</a>";

// jQuery(function($){
//     $('#link-not-working-updated').on('click', function(event) {
//         event.preventDefault(); 
//         // $('.custom-links, .locale, .additional-options, .actions, .email-form, .export-form').hide();
//         if ($(".report-problem-form").length) {
//             var link = $("#link-not-working").offset();
//             $("#reportProblemName").val("");
//             $("#reportProblemEmail").val("");
//             $("#reportProblemMessage").val("");
//             $(".report-problem-form").show();
//             $(".report-problem-form").offset({top:link.top+20, left:link.left-10});
//         } else {
//             reportBadLink("Link Not Working");
//             showReportProblemConfirmation();
//         }
//     });
// });