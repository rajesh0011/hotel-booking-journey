
function CheckNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
}

$("#backemailotpsend").click(function () {
    $("#divemailotp").hide();
    $("#otpdivemail").show();
    $(".radiobox").show();
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSigninmobile").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Sign In');
});

$("#go_backdiv").click(function () {
    $("#errmess").html('');
    $("#signup_formstep-1").show();
    $("#signup_formstep-2").hide();

});
//$("#register_Idmobile").click(function()
//{

////$("#divmobileotp").show();
////$("#otpdivmobile").hide();
//$(".radiobox").hide();
//$("#sign_heading").text('Verify Your Mobile Number');
//});

$("#signInbyMobilepassword").click(function () {
    $("#divmobilepassword").show();
    $("#divmobileotp").hide();
    $("#sign_heading").text('Sign In Password');
});
$("#signInbyEmailpassword").click(function () {
    $("#divemailpassword").show();
    $("#divemailotp").hide();
    $("#sign_heading").text('Sign In Password');
});
$("#loginemailforgot").click(function () {
    //alert("hi");
    $("#divemailforgot").show();
    $("#divmobileforgot").hide();
    $("#forgototpdivemail").show();
    $("#divemailforgototp").hide();

    $("#sign_heading").text('Forgot Password');
});


//$("#register_Idemailforgot").click(function () {
//    $("#forgototpdivemail").hide();
//    $("#divemailforgototp").show();
//    $("#sign_heading").text('Create New Password');
//});
$("#backemailforgototpsend").click(function () {
    $(".radioboxforgot").show();
    $(".radiobox-FE").click();
    $("#forgototpdivemail").show();
    $("#divemailforgototp").hide();
    $("#txtSignInEmailforgototp").val('');
    $("#txtSignInEmailforgotpassword").val('');
    $("#txtforgotmobile").val('');
    $("#txtforgotPhoneOtp").val('');
    $("#txtforgotmobilePassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Forgot Password');
});
$("#loginmobileforgot").click(function () {
    //alert("hi");
    $("#divmobileforgot").show();
    $("#divemailforgot").hide();
    $("#forgototpdivmobile").show();
    $("#divmobileforgototp").hide();
    $("#sign_heading").text('Forgot Password');
});
//$("#register_Idmobileforgot").click(function () {
//    $("#forgototpdivmobile").hide();
//    $("#divmobileforgototp").show();
//    $("#sign_heading").text('Forgot Password');
//});
$("#backemobileforgototpsend").click(function () {
    $("#forgototpdivmobile").show();
    $(".radioboxforgot").show();
    $(".radiobox-fm").click();
    $("#txtforgotPhoneOtp").val('');
    $("#txtforgotmobilePassword").val('');
    $("#txtforgotEmail").val('');
    $("#txtSignInEmailforgototp").val('');
    $("#txtSignInEmailforgotpassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#divmobileforgototp").hide();

    $("#sign_heading").text('Forgot Password');
});


$("#full-backemail").click(function () {
    $("#divemailpassword").hide();
    $("#divemailotp").hide();
    $("#otpdivemail").show();
    $(".radiobox").show();
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSigninmobile").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Sign In');
});
//$("#createstep-1").click(function()
//{

//$("#signup_formstep-1").hide();
//$("#signup_formstep-2").show();


//});




$("#backemobileotpsend").click(function () {

    $("#divmobileotp").hide();
    $("#otpdivmobile").show();
    $(".radiobox").show();
    $("#txtSignInEmail").val('');
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');

    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Sign In');
});
$("#full-backmobile").click(function () {

    $("#divmobileotp").hide();
    $("#otpdivmobile").show();
    $("#divmobilepassword").hide();
    $(".radiobox").show();
    $("#txtSignInEmail").val('');
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Sign In');
});

$(".radiobox-m").click(function () {

    $(".radiobox-m").addClass("active");
    $(".radiobox-E").removeClass("active");
    $("#txtSignInEmail").val('');
});
$(".radiobox-E").click(function () {

    $(".radiobox-E").addClass("active");
    $(".radiobox-m").removeClass("active");
    $("#txtSigninmobile").val('');
});

$(".radiobox-fm").click(function () {

    $(".radiobox-fm").addClass("active");
    $(".radiobox-FE").removeClass("active");
    $("#txtforgotEmail").val('');
    
});
$(".radiobox-FE").click(function () {

    $(".radiobox-FE").addClass("active");
    $(".radiobox-fm").removeClass("active");
    $("#txtforgotmobile").val('');
});

$(".login_btn").click(function () {
    $(".radiobox").show();
    $("#signin_form").show();
    $("#divemail").show();
    //$("#forgot_form1").hide();
    $("#errmess").html('');
    clearfield();
    $("#loginemail").click();
    $("#fortgotpasswordsuccess").hide();
    forgothide();
    $("#signup_form").hide();
    $("#forgot_form").hide();
    $("#sign_heading").text('Sign In');
    $("#A3").hide();
});
function clearfield() {
    $("#txtforgotEmail").val('');
    $("#txtSignInEmailforgototp").val('');
    $("#txtSignInEmailforgotpassword").val('');
    $("#txtforgotmobile").val('');
    $("#txtforgotPhoneOtp").val('');
    $("#txtforgotmobilePassword").val('');
    $("#txtSignInEmail").val('');
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSigninmobile").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#txtSignupEmail").val('');
    $("#txtSignupPhone").val('');
    $("#txtSignupPassword").val('');
    $("#txtsignupFname").val('');
    $("#txtSignupLName").val('');
    $("#txtSignupcity").val('');
    $("#txtSignupPhoneOtp").val('');
    $("#txtSignupEmailOtp").val('');
    $("#A3").hide();
}

$(".register_btn").click(function () {
    //alert("hi");
    $("#signup_form").show();
    $("#signup_formstep-1").show();
    $("#signin_form").hide();
    $("#signup_formstep-2").hide();
    $("#fortgotpasswordsuccess").hide();
    clearfield();
    $("#A3").hide();
    $("#errmess").html('');
    $("#sign_heading").text('Create New Account');
});
$(".forgotPassword").click(function () {
    $("#signup_form").hide();
    $("#signin_form").hide();
    //$("#forgot_form1").hide();
    $("#forgot_form").show();
    $(".radiobox-FE").click();
    
    $("#divemailforgototp").hide();
    $("#divmobileforgototp").hide();
    $("#divemailforgot").show();
    $("#forgototpdivemail").show();
    $(".radioboxforgot").show();
    $("#fortgotpasswordsuccess").hide();
    $("#errmess").html('');
    clearfield();
    $("#A3").hide();
    $("#sign_heading").text('Forgot Password');
});

$("#backemailotpsend_forgot").click(function () {
	
    $("#forgot_form").hide();
    $("#divemailforgototp").hide();	
    $("#divmobileforgototp").hide();	
    $("#signin_form").show();
    $(".radiobox").show();
    $("#errmess").html('');
    $("#A3").hide();
    $("#sign_heading").text('Sign In');
	
});



//$("#verify_email").click(function () {
//    $("#varify_by_mail_or_mobile").show();

//    $("#forgot_form_send_otp").hide();
//});



