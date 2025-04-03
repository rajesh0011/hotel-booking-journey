$(document).ready(function () {
    //var today = new Date("10/29/2019");
    var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

     //   var tomorrow = today.getDate + 1 Date();
	var tomorrow =new Date();
        tomorrow.setDate(today.getDate() + 1);

        var dd1 = tomorrow.getDate();
        var mm1 = tomorrow.getMonth() + 1; //January is 0!
        var yyyy1 = tomorrow.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        if (dd1 < 10) {
            dd1 = '0' + dd1;
        }


        if (mm1 < 10) {
            mm1 = '0' + mm1;
        }

        var checkin = mm + '/' + dd + '/' + yyyy;
        var checkout = mm1 + '/' + dd1 + '/' + yyyy1;
        $('#dp1').val(checkin);

        $('#dp2').val(checkout);
        // $('#dp1').datepicker('setStartDate', today);
        $("#dp1").datepicker({ startDate: "dateToday" });


var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dp1').datepicker({

  beforeShowDay: function(date) {
    return date.valueOf() >= now.valueOf();
  },
  autoclose: true

}).on('changeDate', function(ev) {
  //if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

    var newDate = new Date(ev.date);
    newDate.setDate(newDate.getDate() + 1);
    checkout.datepicker("update", newDate);


  //}
  $('.datepicker').hide();
  $('#dp2')[0].focus();
});


var checkout = $('#dp2').datepicker({
  beforeShowDay: function(date) {
    if (!checkin.datepicker("getDate").valueOf()) {
      return date.valueOf() >= new Date().valueOf();
    } else {
      return date.valueOf() > checkin.datepicker("getDate").valueOf();
    }
  },
  autoclose: true

}).on('changeDate', function(ev) {});


});

///Pop Datepicker for vistara landing page

$(document).ready(function () {
   
    //var today = new Date("10/29/2019");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    //   var tomorrow = today.getDate + 1 Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    var dd1 = tomorrow.getDate();
    var mm1 = tomorrow.getMonth() + 1; //January is 0!
    var yyyy1 = tomorrow.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (dd1 < 10) {
        dd1 = '0' + dd1;
    }


    if (mm1 < 10) {
        mm1 = '0' + mm1;
    }

    var checkin = mm + '/' + dd + '/' + yyyy;
    var checkout = mm1 + '/' + dd1 + '/' + yyyy1;
    $('#dp3').val(checkin);

    $('#dp4').val(checkout);
    $('#dp3').datepicker('setStartDate', today);
    $("#dp3").datepicker({ startDate: "dateToday" });


    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('#dp3').datepicker({

        beforeShowDay: function (date) {
            return date.valueOf() >= now.valueOf();
        },
        autoclose: true

    }).on('changeDate', function (ev) {
        //if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.datepicker("update", newDate);

        //}
        $('.datepicker').hide();
        $('#dp4')[0].focus();
    });


    var checkout = $('#dp4').datepicker({
        beforeShowDay: function (date) {
            if (!checkin.datepicker("getDate").valueOf()) {
                return date.valueOf() >= new Date().valueOf();
            } else {
                return date.valueOf() > checkin.datepicker("getDate").valueOf();
            }
        },
        autoclose: true

    }).on('changeDate', function (ev) { });


});