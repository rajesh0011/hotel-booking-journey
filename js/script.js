const path = document.location.pathname;
const pageName = path.substr(path.lastIndexOf('/') + 1); 


new WOW().init();

$("#open_more").click(function() {
  $("#other_cities").toggleClass("active");
  $("#open_more").toggleClass("active");
});

$("ul.nav-tabs a").click(function(e) {
  e.preventDefault();
  $(this).tab("show");
});
$(".owl-home-slide").owlCarousel({
    loop: true,
    lazyLoad: true,
  nav: true,
  dots:true,
     loop: true,  
     // autoplayTimeout: 3000,
      //autoplaySpeed: 1000,
     // autoplayHoverPause: true,
      //autoplay: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  items: 1
});

$(".gallery_slide").owlCarousel({
    loop: true,
    lazyLoad: true,
  nav: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: false,
  items: 1
});


$(".events-slide").owlCarousel({
    loop: false,
    lazyLoad: true,
  nav: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  items: 1
});
$(".rooms-slider").owlCarousel({
    loop: true,
    lazyLoad: true,
  nav: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  items: 1
});


$(".wine_and_dine").owlCarousel({
    loop: false,
    lazyLoad: true,
  nav: true,
  margin:0,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  items: 3,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

$(".wine_and_dine_home").owlCarousel({
  loop: false,
  nav: true,
  lazyLoad: true,
  margin:0,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  items: 3,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

$(".exp-slide").owlCarousel({
  //loop: true, 
    margin: 10,
    lazyLoad: true,
  nav: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(".exp-slides").owlCarousel({
    loop: true,
    lazyLoad: true,
  stagePadding: 30,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  pagination: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

if(pageName == "index.html" || pageName == "hotel.html" || pageName == "") {

  $(window).scroll(function() {
    var sticky = $("header");
    var booking_engine = $("#booking_engine"),
      scroll = $(window).scrollTop();


      if($(window).width() > 991) {
         if (scroll >= 100) {
          sticky.addClass("sticky-bg");
          booking_engine.addClass("sticky_booking_engine");
          booking_engine.hide();
          // $('body').addClass('fixed-nav');
        } else {
          sticky.removeClass("sticky-bg");
          booking_engine.removeClass("sticky_booking_engine");
          booking_engine.hide();
          // $('body').removeClass('fixed-nav');
        }
      }

   
  });

  $('body').scroll();
}



	/* $(".contentsss").hide();
    $(".show_hide").on("click", function () {
        var txt = $(this).siblings(".contentsss").is(':visible') ? 'Read More' : 'Read Less';
        $(this).text(txt);
        $(this).siblings('.contentsss').slideToggle(200);
    });*/

/*if ($(window).width() < 767)
    {
	$(".contentsss1").hide();
    $(".show_hide1").on("click", function () {
        var txt = $(this).siblings(".contentsss1").is(':visible') ? 'Read More' : 'Read Less';
        $(this).text(txt);
        $(this).siblings('.contentsss1').slideToggle(200);
    });


	};
	*/
	
/* 	if ($(window).width() < 767)
    {
$("#booking_engine").hide();
$(".mobile-book").click(function(){		  
  $("#booking_engine").show();		  
});
		
	};	 */
	
   
		   

$(".navbar-toggler").on("click", function() {
  console.log($(".navigation").hasClass("show"));
  if (!$(".navigation").hasClass("show")) {
    $("header")
      .addClass("full-nav")
      .addClass("sticky-bg1");
    $("body").addClass("fix-body");
  } else {
    $("header")
      .removeClass("full-nav")
      .removeClass("sticky-bg1");
    $("body").removeClass("fix-body");
  }
});


	// $('.sign-btn').on('click', function () {
    //    var target = $(this).attr('data-target');
    //    var submitBtn_id = $(this).data('submitbtn');
    //    $('.sign-btn').removeClass('active');
    //    $(this).addClass('active');
    //    $('.sign-form').hide();
    //    $(target).fadeIn();
    //    $("#signModal .modal-footer .btn").hide();
    //    console.log(submitBtn_id);
    //    $(submitBtn_id).show();
    //});
	

  
	
	$(document).ready(function() {
		if ($(window).width() < 667) {
			
	
			
			var showChar = 200;
		}
		else
		{
			var showChar = 700;
		}
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.more1').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span class="hide-show-more">' + h + '</span><a href="javascript:void(0);" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


$(document).ready(function() {
    var showChar = 105;
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.more2').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses1">' + ellipsestext+ '&nbsp;</span><span class="morecontent1"><span class="hide-show-more1">' + h + '</span><a href="javascript:void(0);" class="morelink1">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink1").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


$(document).ready(function() {
    var showChar = 250;
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.more3').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses2">' + ellipsestext+ '&nbsp;</span><span class="morecontent2"><span class="hide-show-more2">' + h + '</span><a href="javascript:void(0);" class="morelink2">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink2").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


$("#click_div").click(function(){
  $(".show_div").toggle(10);
});

if($(window).width() < 767) {
$(".nav-item .nav-link").click(function(){
  $(".navigation").removeClass('show');
  $("body").removeClass('fix-body');
});
}

$(".book_now_btn").click(function() { 
	$("#booking_engine").slideToggle(500);
});


 
$(".mobile-book").click(function () { 
    $("#booking_engine").appendTo("#booking_engine_pop .modal-body"); 
    $("#booking_engine").show();
    });
