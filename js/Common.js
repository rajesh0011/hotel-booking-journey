
$(document).ready(function () {
if(window.location.href=="https://www.lemontreehotels.com/hotel#home-dine")
{
	$('.dining_menu').trigger("click");
}
else if(window.location.href=="https://www.lemontreehotels.com/hotel#home-events")
{
	$('.event_menu').trigger("click");
}
if (window.location.href.includes("udaipur-hotels")) {
    $("#Footer_ddEventhotels option[value='Coorg']").each(function () {
        $(this).remove();
    });
    //$("#ddHotel").children("option:selected").val('9926')
    $("#ddHotel").children('[value="9926"]').attr('selected', true);
}
else if (window.location.href.includes("coorg-hotels")) {
    $("#Footer_ddEventhotels option[value='Udaipur']").each(function () {
        $(this).remove();
    });
    $("#ddHotel").children('[value="35402"]').attr('selected', true);
}
    $('[data-toggle="tooltip"]').tooltip();

    $(".msignin").hover(function () {
        $(".tolltip-show").show();
    }); 
});
$('.navbar-nav li a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
					
			




                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                       /*  $target.attr('tabindex', '-1'); 
                        $target.focus(); */ 
                    };
                });
            }
        }
    });
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
$(document).ready(function () {
    $('.mtAlertBannerCloseTippy').on('click', function () { 
	$("#mtAlertBanner").hide(); 
	  $('.booking_engine').addClass('booking_engines');
	
	});
	
    if ($(window).width() < 667) {
        $('.w_a_d_carousel').addClass('hotel_slider');
        $('.w_a_d_carousel').addClass('owl-carousel');
    }

    var sesspromos = sesstier;
    //var signup1 = signup;
   
    var promo1;
    if (sesspromos != "" && sesspromos != null) {
        $(".myaccout").show();
        $("#TopMenu_DivSignin").show();
        $("#HomeTopMenu_DivSignin").show();
        //promo1 = 'AurikaSmiles';
        //if (sesspromos == "Gold") {
        //    promo1 = 'LTSGOLD';
        //}
        //if (sesspromos == "Silver") {
        //    promo1 = 'LTSSILVER';
        //}
        //if (sesspromos == "Platinum") {
        //    promo1 = 'LTSPLAT';
        //}
        $(".book_now_btn").addClass("msignin");

    }
    else {
        $(".book_now_btn").attr("title", "");
    }
    $(".book_now_btn").click(function () {
        var sesspromos = sesstier;
        //var signup1 = signup;
        var promo1;
        if (sesspromos != "" && sesspromos != null) {
            $(".promoshow").show();
        }
    });
   
    //else if (signup1 != "" && signup1 != null) {
    //    promo1 = 'LTSMILES';
    //}

    //$('.hotel_slider').owlCarousel({
    //    loop: false,
    //    margin: 10,
    //    autoplay: true,
    //    nav: true,
    //    navText: ['<', '>'],
    //    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    //});

    $("button.close").click(function(){
        $(".modal").hide();
        $(".modal-backdrop").hide();
    });

});
$(document).on("click", ".grid5", function () {
    var vistarapromo = $(this).data('title');
    //alert(dineTitle);

    //alert(HotelName);
    $("#myModal #promovisrata").val(vistarapromo);

});
function browsehotel() {
    var h = $("#ddhotels").val();
    if (h == "0") {
        alert("Please select your city");
        $("#ddhotels").focus();
        return false;
    }
    else {
        if (h == "Udaipur") {
            //window.location = "https://aurikahotels.com/udaipur-hotels/";
           window.location = "https://www.aurikahotels.com/udaipur-hotels.php";
        }
        else if (h == "Coorg") {
            //window.location = "https://aurikahotels.com/coorg-hotels/";
            window.location = "https://www.aurikahotels.com/coorg-resorts.php";
        }  else if (h == "Mumbai") {
            //window.location = "https://aurikahotels.com/coorg-hotels/";
            window.location = "https://www.aurikahotels.com/aurika-mumbai-airport.php";
        }
    }
}
function ValidateSigninQueryForm() {
    var a = $("#txtEmails"),
        e = $("#txtpwds");
    //alert(a.val());
    return "" == a.val() ? (alert("Please enter your Email ID"), a.focus(), !1) : /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(a.val()) ? "" == e.val() ? (alert("Please enter your password"), e.focus(), !1) : (GetLogindetails()) : (alert("Please enter a valid Email ID"), a.focus(), !1)

}
function getPushSignin() { _gaq.push(["_trackEvent", "LTSMILE", "Sign_In", "OfferPage"]) }
function GetLogindetails() {
    //$("#divsigninloader").show();
    //alert("hi");
    $.ajax({
        type: "POST",
        url: "AurikaServices.ASMX/ValidateNetCaretLogin",
        data: "{UserID:'" + $("#txtEmails").val() + "',Passwod:'" + $("#txtpwds").val() + "',Isremember:'" + $("#chkRememberMe").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: true,
        crossDomain: true,
        global: true,
        async: true,
        success: function (response) {
           // alert(response.d);
            var res = response.d.split('|');

            if (response.d.indexOf("lt_carrot.htm") > -1) {
                window.location.href = response.d;
            }
            else if (res[0] == "Success") {

                var res = response.d.split('|');
                if (res[0] == "Success") {

                    //alert(window.location.href);
                    var url = window.location.href.split('?');
                    //window.location.href = url[0] + "?GUID=" + res[1];
                    if (res[2] == "Gold" || res[2] == "Silver" || res[2] == "Platinum") {
                        //alert(res[1]);
                        window.location.href =  window.location.href + "?GUID=" + res[1];

                        //window.location.href = "/"+res[2]+".aspx?GUID=" + res[1];
                        //window.location.href = window.location.href.replace(window.location.href, "https://www.lemontreehotels.com/") + res[2] + ".aspx?GUID=" + res[1];
                    }
                }

            }
            else {
                //setTimeout(function () { alert("Hello"); }, 3000);
                //$("#divsigninloader").hide();
                setTimeout(function () { alert(response.d); }, 100);

                return false;
            }

        },
        error: function (xhr, errorType, exception) {

        }
    });

}
function ValidateSignUpQueryForm1() {
     //alert('hi');
    //  $("#divsigninloaders").show();
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    // var RegPhNo = /^[0-9,()-]{1,50}$/;
    var mobile_pattern = /^[1-9]{1}[0-9]+/;
    // var found = mobile.match(mobile_pattern);
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

    var FName = $("#txtName");
    var LName = $("#txtLName");
    var Mobile = $("#txtPhone");
    var Email = $("#txtEmail");

    //var City = $("[id$=_txtcity]");


    ////var dd = ddDate.val().length < 2 ? "0" + ddDate.val() : ddDate.val();
    ////var mm = ddmonth.val().length < 2 ? "0" + ddmonth.val() : ddmonth.val()
    ////var yy = ddYear.val();
    ////var gdate = dd + "/" + mm + "/" + yy;

    //var checkdate1 = CheckDate1(gdate);

    if (FName.val() == '' || FName.val() == 'First Name') {
        alert('Please enter your First Name!');
        FName.focus();
        return false;
    }
    else if (LName.val() == "" || LName.val() == "Last Name") {
        alert('Please enter your Last Name!');
        LName.focus();
        return false;
    }
    
        //else if (!mobile_pattern.match(Mobile.val())) {
        //    alert('Mobile no. can not be started with zero!');
        //    Mobile.focus();
        //    return false;
        //}
    //else if (Mobile.val().length < 10) {
    //    alert('Please enter your Valid Mobile No!');
    //    Mobile.focus();
    //    return false;
    //}
    else if (Mobile.val() == "" || Mobile.val() == "Contact No") {
        alert('Please enter your Contact No!');
        Mobile.focus();
        return false;

    }
    else if (Email.val() == "" || Email.val() == "Email Id") {
        alert('Please enter your Email ID!');
        Email.focus();
        return false;
    }

    else if (!RegEmail.test(Email.val())) {
        alert("Please enter a valid Email ID.");
        Email.focus();
        return false;
    }

        //else if (City.val() == "") {
        //    alert("Please enter a your city.");
        //    City.focus();
        //    return false;
        //}

    else {
        //alert("hi");
        //$("#divsigninloaders").css("display", "block");
        sendSignUpForUser();
        //$("#signModal .close").click();
        //$("#signModal").modal("hide");
		 
    }

}
function sendSignUpForUser() {
    var title = $("#ddlTitle").val();
    var txtName = $("#txtName").val();
    var LName = $("#txtLName").val();
    var Email = $("#txtEmail").val();
    var Mobile = $("#txtPhone").val();
    var CityName = $("#txtcity").val();
    $.ajax({
        type: "POST",
        url: "AurikaServices.ASMX/SingupMemderShipNetcarret",
        data: "{Title:'" + title + "',FName:'" + txtName + "',LName:'" + LName + "',Email:'" + Email + "',Mobile:'" + Mobile + "',CityName:'" + CityName + "',currenturl:'Home',memberid:'abc123'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: true,
        crossDomain: true,
        global: true,
        async: true,
        success: function (response) {
            // alert(response.d);
            if (response.d == 'fail') {
                alert("Email ID/Phone Number Already Exists \nSign In to unlock your deal");
            }
            if (response.d == 'Success') {
               
                jQuery.noConflict();
                $('.modal').each(function () {
                    $(this).modal('hide');
                   
                });
                setTimeout(function() {
                    alert("Signup Successfully");
                    window.location.reload(true);
                }, 3000);
               
               
                //$('#modal2').hide();
               // $('#drdbookingengine').show();

            }

            /*var res = response.d.split('|');
            if (response.d.indexOf("lt_carrot.htm") > -1) {
                //window.location.href = response.d;
            }
            else if (res[0] == "Success") {
                //var url = window.location.href.split('?');
                //$('#signbthfooter').hide();
                //$('#signbthfooter1').show();
                //window.location.href = url[0] + "?GUID=" + res[1];
                //window.location.href = "https://m.lemontreehotels.com/?GUID=" + res[1];
            }
            else {
                alert(response.d);
            }*/
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function validateemail() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

    //var email = $("[id$=_txtemail]");
    var email = $("#txtemailSubs");
    var termagree = $("#checkSubscribeEmail");
    //alert(email.val());
    if (email.val() == "") {
        alert('Please enter your Email ID');
        email.focus();
        return false;
    }
    else if (!RegEmail.test(email.val())) {
        alert("Please enter a valid Email ID");
        email.focus();
        return false;
    }
    else if (termagree.prop("checked") == false) {
        alert('You must agree to the privacy policy first.');
        termagree.focus();
        return false;
    }

    else {
        sendSubscriptionEmail();
        return true;
    }
}
function validateemailmob() {
    var RegEx = /^[a-zA-Z][a-zA-Z ]+$/;
    var RegexSpecialCharacter = /^[a-zA-Z][a-zA-Z ][0-9]+$/;
    var RegEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    var RegPhNo = /^[0-9,()-]{1,50}$/;
    var WebSiteExp = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

    //var email = $("[id$=_txtemail]");
    var email = $("#txtemailSubsmob");
    //alert(email.val());
    if (email.val() == "") {
        alert('Please enter your Email ID');
        email.focus();
        return false;
    }
    else if (!RegEmail.test(email.val())) {
        alert("Please enter a valid Email ID");
        email.focus();
        return false;
    }

    else {
        sendSubscriptionEmailmob();
        return true;
    }
}
   
function offerbook(BEUrl) {
    var hotel = BEUrl;
    
        var sesspromos = sesstier;
        var signup1 = signup;
        var promo1;
        if (sesspromos != "" && sesspromos != null) {
            //promo1 = 'AurikaSmiles';
            if (sesspromos == "Gold") {
                promo1 = 'LTSGOLD';
            }
            if (sesspromos == "Silver") {
                promo1 = 'LTSSILVER';
            }
            if (sesspromos == "Platinum") {
                promo1 = 'LTSPLAT';
            }
        }
        else if (signup1 != "" && signup1 != null) {
            promo1 = 'LTSMILES';
        }
        else {
            promo1 = ''
        }
        if (sessPromoCode != "" && sessPromoCode != null) {
            promo1 = 'S3P2';
        }
       
        window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=" + hotel + "&level=hotel&locale=en-US&rooms=1&shell=RBE2&start=availresults&template=RBE&promo=" + promo1);
        //if (hotel == "9926") {
        //    //window.open("https://be.synxis.com/?Chain=7710&Hotel=" + hotel + "&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&theme=initialTheme&config=initialConfig&themeCache=false&clearcache=all&notrack=true');
        //    window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=" + hotel + "&template=RBE&shell=RBE2&start=availresults&locale=en-US&promo=" + promo1 );
        //}
        //else {
        //    window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=" + hotel + "&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&start=availresults&locale=en-US');
        //    //window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=" + hotel + "&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=LTSSILVER&start=availresults&locale=en-US');
        //}
}
function booknow() {
    var hotel = $("#ddHotel").val();
    var checkin = $("#dp1").val();
    var checkout = $("#dp2").val();
    var rooms = $("#rooms").val();
    var adul = $("#adults").val();
    var chil = $("#children").val();
    if (hotel == "" || hotel == "0") {
        alert("Please select hotel");
        return false;
    }
    else if (checkin == "") {
        alert("Please select a checkin date");
        return false;
    }
    else if (checkout == "") {
        alert("Please select a checkout date");
        return false;
    }
    /*else if (rooms == "" || rooms == "0") {
        alert("Please select rooms");
        return false;
        //adul1 = "1";
        // return false;

    }*/
   /* else if (adul == "" || adul == "0") {
        alert("Please select no of adults");
        return false;
        //adul1 = "1";
        //return false;

    }*/
        /* else if (chil == "" ) {
            alert("Please select no of childs");
            return false;
            chil = "1";
            //return false;
        } */
    else {
        var sesspromos = sesstier;
        var signup1 = signup;
        var promo1;
        if (sesspromos != "" && sesspromos != null)  {
            //promo1 = 'AurikaSmiles';
            if (sesspromos == "Gold") {
                promo1 = 'LTSGOLD';
            }
            if (sesspromos == "Silver") {
                promo1 = 'LTSSILVER';
            }
            if (sesspromos == "Platinum") {
                promo1 = 'LTSPLAT';
            }
        }
        else if (signup1 != "" && signup1 != null) {
            promo1 = 'LTSMILES';
        }
        else {
            promo1 = ''
        }
        if (sessPromoCode != "" && sessPromoCode != null) {
            promo1 = 'S3P2';
        }
        //alert(promo1);
        var Geturl = window.location.href;
        var checkin1 = new Date($("#dp1").val());
        var checkout1 = new Date($("#dp2").val());
        var d1 = new Date();
        var d2 = new Date(checkin1);

        var timeDiff = d2.getTime() - d1.getTime();
        var DaysDiff = timeDiff / (1000 * 3600 * 24);

        var sla
        if (DaysDiff <= 3) {
            sla = 'B3';
        }
        else if (DaysDiff > 3 && DaysDiff <= 7) {
            sla = 'B7';
        }
        else if (DaysDiff > 7 && DaysDiff <= 15) {
            sla = 'B15';
        }
        else if (DaysDiff > 15) {
            sla = 'B25';
        }
        $.ajax({
            url: 'AurikaServices.ASMX/SaveBookingDetailslive2019',
            data: "{hotelname: 'Udaipur' , checkIn:'" + checkin + "', checkOut:'" + checkout + "', Rooms:'" + rooms + "', Adult:'" + adul + "', PromoCode:'" + promo1  + "',BookUrl:'" + Geturl + "', Bookingname:'Aurika',BookDevice:'Desktop',Bucket:'" + sla + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "POST",
            success: function (data) {
                // getAllEmployees();
                // alert('hi' + data.d);
            },
            error: function (err) {
                // alert("error");
            }
        });
        //window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel="+ hotel +"&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&start=availresults&locale=en-US', true);
        if (hotel == "35402") {
            window.open("https://be.synxis.com/?Chain=7710&Hotel=" + hotel + "&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&theme=initialTheme&config=initialConfig&themeCache=false&clearcache=all&notrack=true');
            //window.open("https://be.synxis.com/?Chain=7710&Hotel=" + hotel + "&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=LTSSILVER&theme=initialTheme&config=initialConfig&themeCache=false&clearcache=all&notrack=true');
        }
        else {
            window.open("https://gc.synxis.com/rez.aspx?Chain=10237&Hotel=" + hotel + "&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&start=availresults&locale=en-US');
            //window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=" + hotel + "&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=LTSSILVER&start=availresults&locale=en-US');
        }
        
       // window.open("https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=9926&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&Adult=' + adul + '&Child=' + chil + '&Rooms=' + rooms + '&rlsa=' + sla + '&promo=' + promo1 + '&start=availresults&locale=en-US', true);
        //https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=67971&template=RBE&shell=RBE&arrive=10/14/2019&depart=10/15/2019&Adult=1&Rooms=1&promo=&clientId=1195242392.1570117164&rlsa=B7&start=availresults&locale=en-US
        //return true;
    }
}
function booknowvistara() {
    var checkin = $("#dp3").val();
    var checkout = $("#dp4").val();
    var promo = $("#promovisrata").val();
  

    //alert(chil);
    if (checkin == "") {
        alert("Please select a checkin date");
        $("#dp3").focus();
        return false;
    }
    else if (checkout == "") {
        alert("Please select a checkout date");
        $("#dp4").focus();
        return false;
    }
    else if (promo == "") {
        alert("Please enter promo code");
        $("#promovisrata").focus();
        return false;
    }
       
    else {
        
        var checkin1 = new Date($("#dp3").val());
        var checkout1 = new Date($("#dp4").val());
        var d1 = new Date();
        var d2 = new Date(checkin1);

        var timeDiff = d2.getTime() - d1.getTime();
        var DaysDiff = timeDiff / (1000 * 3600 * 24);

        
        window.location.href= "https://gc.synxis.com/rez.aspx?Chain=7710&Hotel=9926&template=RBE&shell=RBE2&arrive=" + checkin + '&depart=' + checkout + '&promo=' + promo + '&start=availresults&locale=en-US';
    }
}
function sendSubscriptionEmail() {
    var email = $('#txtemailSubs').val();
    $.ajax({
        type: "POST",
        url: "AurikaServices.ASMX/Subscription",
        data: "{Email:'" + email + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: true,
        global: true,
        async: true,
        crossDomain: true,
        cache: false,
        success: function (response) {
            // alert(response.d);
            if (response.d == 'fail') {
                alert("Emailid Already Exists");
            }
            if (response.d == 'Success') {
                $('#txtemailSubs').val('')
                alert("Sign Up Enquiry Submitted Successfully");
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function sendSubscriptionEmailmob() {
    var email = $('#txtemailSubsmob').val();
    $.ajax({
        type: "POST",
        url: "AurikaServices.ASMX/Subscription",
        data: "{Email:'" + email + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: true,
        global: true,
        async: true,
        crossDomain: true,
        cache: false,
        success: function (response) {
            // alert(response.d);
            if (response.d == 'fail') {
                alert("Emailid Already Exists");
            }
            if (response.d == 'Success') {
                $('#txtemailSubsmob').val('')
                alert("Sign Up Enquiry Submitted Successfully");
            }
        },
        error: function (jqXHR, textStatus, ex) { }
    });
}
function eventFormValidate() {
    //var name = document.eventForm.name;
    //var email = document.eventForm.email;
    //var phone = document.eventForm.phone;
    //var no_of_guest = document.eventForm.no_of_guest;
    //var city = document.eventForm.city;
    var hotelname = $("#Footer_ddEventhotels");
    var name = $("#Footer_EventName");
    var email = $("#Footer_EventEmail");
    var phone = $("#Footer_EventPhone");
    var no_of_guest = $("#Footer_EventGuest");
    var city = $("#Footer_EventCity");
  
    if (hotelname.val() == "0") {
        alert("Please select hotel name");
        return false;
    }
    else
    if (!validate_name_inline(name)) {
        return false;
    }
    else if (!validate_email_inline(email)) {
        return false;
    }
    else if (!validate_mobile_inline(phone)) {
        return false;
    }
    else if (!validate_subject_inline(city)) {
        return false;
    }
    else if (!validate_guest_inline(no_of_guest)) {
        return false;
    }
    //else {
    //    SendEventMail();
    //}
}
//function SendEventMail() {
//    //window.location.href = " https://www.lemontreehotels.com/birthday-venue-in-jammu.aspx";
//    //$("lblmice").text("Your Query is Submited");
//    var url = window.location.href
  
//    $.post(url, { Name: $("#EventName").val(), Email: $("#EventEmail").val(), Phone: $("#EventPhone").val(), NoOfGuest: $("#EventGuest").val(), City: $("#EventCity").val() },
//                   function (data) {
//                       //alert(data.d);
//                       //window.location.href = "thankyou";
//                       //$("#list").html(data);

//                       //alert("Your Query is Submited");
//                   });


//   $("#EventName").val('');
//   $("#EventEmail").val('');
//   $("#EventPhone").val('');
//   $("#EventGuest").val('');
//   $("#EventCity").val('');


//}
function contactFormValidate() {
    //var name = document.contactForm.name;
    //var email = document.contactForm.email;
    //var contact = document.contactForm.phone;
    //var subject = document.contactForm.subject;
    //var txtmessage = document.contactForm.message;
    var name = $("#txtname");
    var email = $("#txtemail");
    var contact = $("#txtphone");
    var subject = $("#txtsubject");
    var txtmessage = $("#txtmessage");

    if (!validate_name_inline(name)) {
        return false;
    }
    else if (!validate_subject_inline(subject)) {
        return false;
    }
    else if (!validate_mobile_inline(contact)) {
        return false;
    }
    else if (!validate_email_inline(email)) {
        return false;
    }
    else if (!validate_required_inline(txtmessage)) {
        return false;
    }
    else {
        SendContactMail();
    }
}
function SendContactMail() {
    //window.location.href = " https://www.lemontreehotels.com/birthday-venue-in-jammu.aspx";
    //$("lblmice").text("Your Query is Submited");
    var url = window.location.href
  
    $.post(url, { ContactName: $("#txtname").val(), Email: $("#txtemail").val(), Phone: $("#txtphone").val(), Subject: $("#txtsubject").val(), Message: $("#txtmessage").val() },
                   function (data) {
                       window.location.href = "https://www.lemontreehotels.com/thankyou";
                       //$("#list").html(data);

                       //alert("Your Query is Submited");
                   });


    $("#txtname").val('');
    $("#txtemail").val('');
    $("#txtphone").val('');
    $("#txtsubject").val('');
    $("#txtmessage").val('');


}
$(function () {
    $('input[type="number"]').on("keypress", function (event) {
        // neglect e in number
        if (event.key !== undefined && event.key === "e" || event.key === "-") {
            // Handle the event with KeyboardEvent.key = e
            event.preventDefault();
        }
        if (typeof $(this).attr('maxLength') != "undefined") {
            var maxLength = $(this).attr('maxLength');
            return $(this).val().length < maxLength;
        }
    });
})
function validate_requirednew_inline(ele_id, msg) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        var msg11 = typeof msg != 'undefined' ? msg : 'Please enter this';

        showErr(msg11, ele_id);
        $(ele_id).focus();
        return false;
    }
    var msg22 = 'Only A-Z character allowed';

    var iChars = "~`!@#$%^&*()+=-\_[]1234567890\\\';,./{}|\":<>?";
    for (var i = 0; i < $(ele_id).val().length; i++) {
        if (iChars.indexOf($(ele_id).val().charAt(i)) != -1) {
            showErr(msg22, ele_id);
            $(ele_id).focus();
            return false;
        }
    }
    return true;
}
function validate_name_inline(ele_id, msg) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        var msg1 = typeof msg != 'undefined' ? msg : 'Enter Name';

        showErr(msg1, ele_id);
        $(ele_id).focus();
        return false;
    }
    var msg2 = 'Only A-Z character allowed';

    var iChars = "~`!@#$%^&*()+=-\_[]1234567890\\\';,./{}|\":<>?";
    for (var i = 0; i < $(ele_id).val().length; i++) {
        if (iChars.indexOf($(ele_id).val().charAt(i)) != -1) {
            showErr(msg2, ele_id);
            $(ele_id).focus();
            return false;
        }
    }
    return true;
}
function validate_subject_inline(ele_id, msg) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        var msg1 = typeof msg != 'undefined' ? msg : 'Enter Subject';

        showErr(msg1, ele_id);
        $(ele_id).focus();
        return false;
    }
    var msg2 = 'Only A-Z character allowed';

    var iChars = "~`!@#$%^&*()+=-\_[]1234567890\\\';,./{}|\":<>?";
    for (var i = 0; i < $(ele_id).val().length; i++) {
        if (iChars.indexOf($(ele_id).val().charAt(i)) != -1) {
            showErr(msg2, ele_id);
            $(ele_id).focus();
            return false;
        }
    }
    return true;
}
function validate_guest_inline(ele_id, msg) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        var msg1 = typeof msg != 'undefined' ? msg : 'Enter No. of Guests';

        showErr(msg1, ele_id);
        $(ele_id).focus();
        return false;
    }
    return true;
}

function validate_email_inline(ele_id) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        showErr('Please enter email id.', ele_id);
        $(ele_id).focus();
        return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(ele_id).val().trim()))) {
        showErr('Invalid email id!', ele_id);
        $(ele_id).focus();
        return false;
    }
    return true;
}

