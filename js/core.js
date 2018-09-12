// Page loadinmg animation

if ((".loader").length) {
    // show Preloader until the website is loaded
    $(window).on('load', function () {
    $(".loader").fadeOut("slow");
    });
}

/* Onpage linkng smooth effect */

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});

//Portfolio cards animation
$(".roundedImage").mouseover(function(){
    $(this).css({"transform":"scale(1.02)", 
                            "opacity":"1",
                            "box-shadow": "0px 20px 200px rgba(27, 26, 48, 0.747)",
                            "transition":"all 0.3s"});
});
$(".roundedImage").mouseout(function(){
    $(this).css({"transform":"scale(1.00)", 
                             "opacity":"0.85", 
                             "box-shadow": "1px 1px 40px rgba(0, 0, 0, 0.473)",
                             "transition":"all 0.3s"});
});