//$("#varify_forget_otp").click(function () {
//    $("#varify_by_mail_or_mobile").hide();
//    $("#verify_div").show();
//});
function forgothide() {
    $("#divemailforgot").show();
    $("#forgototpdivemail").show();
    $("#divemailforgototp").hide();

    $("#forgototpdivmobile").show();
    $("#divmobileforgototp").hide();
    $("#divmobileforgot").hide();
    $("#fortgotpasswordsuccess").hide();
    $("#A3").hide();
}
$('#signModal').on('hidden.bs.modal', function () {
    //alert("hi");
    clearfield();
    $("#errmess").html('');
    $("#A3").hide();
    $("#signup_form").hide();
    $("#signup_formstep-2").hide();
    $("#signin_form").hide();
    $("#divemailotp").hide();
    $("#divemailpassword").hide();
    $("#divmobile").hide();
    $("#divmobileotp").hide();
    $("#divmobilepassword").hide();
    $("#forgot_form").hide();
    $("#divemailforgototp").hide();
    $("#divmobileforgot").hide();
    $("#divmobileforgototp").hide();
    //$("#divemailforgot").show();
    //$("#forgototpdivemail").show();
    //$("#divemailforgototp").hide();

    //$("#forgototpdivmobile").show();
    //$("#divmobileforgototp").hide();
    //$("#divmobileforgot").hide();
    //$("#fortgotpasswordsuccess").hide();
    //$("#forgot_form").hide();
    //$("#signin_form").hide();
    //$("#signup_form").hide();

    //$("#errmess").html('');
    //$("#signup_form").hide();
    //$("#signin_form").hide();
    //$("#forgot_form").hide();

    $("#txtSignInEmail").val('');
    $("#txtforgotEmail").val('');
    $("#txtSignInEmailforgototp").val('');
    $("#txtSignInEmailforgotpassword").val('');
    $("#txtforgotmobile").val('');
    $("#txtforgotPhoneOtp").val('');
    $("#txtforgotmobilePassword").val('');
    $("#txtSignInEmail").val('');
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSigninmobile").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#txtSignupEmail").val('');
    $("#txtSignupPhone").val('');
    $("#txtSignupPassword").val('');
    $("#txtsignupFname").val('');
    $("#txtSignupLName").val('');
    $("#txtSignupcity").val('');
    $("#txtSignupPhoneOtp").val('');
    $("#txtSignupEmailOtp").val('');
});
$(".signclose").on('click', function () {
    //alert("hi");
    clearfield();
    $("#errmess").html('');
    $("#A3").hide();
    $("#signup_form").hide();
    $("#signup_formstep-2").hide();
    $("#signin_form").hide();
    $("#divemailotp").hide();
    $("#divemailpassword").hide();
    $("#divmobile").hide();
    $("#divmobileotp").hide();
    $("#divmobilepassword").hide();
    $("#forgot_form").hide();
    $("#divemailforgototp").hide();
    $("#divmobileforgot").hide();
    $("#divmobileforgototp").hide();
    //$("#divemailforgot").show();
    //$("#forgototpdivemail").show();
    //$("#divemailforgototp").hide();

    //$("#forgototpdivmobile").show();
    //$("#divmobileforgototp").hide();
    //$("#divmobileforgot").hide();
    //$("#fortgotpasswordsuccess").hide();
    //$("#forgot_form").hide();
    //$("#signin_form").hide();
    //$("#signup_form").hide();

    //$("#errmess").html('');
    //$("#signup_form").hide();
    //$("#signin_form").hide();
    //$("#forgot_form").hide();
   
    $("#txtSignInEmail").val('');
    $("#txtforgotEmail").val('');
    $("#txtSignInEmailforgototp").val('');
    $("#txtSignInEmailforgotpassword").val('');
    $("#txtforgotmobile").val('');
    $("#txtforgotPhoneOtp").val('');
    $("#txtforgotmobilePassword").val('');
    $("#txtSignInEmail").val('');
    $("#txtSignInEmailotp").val('');
    $("#txtSignInEmailPasswprd").val('');
    $("#txtSigninmobile").val('');
    $("#txtSignInPhoneOtp").val('');
    $("#txtSignInPhonePassword").val('');
    $("#txtSignupEmail").val('');
    $("#txtSignupPhone").val('');
    $("#txtSignupPassword").val('');
    $("#txtsignupFname").val('');
    $("#txtSignupLName").val('');
    $("#txtSignupcity").val('');
    $("#txtSignupPhoneOtp").val('');
    $("#txtSignupEmailOtp").val('');
});

$("#loginemail").click(function () {
    //alert("hi");
    $("#divemail").show();
    $("#divmobile").hide();
    $("#errmess").html('');
    $("#A3").hide();

});
$("#loginmobile").click(function () {
    $("#divemail").hide();
    $("#divmobile").show();
    $("#errmess").html('');
    $("#otpdivmobile").show();
    $("#A3").hide();

});



$("#Login_via_Password").click(function () {
    $("#divemail").hide();
    $("#divmobile").show();
    $("#divmobileotp").hide();
    $("#divemailotp").hide();
    $("#A3").hide();

});

///************************************************************************Sign Up Start*********************************************
function CheckCapillaryData() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var RegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var email = $("#txtSignupEmail");
    var Mobile = $("#txtSignupPhone");
    var Password = $("#txtSignupPassword");
    var countryCode = $("#SignupcountryCode");

    if ($.trim(email.val()) == "" || email.val() == "Email") {
        alert("Please enter email id !");
        $("#txtSignupEmail").focus();
        return false;
    }
    else if (!RegEmail.test(email.val())) {
        alert("Please enter a valid Email Id !");
        $("#txtSignupEmail").focus();
        return false;
    }
    else if ($.trim(Mobile.val()) == "" || Mobile.val() == "Enter Mobile") {
        alert('Please enter your Mobile');
        Mobile.focus();
        return false;
    }
    else if (Mobile.val().length < 10) {
        alert('Please enter your valid mobile number');
        Mobile.focus();
        return false;
    }
    else if ($.trim(Password.val()) == "" || Password.val() == "Password") {
        alert('Please enter your password');
        Password.focus();
        return false;
    }

    else if (RegPass.exec(Password.val()) == null) {
        alert('Password 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        Password.focus();
        return false;
    }

    else {

        CheckCapData();
    }
}
function CheckCapData() {
    var email = $("#txtSignupEmail").val();
    var Mobile = $("#txtSignupPhone").val();
    var Password = $("#txtSignupPassword").val();
    var countryCode = $("#SignupcountryCode").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/CheckCapillaryNew',
        data: "{ 'Email':'" + email + "','CountryCode':'" + countryCode + "','Mobile':'" + Mobile + "','Password': '" + Password + "' }",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            //$(".loadingPage").fadeOut();
            if (data.d == "Mobile No. is already exist" || data.d == "Email is already exist" || data.d == "Email and Mobile No. is already exist") {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d)
            }
            else {
                //$("#errmess").html('')
                var t = JSON.parse(data.d);

                var iNum = parseInt(t['createdId']);
                //alert(iNum);
                if (iNum > 0) {

                    $("#signup_formstep-1").hide();
                    $("#signup_formstep-2").show();
                    $(".loadingPage").fadeOut();
                    $("#errmess").html('')
                    //$('#signModal').modal().hide();
                    //$("#ValidateOTPModal").modal('show');

                }

                else {
                    //alet("Error Exist try again");
                    $("#errmess").html(data.d)
                    $(".loadingPage").fadeOut();
                }
            }
            //alert(data.d);
            //if (data.d != "Please Enter Valid Mobile") {

            //    var res = data.d.split('|');

            //    if (res[0] == "Success") {
            //        window.location.href = window.location.href;
            //    }
            //    else {
            //        $("#errmess").html(data.d);
            //        return false;
            //    }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function SignupNow() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    //var RegPhNo = /^[0-9,()-]{1,50}$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var title = $("#ddlTitle");
    var fname = $("#txtsignupFname");
    var lname = $("#txtSignupLName");
    var email = $("#txtSignupEmail");
    var phone = $("#txtSignupPhone");
    var city = $("#txtSignupcity");
    var countrycode = $("#SignupcountryCode");
    var emailcode = $("#txtSignupEmailOtp");
    var mobilecode = $("#txtSignupPhoneOtp");
    var termagree = $("#agree_tmc");

    //if (termagree.prop("checked") == true) {
       
    //    alert("hi");
    //}
    //else {
    //    alert("bye");
    //}
     
    //// var phone = $("#txtSignupPhone").val();
    if ($.trim(fname.val()) == "" || fname.val() == "First Name") {
        alert("Please enter your first name!");
        fname.focus();
        return false;
    }
    else if ($.trim(lname.val()) == "" || lname.val() == "Last Name") {
        alert("Please enter your last name!");
        lname.focus();
        return false;
    }
        //else if (email.val() == "" || email.val() == "Email") {
        //    alert("Please enter your email!");
        //    email.focus();
        //    return false;
        //}
    else if ($.trim(city.val()) == "" || city.val() == "City") {
        alert("Please enter your city!");
        city.focus();
        return false;
    }
    else if ($.trim(mobilecode.val()) == "" || mobilecode.val() == "Enter Mobile OTP") {
        alert("Please enter mobile OTP.!");
        mobilecode.focus();
        return false;
    }
    else if (mobilecode.val().length < 6) {
        alert('Please enter valid mobile OTP');
        mobilecode.focus();
        return false;
    }
    else if ($.trim(emailcode.val()) == "" || emailcode.val() == "Enter Email OTP") {
        alert("Please enter email OTP.!");
        emailcode.focus();
        return false;
    }
    else if (emailcode.val().length < 6) {
        alert('Please enter valid email OTP');
        emailcode.focus();
        return false;
    }
    if (termagree.prop("checked") == false) {
        alert('You must agree to the terms first.');
        termagree.focus();
        return false;
    }
    else {
        SignupNowForUser();
        // alert("Success");

    }
}
function SignupNowForUser() {

    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    //var RegPhNo = /^[0-9,()-]{1,50}$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var title = $("#ddlTitle").val();
    var fname = $("#txtsignupFname").val();
    var lname = $("#txtSignupLName").val();
    var email = $("#txtSignupEmail").val();
    var phone = $("#txtSignupPhone").val();
    var city = $("#txtSignupcity").val();
    var countrycode = $("#SignupcountryCode").val();
    var emailcode = $("#txtSignupEmailOtp").val();
    var mobilecode = $("#txtSignupPhoneOtp").val();
    var password = $("#txtSignupPassword").val();
    var termagree = $("#agree_tmc").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/ValidateOtpSignupNew',
        data: "{ 'Title': '" + title + "', 'FName': '" + fname + "', 'LName': '" + lname + "', 'Email': '" + email + "', 'Mobile': '" + phone + "', 'CityName': '" + city + "', 'CodeMob': '" + mobilecode + "', 'CodeEmail': '" + emailcode + "', 'CountryCode': '" + countrycode + "', 'Password': '" + password + "', 'currenturl': '', 'memberid': '' }",
        contentType: "application/json; charset=utf-8",
        async: true,
        //global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            //alert(data.d);
            //var t = JSON.parse(data.d);

            //var iNum = parseInt(t['createdId']);
            ////alert(iNum);
            
            if (data.d == "Login create successful") {
                $("#errmess").html('');
                $(".loadingPage").fadeOut();
                sendSigninAfterSignUp();
            }
            else {
                $(".loadingPage").fadeOut();
                //alet("Error Exist try again");
                $("#errmess").html(data.d)
            }

        },
        error: function (jqXHR, textStatus, ex) { }
    });
}