function validate_mobile_inline(ele_id) {
    removeErr();
    if ($(ele_id).val().trim() == '') {
        showErr('Please enter Phone no.', ele_id);
        $(ele_id).focus();
        return false;
    }
    if (isNaN($(ele_id).val()) || /[\-\.\+]/.test($(ele_id).val()) || !(/^[0-9]*/.test($(ele_id).val()))) {
        showErr('Enter only numeric values.', ele_id);
        $(ele_id).focus();
        return false;
    }
    if ($(ele_id).val().length != 10) {
        showErr("Enter Minimum 10 digits", ele_id);
        $(ele_id).focus();
        return false;
    }
    return true;
}

function validate_required_inline(ele_id, msg) {
    if ($(ele_id)[0].localName == "textarea")
        $(ele_id).parent().addClass('err-textarea');

    removeErr();
    if ($(ele_id).val() === null) {
        showErr(msg, ele_id);
        $(ele_id).focus();
        return false;
    }
    if ($(ele_id).val().trim() == '') {
        showErr(msg, ele_id);
        $(ele_id).focus();
        return false;
    }
    return true;
}

function showErr(msg, element) {
    $('<span class="error"></span>').appendTo($(element).parent());
    $(element).addClass('invalid')
    .siblings('.error').text(msg);
}
function removeErr() {
    $('.error').siblings('input, textarea').removeClass('invalid');
    $('.error').remove();
}

 



 function SetDisclaimercookies() {
    $.cookie('Disclaimer', 'yes', { path: '/', expires: 30 });
    $('#disclaimerpop').modal('toggle');
}
function SetAcceptCookies() {
    $.cookie('AcceptCookies1', 'yes', { path: '/', expires: 30 });
    $('.cookie-popup').addClass('cookie-popup--accepted');
}

