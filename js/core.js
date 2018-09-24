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

//Contact form logic----------------------------------------------------------------------------------------------------------------------->

//This function completes and reveals the updated forms. The pulse stops.
function CompleteLoad() {
    $("form").css({"visibility": "visible","transition":"all 0.3s"});
    $(".loader2").fadeOut("slow");
}

//Fires when submit button is clicked => form data is collected and sent to the server.

$(".submitContact").click(function(e){
    
    //Prevents default "GET" method.
    e.preventDefault();

    //Loader balls pulsing while ajax call is executed, form tag contents are hidden.
    $("form").css("visibility", "hidden");
    $(".loader2").css("visibility", "visible");
    
    let formData = $("form").serializeArray();
    console.log(formData);

    //Input fields are hidden.
    $("form h2").css({"margin-top":"11%","text-align":"center"});
    $("form").css("height","16.4em");
    $(".form-group").hide();
    $.ajax({
        url:"http://localhost:3000/POST",
        data: formData,
        type: "POST",
        datatype: "json"
    })

  // This runs if the request succeeds (is done);
  // The response is passed to the function
    .done(function(json) {
        //Contact form name field input value is passed to construct the response message.
        let contactName = formData[0].value;
        if (contactName) { contactName = ", " + contactName };
        $("form h2").html(`<h2>Thank you${contactName}!</h2> <h5>Your message has been sent.<br> Ildar will respond in a couple hours. NOT!</h5>
                           <br><h6>Sorry, working on it... Will be up and running shortly!</h6>`);
        //The updated form is visible again and the pulse stops.
        CompleteLoad();
     })

     // Code to run if the request fails; the raw request and
     // status codes are passed to the function.
     .fail(function( xhr, status, errorThrown ) {
       $("form h2").text("Sorry, working on it... Will be up and running shortly!");
       console.log( "Error: " + errorThrown );
       console.log( "Status: " + status );
       console.dir( xhr );
       //The updated form is visible again and the pulse stops.
       CompleteLoad();
     })
});