function SignUpReIssueOtpForMob() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var phone = $("#txtSignupPhone").val();
    var countrycode = $("#SignupcountryCode").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/IssueOtpMobileNew',
        data: "{ 'Mobile': '" + phone + "', 'CountryCode': '" + countrycode + "' }",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            $(".loadingPage").fadeOut();
            var t = JSON.parse(data.d);

            var iNum = parseInt(t['createdId']);
            //alert(iNum);
            if (iNum > 0) {
                $("#errmess").html('');
            }
            else {
                
                $("#errmess").html(data.d)
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
function SignUpReIssueOtpForEmail() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var email = $("#txtSignupEmail").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/IssueOtpEmailNew',
        data: "{ 'Email': '" + email + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            $(".loadingPage").fadeOut();
            var t = JSON.parse(data.d);

            var iNum = parseInt(t['createdId']);
            //alert(iNum);
            if (iNum > 0) {
                $("#errmess").html('');
            }
            else {
                $("#errmess").html(data.d)
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
///**************************************************************************Sign Up End*********************************************
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function ValidateSignUpQueryForm() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    //var RegPhNo = /^[0-9,()-]{1,50}$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;
    //alert($("#ddlTitle").val());
    var title = $("#ddlTitle").val();
    var Fname = $.trim($("#txtsignupFname").val());
    var Lname = $.trim($("#txtSignupLName").val());
    var email = $.trim($("#txtSignupEmail").val());
    var phone = $.trim($("#txtSignupPhone").val());
    var city = $.trim($("#txtSignupcity").val());
    var countrycode = $("#SignupcountryCode").val();
    var password = $("#txtSignupPassword").val();
   

    //alert(Fname);
    //alert(Lname);
    //alert(phone);
    //alert(city);
    //alert(countrycode);
    //alert(password);

    if (Fname == "" || Fname == "Name") {
        alert("Please enter your first name !");
        $("#txtsignupFname").focus();
        return false;
    }
    else if (Lname == "" || Lname == "Name") {
        alert("Please enter your last name !");
        $("#txtSignupLName").focus();
        return false;
    }
    else if (email == "" || email == "Email") {
        alert("Please enter email id !");
        $("#txtSignupEmail").focus();
        return false;
    }
    else if (!AlphaNumeric.test(email)) {
        alert("Please enter a valid Email Id ! ");
        $("#txtSignupEmail").focus();
        return false;
    }
    else if (!RegEmail.test(email)) {
        alert("Please enter a valid Email Id !");
        $("#txtSignupEmail").focus();
        return false;
    }
    
    else if (phone == "" || phone == "Phone") {
        alert("Please enter your phone no.!");
        $("#txtSignupPhone").focus();
        return false;
    }
    else if (phone.length < 10) {
        alert('Please enter your valid phone no.!');
        $("#txtSignupPhone").focus();
        return false;
    }
    else if (city == "" || city == "City") {
        alert("Please enter your City !");
        $("#txtSignupcity").focus();
        return false;
    }
    else if (password == "" || password == "Password") {
        alert("Please enter password!");
        $("#txtSignupPassword").focus();
        return false;
    }
    else if (!regularExpression.test(password)) {
        alert("Password should min 8 letter password, with at least a symbol, upper and lower case letters and a number !");
        $("#txtSignupEmail").focus();
        return false;
    }
    
    
    else {
        sendSignUpForUser();
        // alert("Success");

    }
}

function sendSignUpForUser() {
    var title = $("#ddlTitle").val();
    var txtName = $("#txtsignupFname").val();
    var LName = $("#txtSignupLName").val();
    var Email = $("#txtSignupEmail").val();
    var Mobile = $("#txtSignupPhone").val();
    var CityName = $("#txtSignupcity").val();
    //var countrycode = $("#SignupcountryCode").val();
    //var code = $("#txtotp").val();
    var password = $("#txtSignupPassword").val();
    var pathname = window.location.pathname;

    $.ajax({
        type: "POST",
        url: "/LoyaltyService.asmx/SingupMemder",
        data: "{Title:'" + title + "',FirstName:'" + txtName + "',LastName:'" + LName + "',Mobile:'" + Mobile + "',Email:'" + Email + "',CityName:'" + CityName + "',MemberPassword:'" + password + "', PageUrl:'" + pathname + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: true,
        global: true,
        async: true,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
            
            $(".loadingPage").fadeIn();
        },
        success: function (response) {
            if (response.d == "Login create successful") {
                $(".loadingPage").fadeOut();
                $("#errmess").html('');
                //alert("Login create successful");
                //window.location.reload();
                sendSigninAfterSignUp();
            } else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(response.d);

            }
            
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function sendSigninAfterSignUp() {

    var email = $("#txtSignupEmail").val();
    var password = $("#txtSignupPassword").val();
    $.ajax({
        type: "POST",
        url: '/LoyaltyService.asmx/SingInEmailMember',
        data: "{ 'Email':'" + email + "','MemberPassword':'" + password + "'}",
        //data: "{'email':'" + $("[id$=_exampleInputEmail]").val() + "','unsub':" + unsub + "}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            //if (data.d != "Please Enter Valid Email/Mobile") {

            var res = data.d.split('|');

            if (res[3] == "Success") {
                $("#errmess").html('');
                SetValueServerSide(res[0], res[1], res[2]);
                //window.location.reload();
                //$(".loadingPage").fadeOut();
                window.location.href = "https://www.aurikahotels.com/?memberid=" + res[4];
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function ValidateSigninQueryForm() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Email = $("#txtSignInEmail");
    var Password = $("#txtSignInEmailPasswprd");
    //if (Email.val() == "" || Email.val() == "Login ID/ Registered Email ID") {
    //    alert('Please enter your Email ID/Mobile');
    //    Email.focus();
    //    return false;
    //}
    //else if (!RegEmail.test(Email.val())) {
    //    alert("Please enter a valid Email ID");
    //    Email.focus();
    //    return false;
    //else 
    if (Password.val() == "" || Password.val() == "Password") {
        alert('Please enter your password');
        Password.focus();
        return false;
    } else {
        sendSigninEmailPassword();
    }

}
function sendSigninEmailPassword() {

    var email = $("#txtSignInEmail").val();
    var password = $("#txtSignInEmailPasswprd").val();
    //var chkRememberMe = $("#SignInremember").val();
    $.ajax({
        type: "POST",
        url: '/LoyaltyService.asmx/SingInEmailMember',
        //contentType: "application/json; charset=utf-8",
        data: "{ 'Email':'" + email + "','MemberPassword':'" + password + "'}",
        //data: "{'email':'" + $("[id$=_exampleInputEmail]").val() + "','unsub':" + unsub + "}",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        //processData: true,
        //global: true,
        //async: true,
        //crossDomain: true,
        //cache: false,
        success: function (data) {
            //alert(data.d);
            //if (data.d != "Please Enter Valid Email/Mobile") {

            var res = data.d.split('|');

            if (res[3] == "Success") {
                $("#errmess").html('')
                SetValueServerSide(res[0], res[1], res[2]);
                //$(".loadingPage").fadeOut();
                //window.location.href = window.location.href;
                window.location.href = "https://www.aurikahotels.com/";
                //window.location.reload();
            }
            else  {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
function SetValueServerSide(sessiontoset1, sessiontoset2, sessiontoset3) {

    var email = $("#txtSignInEmail").val();
    var password = $("#txtSignInPassword").val();
    //var chkRememberMe = $("#chkRememberMe").val();
    $.ajax({
        type: "POST",
        url: '/LoyaltyService.asmx/SessionFunctionName',
        data: "{ 'sessiontoset1':'" + sessiontoset1 + "','sessiontoset2':'" + sessiontoset2 + "','sessiontoset3':'" + sessiontoset3 + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            //alert("session set");
            //window.location.reload();
            //window.location.href = "https://www.aurikahotels.com/";
            // }
            //else {
            //   $("#errmess").html(data.d);
            //  return false;
            // }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
function ValidateSigninQueryFormMobile() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Mobile = $("#txtSigninmobile");
    var Password = $("#txtSignInPhonePassword");
    var countryCode = $("#SignincountryCodeMobile");

    //if (Mobile.val() == "" || Mobile.val() == "Enter Mobile") {
    //    alert('Please enter your Mobile');
    //    Mobile.focus();
    //    return false;
    //}
    //    //else if (!RegEmail.test(Email.val())) {
    //    //    alert("Please enter a valid Email ID");
    //    //    Email.focus();
    //    //    return false;
    if (Password.val() == "" || Password.val() == "Password") {
        alert('Please enter your password');
        Password.focus();
        return false;
    } else {
        sendSigninEmailPasswordMobile();
    }

}
function sendSigninEmailPasswordMobile() {

    var mobile = $("#txtSigninmobile").val();
    var password = $("#txtSignInPhonePassword").val();
    var countryCode = $("#SignincountryCodeMobile").val();
    //var chkRememberMe = $("#SignInrememberMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/LemonLoginMobileNew',
        //contentType: "application/json; charset=utf-8",
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + mobile + "','Passwod':'" + password + "','Isremember': '1' }",
        //data: "{'email':'" + $("[id$=_exampleInputEmail]").val() + "','unsub':" + unsub + "}",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },

        //processData: true,
        //global: true,
        //async: true,
        //crossDomain: true,
        //cache: false,
        success: function (data) {
           
            
            //if (data.d != "Please Enter Valid Mobile") {

            var res = data.d.split('|');

            if (res[0] == "Success") {
                $("#errmess").html('')
                window.location.href = "https://www.aurikahotels.com/";
                //window.location.reload();
                //$(".loadingPage").fadeOut();
               
                //window.location.href = window.location.href;
                //var nurl = window.location.href;
                //alert(nurl);
               // window.location.assign(nurl);
                //$(location).attr('href',nurl);
                //window.location.replace(window.location.href);
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}

///Sign In by Mobile OTP
function SignInOtpMobile() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Mobile = $("#txtSigninmobile");
    //var Password = $("#txtSignInPasswordMobile");
    var countryCode = $("#SignincountryCodeMobile");

    if (Mobile.val() == "" || Mobile.val() == "Enter Mobile") {
        alert('Please enter your Mobile');
        Mobile.focus();
        return false;
    }
    else if (Mobile.val().length < 10) {
        alert('Please enter your mobile number');
        Mobile.focus();
        return false;
    }
    else {
        SignInOtpMobileIssue();
    }

}
function SignInOtpMobileIssue() {

    var mobile = $("#txtSigninmobile").val();
    var countryCode = $("#SignincountryCodeMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/SignInIssueOtpMobileNew',
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + mobile + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
           
            if (data.d == "Mobile no. is not registered") {
                $(".loadingPage").fadeOut();
                $("#errmess").html('Mobile no. is not registered.')
                $("#A3").show();
            }
            else {
                
                var t = JSON.parse(data.d);
                var iNum = parseInt(t['createdId']);
                if (iNum > 0) {
                    $(".loadingPage").fadeOut();
                    $("#errmess").html('');
                    $("#A3").hide();
                    $("#divmobileotp").show();
                    $("#otpdivmobile").hide();
                    $(".radiobox").hide();
                    $("#sign_heading").text('Verify Your Mobile Number');
                }
                else {
                    $("#A3").hide();
                    $(".loadingPage").fadeOut();
                    $("#errmess").html(data.d);
                }
            }

        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
// Sign In by Mobile OTP Validate
function SignInOtpMobileValidate() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Mobile = $("#txtSigninmobile");
    var mobcode = $("#txtSignInPhoneOtp");
    var countryCode = $("#SignincountryCodeMobile");

    if (mobcode.val() == "" || mobcode.val() == "Enter Mobile OTP") {
        alert('Please enter your Mobile OTP');
        mobcode.focus();
        return false;
    }
    if (mobcode.val().length < 6) {
        alert('Please enter valid Mobile OTP');
        mobcode.focus();
        return false;
    }
    else {
        SignInOtpMobileIssueValidate();
    }

}
function SignInOtpMobileIssueValidate() {

    var Mobile = $("#txtSigninmobile").val();
    var mobcode = $("#txtSignInPhoneOtp").val();
    var countryCode = $("#SignincountryCodeMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/SignInIssueOtpMobileValidateNew',
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + Mobile + "','CodeMob':'" + mobcode + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
           
            var res = data.d.split('|');

            if (res[0] == "Success") {
                //$(".loadingPage").fadeOut();
                $("#errmess").html('')
                //window.location.reload();
                window.location.href = "https://www.aurikahotels.com/";
                //window.location.href = window.location.href;
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
///Sign In by Email OTP
function SignInOtpEmail() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Email = $("#txtSignInEmail");

    if (Email.val() == "" || Email.val() == "Enter Email") {
        alert('Please enter your Email ID/Mobile');
        Email.focus();
        return false;
    }
    else if (!RegEmail.test(Email.val())) {
        alert("Please enter a valid Email ID");
        Email.focus();
        return false;
    }
    else {
        //$(".loadingPage").fadeIn();
        SignOtpEmailIssue();
    }

}
function SignOtpEmailIssue() {
    ///$(".loadingPage").fadeIn();
    var email = $("#txtSignInEmail").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/IssueOtpEmailNew',
        data: "{ 'Email':'" + email + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
           
            if (data.d == "Email is not registered") {
                $(".loadingPage").fadeOut();
                $("#errmess").html('Email is not registered.');
                $("#A3").show();
            }
            else
            {
                var t = JSON.parse(data.d);
                var iNum = parseInt(t['createdId']);
                if (iNum > 0) {
                    $(".loadingPage").fadeOut();
                    $("#errmess").html('')
                    $("#A3").hide();
                    $("#divemailotp").show();
                    $("#otpdivemail").hide();
                    $(".radiobox").hide();
                    $("#sign_heading").text('Verify Your Email ID');
                }
                else {
                    $("#A3").hide();
                    $(".loadingPage").fadeOut();
                    $("#errmess").html(data.d)
                }
            }
            
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
// Sign In by Email OTP Validate
function SignInOtpEmailValidate() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Email = $("#txtSignInEmail");
    var emailcode = $("#txtSignInEmailotp");

    if (emailcode.val() == "" || emailcode.val() == "Enter Email OTP") {
        alert('Please enter your Email OTP');
        emailcode.focus();
        return false;
    }
    if (emailcode.val().length < 6) {
        alert('Please enter valid Email OTP');
        emailcode.focus();
        return false;
    }
    else {
        SignInOtpEmailIssueValidate();
    }

}
function SignInOtpEmailIssueValidate() {

    var Email = $("#txtSignInEmail").val();
    var emailcode = $("#txtSignInEmailotp").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/SignInIssueOtpEmailValidateNew',
        data: "{ 'Email':'" + Email + "','CodeEmail':'" + emailcode + "'}",
        async: true,
        global: false,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var res = data.d.split('|');

            if (res[0] == "Success") {

                $("#errmess").html('')
                //$(".loadingPage").fadeOut();
                //window.location.href = window.location.href;
                //window.location.reload();
                window.location.href = "https://www.aurikahotels.com/";
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}

function SignUpIssueOtp() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    //var RegPhNo = /^[0-9,()-]{1,50}$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var title = $("#ddlTitle");
    var fname = $("#txtsignupFname");
    var lname = $("#txtSignupLName");
    var email = $("#txtSignupEmail");
    var city = $("#txtSignupcity");
    var countrycode = $("#SignupcountryCode");
    var phone = $("#txtSignupPhone");

    // alert(phone.val());
    //// var phone = $("#txtSignupPhone").val();
    if (fname.val() == "" || fname.val() == "First Name") {
        alert("Please enter your first name!");
        fname.focus();
        return false;
    }
    else if (lname.val() == "" || lname.val() == "Last Name") {
        alert("Please enter your last name!");
        lname.focus();
        return false;
    }
    else if (email.val() == "" || email.val() == "Email") {
        alert("Please enter your email!");
        email.focus();
        return false;
    }
    else if (city.val() == "" || city.val() == "City") {
        alert("Please enter your city!");
        city.focus();
        return false;
    }
    else if (phone.val() == "" || phone.val() == "Phone") {
        alert("Please enter your phone no.!");
        phone.focus();
        return false;
    }
        //else if (phone.val().length < 10) {
        //    alert('Please enter your valid contact number');
        //    phone.focus();
        //    return false;
        //}

    else {
        sendOTPForUser();
        // alert("Success");

    }
}
function sendOTPForUser() {

    var Mobile = $("#txtSignupPhone").val();
    var Email = $("#txtSignupEmail").val();
    var CountryCode = $("#SignupcountryCode").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/SingupMemderIssueOTPNew',
        data: "{ 'Mobile': '" + Mobile + "', 'Email': '" + Email + "', 'CountryCode': '" + CountryCode + "' }",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {

            var t = JSON.parse(data.d);

            var iNum = parseInt(t['createdId']);
            //alert(iNum);
            if (iNum > 0) {
               
                $("#divotp").show();
                $("#divotp1").show();
                $("#lblotpmob").text('OTP send to mobile-' + $("#txtSignupPhone").val());
                $("#divissueotp").hide();
                $("#register_Id").prop('disabled', false);
                $(".loadingPage").fadeOut();
                $("#errmess").html('');
                //$('#signModal').modal().hide();
                //$("#ValidateOTPModal").modal('show');

            }

            else {
                $(".loadingPage").fadeOut();
                //alet("Error Exist try again");
                $("#errmess").html(data.d)
            }

        },
        error: function (jqXHR, textStatus, ex) { }
    });
}

///************************************************************************Create New Password Start*********************************************
///Create New Password by Mobile OTP
function ForgotOtpMobile() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Mobile = $("#txtforgotmobile");
    //var Password = $("#txtSignInPasswordMobile");
    var countryCode = $("#forgotcountryCodeMobile");
    
    
    if (Mobile.val() == "" || Mobile.val() == "Enter Mobile") {
        alert('Please enter your Mobile');
        Mobile.focus();
        return false;
    }
    else if (Mobile.val().length < 10) {
        alert('Please enter valid Mobile');
        Mobile.focus();
        return false;
    }
    else {
        ForgotOtpMobileIssue();
    }

}
function ForgotOtpMobileIssue() {
    
    
    var mobile = $("#txtforgotmobile").val();
    var countryCode = $("#forgotcountryCodeMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/ForgotMobileIssueOTPNew',
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + mobile + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
           
            var t = JSON.parse(data.d);
            var iNum = parseInt(t['createdId']);
            if (iNum > 0) {
                $("#errmess").html('');
                $("#forgototpdivmobile").hide();
                $("#divmobileforgototp").show();
                $(".radioboxforgot").hide();
                $("#sign_heading").text('Forgot Password');
                $(".loadingPage").fadeOut();
            }
            else {
                $("#errmess").html(data.d);
                $(".loadingPage").fadeOut();
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
// Create New Password by Mobile OTP Validate
function ForgotOtpMobileValidate() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Mobile = $("#txtforgotmobile");
    var mobcode = $("#txtforgotPhoneOtp");
    var countryCode = $("#forgotcountryCodeMobile");
    var password = $("#txtforgotmobilePassword");
    
    
    
    if (mobcode.val() == "" || mobcode.val() == "Enter mobile OTP") {
        alert('Please enter your Mobile OTP');
        mobcode.focus();
        return false;
    }
    if (mobcode.val().length < 6) {
        alert('Please enter valid Mobile OTP');
        mobcode.focus();
        return false;
    }
    if (password.val() == "" || password.val() == "Enter password") {
        alert('Please enter your Mobile OTP');
        mobcode.focus();
        return false;
    }
    else if (RegPass.exec(password.val()) == null) {
        alert('Password 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        password.focus();
        return false;
    }
    else {
        ForgotOtpMobileIssueValidate();
    }

}
function ForgotOtpMobileIssueValidate() {
    var Mobile = $("#txtforgotmobile").val();
    var mobcode = $("#txtforgotPhoneOtp").val();
    var countryCode = $("#forgotcountryCodeMobile").val();
    var password = $("#txtforgotmobilePassword").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/ValidateForgotMobileIssueOTPNew',
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + Mobile + "','Code':'" + mobcode + "','Password':'" + password + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {
            //var res = data.d.split('|');

            if (data.d == "Password Reset Successful.") {
                $(".loadingPage").fadeOut();
                $("#forgot_form").hide();
                $("#fortgotpasswordsuccess").show();
                $("#errmess").html('');
                //ForgotSignInByMobile();
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
function ForgotSignInByMobile() {
    var mobile = $("#txtforgotmobile").val();
    var password = $("#txtforgotmobilePassword").val();
    var countryCode = $("#forgotcountryCodeMobile").val();
    //alert(mobile + "|" + password + "|" + countryCode); 
    //var chkRememberMe = $("#SignInrememberMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/LemonLoginMobileNew',
        //contentType: "application/json; charset=utf-8",
        data: "{ 'CountryCode':'" + countryCode + "','Mobile':'" + mobile + "','Passwod':'" + password + "','Isremember': '1' }",
        //data: "{'email':'" + $("[id$=_exampleInputEmail]").val() + "','unsub':" + unsub + "}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        //processData: true,
        //global: true,
        //async: true,
        //crossDomain: true,
        //cache: false,
        success: function (data) {
            // alert(data.d);
            //if (data.d != "Please Enter Valid Mobile") {

            var res = data.d.split('|');
            
            if (res[0] == "Success") {
                //alert(res[0]);
                $("#errmess").html('');
                $(".loadingPage").fadeOut();
                window.location.href = "https://www.aurikahotels.com/";
                //window.location.reload();
                //window.location.href = window.location.href;
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
///Create New Password by Email OTP
function ForgotOtpEmail() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    //var RegPhNo = /^[0-9,()-]{1,50}$/;
    var RegPhNo = /^\d{10}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var AlphaNumeric = /[0-9a-zA-Z' ']{0,}/;
    var Email = $("#txtforgotEmail");
    //var password = $("#txtSignInEmailforgotpassword");
    if (Email.val() == "" || Email.val() == "Enter Email") {
        alert('Please enter your Email ID');
        Email.focus();
        return false;
    } else if (!AlphaNumeric.test(Email.val())) {
        alert("Please enter a valid Email Id ! ");
        Email.focus();
        return false;
    } else if (!RegEmail.test(Email.val())) {
        alert("Please enter a valid Email Id !");
        Email.focus();
        return false;
    }
    //else if (password.val() == "" || password.val() == "Enter Password") {
    //    alert('Please enter password');
    //    password.focus();
    //    return false;
    //}
    else {
        ForgotOtpEmailIssue();
    }

}
function ForgotOtpEmailIssue() {

    var Email = $("#txtforgotEmail").val();
    //var emailcode = $("#txtSignInEmailforgototp").val();
    //var password = $("#txtSignInEmailforgotpassword").val();
    $.ajax({
        type: "POST",
        url: '/LoyaltyService.asmx/ForgotPasswordEmailMember',
        data: "{ 'Email':'" + Email + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {

            if (data.d == "Password Sent Successfully.") {
                //alert("Password Sent Successfully to your registered email id.");
                //window.location.reload();

                $("#errmess").html('');
                $(".loadingPage").fadeOut();
                $("#forgototpdivemail").hide();
                $("#divemailforgototp").show();
                $(".radioboxforgot").hide();
                $("#sign_heading").text('Forgot Password');

                //ForgotSignInByEmail();
                //window.location.href = window.location.href;
            } else {
                $("#errmess").html(data.d);
                $(".loadingPage").fadeOut();
                return false;
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
// Create New Password by Email OTP Validate
function ForgotOtpEmailValidate() {
    //alert("hi");
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    //var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var RegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    var Email = $("#txtforgotEmail");
    var emailcode = $("#txtSignInEmailforgototp");
    var password = $("#txtSignInEmailforgotpassword");

    if ($.trim(emailcode.val()) == "" || emailcode.val() == "Enter Email Code") {
        alert('Please enter your Email Code');
        emailcode.focus();
        return false;
    }
    //if ($.trim(emailcode.val()).length < 6) {
    //    alert('Please enter valid Email OTP');
    //    emailcode.focus();
    //    return false;
    //}
    if ($.trim(password.val()) == "" || password.val() == "Enter Password") {
        alert('Please enter password');
        password.focus();
        return false;
    }
    else if (RegPass.exec(password.val()) == null) {
        alert('Password 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        password.focus();
        return false;
    }
    else {
        ForgotOtpEmailIssueValidate();
    }

}
function ForgotOtpEmailIssueValidate() {
    
    
    
    var Email = $("#txtforgotEmail").val();
    var emailcode = $("#txtSignInEmailforgototp").val();
    var password = $("#txtSignInEmailforgotpassword").val();
    $.ajax({
        type: "POST",
        url: '/LoyaltyService.asmx/ChangePasswordEmailMember',
        data: "{ 'Email':'" + Email + "','AuthCode':'" + emailcode + "','MemberPassword':'" + password + "'}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        success: function (data) {

            if (data.d == "Password changed Successfully.") {

                alert("Password changed Successfully.");
                $("#errmess").html('');
                $(".loadingPage").fadeOut();
                window.location.reload();
                //ForgotSignInByEmail();
                //window.location.href = window.location.href;
            } else {
                $("#errmess").html(data.d);
                $(".loadingPage").fadeOut();
                return false;
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function ForgotSignInByEmail() {

    var email = $("#txtforgotEmail").val();
    var password = $("#txtSignInEmailforgotpassword").val();
    //var chkRememberMe = $("#SignInrememberMobile").val();
    $.ajax({
        type: "POST",
        url: '/lthloginsignupsignin.asmx/LemonLoginNew',
        //contentType: "application/json; charset=utf-8",
        data: "{ 'UserID':'" + email + "','Passwod':'" + password + "','Isremember': '1' }",
        //data: "{'email':'" + $("[id$=_exampleInputEmail]").val() + "','unsub':" + unsub + "}",
        contentType: "application/json; charset=utf-8",
        async: true,
        beforeSend: function () {
            $(".loadingPage").fadeIn();
        },
        //processData: true,
        //global: true,
        //async: true,
        //crossDomain: true,
        //cache: false,
        success: function (data) {
            // alert(data.d);
            //if (data.d != "Please Enter Valid Mobile") {

            var res = data.d.split('|');

            if (res[0] == "Success") {
                //alert(res[0]);
                $("#errmess").html('');
                $(".loadingPage").fadeOut();
                window.location.href = "https://www.aurikahotels.com/";
                //window.location.reload();
                //window.location.href = window.location.href;
            }
            else {
                $(".loadingPage").fadeOut();
                $("#errmess").html(data.d);
                return false;
            }
            //}
            //else {
            //    $("#errmess").html(data.d);
            //    return false;
            //}
        },
        error: function (jqXHR, textStatus, ex) { }
    });

}
///************************************************************************Create New Password End*********************************************



///* ----------------------------

//	CustomValidation prototype

//	- Keeps track of the list of invalidity messages for this input
//	- Keeps track of what validity checks need to be performed for this input
//	- Performs the validity checks and sends feedback to the front end

//---------------------------- */

//function CustomValidation(input) {
//    this.invalidities = [];
//    this.validityChecks = [];

//    //add reference to the input node
//    this.inputNode = input;

//    //trigger method to attach the listener
//    this.registerListener();
//}

//CustomValidation.prototype = {
//    addInvalidity: function (message) {
//        this.invalidities.push(message);
//    },
//    getInvalidities: function () {
//        return this.invalidities.join('. \n');
//    },
//    checkValidity: function (input) {
//        for (var i = 0; i < this.validityChecks.length; i++) {

//            var isInvalid = this.validityChecks[i].isInvalid(input);
//            if (isInvalid) {
//                this.addInvalidity(this.validityChecks[i].invalidityMessage);
//            }

//            var requirementElement = this.validityChecks[i].element;

//            if (requirementElement) {
//                if (isInvalid) {
//                    requirementElement.classList.add('invalid');
//                    requirementElement.classList.remove('valid');
//                } else {
//                    requirementElement.classList.remove('invalid');
//                    requirementElement.classList.add('valid');
//                }

//            } // end if requirementElement
//        } // end for
//    },
//    checkInput: function () { // checkInput now encapsulated

//        this.inputNode.CustomValidation.invalidities = [];
//        this.checkValidity(this.inputNode);

//        if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
//            this.inputNode.setCustomValidity('');
//        } else {
//            var message = this.inputNode.CustomValidation.getInvalidities();
//            this.inputNode.setCustomValidity(message);
//        }
//    },
//    registerListener: function () { //register the listener here

//        var CustomValidation = this;

//        this.inputNode.addEventListener('keyup', function () {
//            CustomValidation.checkInput();
//        });


//    }

//};

///* ----------------------------

//	CustomValidation prototype

//	- Keeps track of the list of invalidity messages for this input
//	- Keeps track of what validity checks need to be performed for this input
//	- Performs the validity checks and sends feedback to the front end

//---------------------------- */

//function CustomValidation(input) {
//    this.invalidities = [];
//    this.validityChecks = [];

//    //add reference to the input node
//    this.inputNode = input;

//    //trigger method to attach the listener
//    this.registerListener();
//}

//CustomValidation.prototype = {
//    addInvalidity: function (message) {
//        this.invalidities.push(message);
//    },
//    getInvalidities: function () {
//        return this.invalidities.join('. \n');
//    },
//    checkValidity: function (input) {
//        for (var i = 0; i < this.validityChecks.length; i++) {

//            var isInvalid = this.validityChecks[i].isInvalid(input);
//            if (isInvalid) {
//                this.addInvalidity(this.validityChecks[i].invalidityMessage);
//            }

//            var requirementElement = this.validityChecks[i].element;

//            if (requirementElement) {
//                if (isInvalid) {
//                    requirementElement.classList.add('invalid');
//                    requirementElement.classList.remove('valid');
//                } else {
//                    requirementElement.classList.remove('invalid');
//                    requirementElement.classList.add('valid');
//                }

//            } // end if requirementElement
//        } // end for
//    },
//    checkInput: function () { // checkInput now encapsulated

//        this.inputNode.CustomValidation.invalidities = [];
//        this.checkValidity(this.inputNode);

//        if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
//            this.inputNode.setCustomValidity('');
//        } else {
//            var message = this.inputNode.CustomValidation.getInvalidities();
//            this.inputNode.setCustomValidity(message);
//        }
//    },
//    registerListener: function () { //register the listener here

//        var CustomValidation = this;

//        this.inputNode.addEventListener('keyup', function () {
//            CustomValidation.checkInput();
//        });


//    }

//};



///* ----------------------------

//	Validity Checks

//	The arrays of validity checks for each input
//	Comprised of three things
//		1. isInvalid() - the function to determine if the input fulfills a particular requirement
//		2. invalidityMessage - the error message to display if the field is invalid
//		3. element - The element that states the requirement

//---------------------------- */

//var usernameValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 3;
//	    },
//	    invalidityMessage: 'This input needs to be at least 3 characters',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
//	        return illegalCharacters ? true : false;
//	    },
//	    invalidityMessage: 'Only letters and numbers are allowed',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
//	}
//];

//var passwordValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 8 | input.value.length > 100;
//	    },
//	    invalidityMessage: 'This input needs to be between 8 and 100 characters',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[0-9]/g);
//	    },
//	    invalidityMessage: 'At least 1 number is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(2)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[a-z]/g);
//	    },
//	    invalidityMessage: 'At least 1 lowercase letter is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(3)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[A-Z]/g);
//	    },
//	    invalidityMessage: 'At least 1 uppercase letter is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(4)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
//	    },
//	    invalidityMessage: 'You need one of the required special characters',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(5)')
//	}
//];

//var passwordRepeatValidityChecks = [
//	{
//	    isInvalid: function () {
//	        return passwordRepeatInput.value != passwordInput.value;
//	    },
//	    invalidityMessage: 'This password needs to match the first one'
//	}
//];


///* ----------------------------

//	Setup CustomValidation

//	Setup the CustomValidation prototype for each input
//	Also sets which array of validity checks to use for that input

//---------------------------- */

////var usernameInput = document.getElementById('username');
//var passwordInput = document.getElementById('txtSignupPassword');
////var passwordRepeatInput = document.getElementById('password_repeat');

////usernameInput.CustomValidation = new CustomValidation(usernameInput);
////usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

//passwordInput.CustomValidation = new CustomValidation(passwordInput);
//passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

////passwordRepeatInput.CustomValidation = new CustomValidation(passwordRepeatInput);
////passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;




///* ----------------------------

//	Event Listeners

//---------------------------- */

//var inputs = document.querySelectorAll('input:not([type="submit"])');


//var submit = document.querySelector('input[type="submit"');

//var form = document.getElementById('registration');

//function validate() {
//    for (var i = 0; i < inputs.length; i++) {
//        inputs[i].CustomValidation.checkInput();
//    }
//}

//submit.addEventListener('click', validate);
//form.addEventListener('submit', validate);


///* ----------------------------

//	CustomValidation prototype

//	- Keeps track of the list of invalidity messages for this input
//	- Keeps track of what validity checks need to be performed for this input
//	- Performs the validity checks and sends feedback to the front end

//---------------------------- */

//function CustomValidation(input) {
//    this.invalidities = [];
//    this.validityChecks = [];

//    //add reference to the input node
//    this.inputNode = input;

//    //trigger method to attach the listener
//    this.registerListener();
//}

//CustomValidation.prototype = {
//    addInvalidity: function (message) {
//        this.invalidities.push(message);
//    },
//    getInvalidities: function () {
//        return this.invalidities.join('. \n');
//    },
//    checkValidity: function (input) {
//        for (var i = 0; i < this.validityChecks.length; i++) {

//            var isInvalid = this.validityChecks[i].isInvalid(input);
//            if (isInvalid) {
//                this.addInvalidity(this.validityChecks[i].invalidityMessage);
//            }

//            var requirementElement = this.validityChecks[i].element;

//            if (requirementElement) {
//                if (isInvalid) {
//                    requirementElement.classList.add('invalid');
//                    requirementElement.classList.remove('valid');
//                } else {
//                    requirementElement.classList.remove('invalid');
//                    requirementElement.classList.add('valid');
//                }

//            } // end if requirementElement
//        } // end for
//    },
//    checkInput: function () { // checkInput now encapsulated

//        this.inputNode.CustomValidation.invalidities = [];
//        this.checkValidity(this.inputNode);

//        if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
//            this.inputNode.setCustomValidity('');
//        } else {
//            var message = this.inputNode.CustomValidation.getInvalidities();
//            this.inputNode.setCustomValidity(message);
//        }
//    },
//    registerListener: function () { //register the listener here

//        var CustomValidation = this;

//        this.inputNode.addEventListener('keyup', function () {
//            CustomValidation.checkInput();
//        });


//    }

//};



///* ----------------------------

//	Validity Checks

//	The arrays of validity checks for each input
//	Comprised of three things
//		1. isInvalid() - the function to determine if the input fulfills a particular requirement
//		2. invalidityMessage - the error message to display if the field is invalid
//		3. element - The element that states the requirement

//---------------------------- */

//var usernameValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 3;
//	    },
//	    invalidityMessage: 'This input needs to be at least 3 characters',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
//	        return illegalCharacters ? true : false;
//	    },
//	    invalidityMessage: 'Only letters and numbers are allowed',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
//	}
//];

//var passwordValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 8 | input.value.length > 100;
//	    },
//	    invalidityMessage: 'This input needs to be between 8 and 100 characters',
//	    element: document.querySelector('label[for="txtSignInEmailforgotpassword"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[0-9]/g);
//	    },
//	    invalidityMessage: 'At least 1 number is required',
//	    element: document.querySelector('label[for="txtSignInEmailforgotpassword"] .input-requirements li:nth-child(2)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[a-z]/g);
//	    },
//	    invalidityMessage: 'At least 1 lowercase letter is required',
//	    element: document.querySelector('label[for="txtSignInEmailforgotpassword"] .input-requirements li:nth-child(3)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[A-Z]/g);
//	    },
//	    invalidityMessage: 'At least 1 uppercase letter is required',
//	    element: document.querySelector('label[for="txtSignInEmailforgotpassword"] .input-requirements li:nth-child(4)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
//	    },
//	    invalidityMessage: 'You need one of the required special characters',
//	    element: document.querySelector('label[for="txtSignInEmailforgotpassword"] .input-requirements li:nth-child(5)')
//	}
//];

//var passwordRepeatValidityChecks = [
//	{
//	    isInvalid: function () {
//	        return passwordRepeatInput.value != passwordInput.value;
//	    },
//	    invalidityMessage: 'This password needs to match the first one'
//	}
//];


///* ----------------------------

//	Setup CustomValidation

//	Setup the CustomValidation prototype for each input
//	Also sets which array of validity checks to use for that input

//---------------------------- */

////var usernameInput = document.getElementById('username');
//var passwordInput = document.getElementById('txtSignInEmailforgotpassword');
////var passwordRepeatInput = document.getElementById('password_repeat');

////usernameInput.CustomValidation = new CustomValidation(usernameInput);
////usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

//passwordInput.CustomValidation = new CustomValidation(passwordInput);
//passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

////passwordRepeatInput.CustomValidation = new CustomValidation(passwordRepeatInput);
////passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;




///* ----------------------------

//	Event Listeners

//---------------------------- */

//var inputs = document.querySelectorAll('input:not([type="submit"])');


//var submit = document.querySelector('input[type="submit"');
//var form = document.getElementById('registration1');

//function validate() {
//    for (var i = 0; i < inputs.length; i++) {
//        inputs[i].CustomValidation.checkInput();
//    }
//}

//submit.addEventListener('click', validate);
//form.addEventListener('submit', validate);




///* ----------------------------

//	CustomValidation prototype

//	- Keeps track of the list of invalidity messages for this input
//	- Keeps track of what validity checks need to be performed for this input
//	- Performs the validity checks and sends feedback to the front end

//---------------------------- */

//function CustomValidation(input) {
//    this.invalidities = [];
//    this.validityChecks = [];

//    //add reference to the input node
//    this.inputNode = input;

//    //trigger method to attach the listener
//    this.registerListener();
//}

//CustomValidation.prototype = {
//    addInvalidity: function (message) {
//        this.invalidities.push(message);
//    },
//    getInvalidities: function () {
//        return this.invalidities.join('. \n');
//    },
//    checkValidity: function (input) {
//        for (var i = 0; i < this.validityChecks.length; i++) {

//            var isInvalid = this.validityChecks[i].isInvalid(input);
//            if (isInvalid) {
//                this.addInvalidity(this.validityChecks[i].invalidityMessage);
//            }

//            var requirementElement = this.validityChecks[i].element;

//            if (requirementElement) {
//                if (isInvalid) {
//                    requirementElement.classList.add('invalid');
//                    requirementElement.classList.remove('valid');
//                } else {
//                    requirementElement.classList.remove('invalid');
//                    requirementElement.classList.add('valid');
//                }

//            } // end if requirementElement
//        } // end for
//    },
//    checkInput: function () { // checkInput now encapsulated

//        this.inputNode.CustomValidation.invalidities = [];
//        this.checkValidity(this.inputNode);

//        if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
//            this.inputNode.setCustomValidity('');
//        } else {
//            var message = this.inputNode.CustomValidation.getInvalidities();
//            this.inputNode.setCustomValidity(message);
//        }
//    },
//    registerListener: function () { //register the listener here

//        var CustomValidation = this;

//        this.inputNode.addEventListener('keyup', function () {
//            CustomValidation.checkInput();
//        });


//    }

//};



///* ----------------------------

//	Validity Checks

//	The arrays of validity checks for each input
//	Comprised of three things
//		1. isInvalid() - the function to determine if the input fulfills a particular requirement
//		2. invalidityMessage - the error message to display if the field is invalid
//		3. element - The element that states the requirement

//---------------------------- */

//var usernameValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 3;
//	    },
//	    invalidityMessage: 'This input needs to be at least 3 characters',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
//	        return illegalCharacters ? true : false;
//	    },
//	    invalidityMessage: 'Only letters and numbers are allowed',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
//	}
//];

//var passwordValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 8 | input.value.length > 100;
//	    },
//	    invalidityMessage: 'This input needs to be between 8 and 100 characters',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[0-9]/g);
//	    },
//	    invalidityMessage: 'At least 1 number is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(2)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[a-z]/g);
//	    },
//	    invalidityMessage: 'At least 1 lowercase letter is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(3)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[A-Z]/g);
//	    },
//	    invalidityMessage: 'At least 1 uppercase letter is required',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(4)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
//	    },
//	    invalidityMessage: 'You need one of the required special characters',
//	    element: document.querySelector('label[for="txtSignupPassword"] .input-requirements li:nth-child(5)')
//	}
//];

//var passwordRepeatValidityChecks = [
//	{
//	    isInvalid: function () {
//	        return passwordRepeatInput.value != passwordInput.value;
//	    },
//	    invalidityMessage: 'This password needs to match the first one'
//	}
//];


///* ----------------------------

//	Setup CustomValidation

//	Setup the CustomValidation prototype for each input
//	Also sets which array of validity checks to use for that input

//---------------------------- */

////var usernameInput = document.getElementById('username');
//var passwordInput = document.getElementById('txtSignupPassword');
////var passwordRepeatInput = document.getElementById('password_repeat');

////usernameInput.CustomValidation = new CustomValidation(usernameInput);
////usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

//passwordInput.CustomValidation = new CustomValidation(passwordInput);
//passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

////passwordRepeatInput.CustomValidation = new CustomValidation(passwordRepeatInput);
////passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;




///* ----------------------------

//	Event Listeners

//---------------------------- */

//var inputs = document.querySelectorAll('input:not([type="submit"])');


//var submit = document.querySelector('input[type="submit"');
//var form = document.getElementById('registration');

//function validate() {
//    for (var i = 0; i < inputs.length; i++) {
//        inputs[i].CustomValidation.checkInput();
//    }
//}

//submit.addEventListener('click', validate);
//form.addEventListener('submit', validate);



///* ----------------------------

//	CustomValidation prototype

//	- Keeps track of the list of invalidity messages for this input
//	- Keeps track of what validity checks need to be performed for this input
//	- Performs the validity checks and sends feedback to the front end

//---------------------------- */

//function CustomValidation(input) {
//    this.invalidities = [];
//    this.validityChecks = [];

//    //add reference to the input node
//    this.inputNode = input;

//    //trigger method to attach the listener
//    this.registerListener();
//}

//CustomValidation.prototype = {
//    addInvalidity: function (message) {
//        this.invalidities.push(message);
//    },
//    getInvalidities: function () {
//        return this.invalidities.join('. \n');
//    },
//    checkValidity: function (input) {
//        for (var i = 0; i < this.validityChecks.length; i++) {

//            var isInvalid = this.validityChecks[i].isInvalid(input);
//            if (isInvalid) {
//                this.addInvalidity(this.validityChecks[i].invalidityMessage);
//            }

//            var requirementElement = this.validityChecks[i].element;

//            if (requirementElement) {
//                if (isInvalid) {
//                    requirementElement.classList.add('invalid');
//                    requirementElement.classList.remove('valid');
//                } else {
//                    requirementElement.classList.remove('invalid');
//                    requirementElement.classList.add('valid');
//                }

//            } // end if requirementElement
//        } // end for
//    },
//    checkInput: function () { // checkInput now encapsulated

//        this.inputNode.CustomValidation.invalidities = [];
//        this.checkValidity(this.inputNode);

//        if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
//            this.inputNode.setCustomValidity('');
//        } else {
//            var message = this.inputNode.CustomValidation.getInvalidities();
//            this.inputNode.setCustomValidity(message);
//        }
//    },
//    registerListener: function () { //register the listener here

//        var CustomValidation = this;

//        this.inputNode.addEventListener('keyup', function () {
//            CustomValidation.checkInput();
//        });


//    }

//};



///* ----------------------------

//	Validity Checks

//	The arrays of validity checks for each input
//	Comprised of three things
//		1. isInvalid() - the function to determine if the input fulfills a particular requirement
//		2. invalidityMessage - the error message to display if the field is invalid
//		3. element - The element that states the requirement

//---------------------------- */

//var usernameValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 3;
//	    },
//	    invalidityMessage: 'This input needs to be at least 3 characters',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
//	        return illegalCharacters ? true : false;
//	    },
//	    invalidityMessage: 'Only letters and numbers are allowed',
//	    element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
//	}
//];

//var passwordValidityChecks = [
//	{
//	    isInvalid: function (input) {
//	        return input.value.length < 8 | input.value.length > 100;
//	    },
//	    invalidityMessage: 'This input needs to be between 8 and 100 characters',
//	    element: document.querySelector('label[for="txtforgotmobilePassword"] .input-requirements li:nth-child(1)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[0-9]/g);
//	    },
//	    invalidityMessage: 'At least 1 number is required',
//	    element: document.querySelector('label[for="txtforgotmobilePassword"] .input-requirements li:nth-child(2)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[a-z]/g);
//	    },
//	    invalidityMessage: 'At least 1 lowercase letter is required',
//	    element: document.querySelector('label[for="txtforgotmobilePassword"] .input-requirements li:nth-child(3)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[A-Z]/g);
//	    },
//	    invalidityMessage: 'At least 1 uppercase letter is required',
//	    element: document.querySelector('label[for="txtforgotmobilePassword"] .input-requirements li:nth-child(4)')
//	},
//	{
//	    isInvalid: function (input) {
//	        return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
//	    },
//	    invalidityMessage: 'You need one of the required special characters',
//	    element: document.querySelector('label[for="txtforgotmobilePassword"] .input-requirements li:nth-child(5)')
//	}
//];

//var passwordRepeatValidityChecks = [
//	{
//	    isInvalid: function () {
//	        return passwordRepeatInput.value != passwordInput.value;
//	    },
//	    invalidityMessage: 'This password needs to match the first one'
//	}
//];


///* ----------------------------

//	Setup CustomValidation

//	Setup the CustomValidation prototype for each input
//	Also sets which array of validity checks to use for that input

//---------------------------- */

////var usernameInput = document.getElementById('username');
//var passwordInput = document.getElementById('txtforgotmobilePassword');
////var passwordRepeatInput = document.getElementById('password_repeat');

////usernameInput.CustomValidation = new CustomValidation(usernameInput);
////usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

//passwordInput.CustomValidation = new CustomValidation(passwordInput);
//passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

////passwordRepeatInput.CustomValidation = new CustomValidation(passwordRepeatInput);
////passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;




///* ----------------------------

//	Event Listeners

//---------------------------- */

//var inputs = document.querySelectorAll('input:not([type="submit"])');


//var submit = document.querySelector('input[type="submit"');
//var form = document.getElementById('registration2');

//function validate() {
//    for (var i = 0; i < inputs.length; i++) {
//        inputs[i].CustomValidation.checkInput();
//    }
//}

//submit.addEventListener('click', validate);
//form.addEventListener('submit', validate);