window.onload = checkcookienew();
function checkcookienew() {
   
    var Disclaimer = $.cookie('Disclaimer');
    var AccCookies = $.cookie('AcceptCookies1');
    if ($.cookie('AcceptCookies1')===null || typeof ($.cookie('AcceptCookies1')) === 'undefined') {
        $('.cookie-popup').addClass('cookie-popup--not-accepted');
    }
    else if (AccCookies === 'yes') {
        
        $('.cookie-popup').addClass('cookie-popup--accepted');
    }

    if ($.cookie('Disclaimer')===null || typeof ($.cookie('Disclaimer')) === 'undefined') {
    // if (typeof $.cookie('Disclaimer') === 'undefined') {
 
        var delayMs = 1500; // delay in milliseconds

        setTimeout(function () {
            $('#disclaimerpop').modal('show');
        }, delayMs);
    }
}

$(".wifi-access").click(function () {
    $("#wifi-access-popup").toggle();
}); 
$(".wifi-access").mouseover(function(){
        $("#wifi-access-popup").css("display", "flex");
});
$(".wifi-access").mouseout(function(){
        $("#wifi-access-popup").css("display", "none");
});

$('#wifi-access-popup').show();
setTimeout(function() {
    $('#wifi-access-popup').fadeOut(400);
}, 5000);
