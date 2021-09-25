$(function(){

    // Tabs

    $(".tabgroup .tab").on("click",function(e){
        var i = $(this).index();

        $(this).addClass("active")
            .siblings().removeClass("active");

        $(this).closest(".tabgroup")
            .find(".content").eq(i).addClass("active")
            .siblings().removeClass("active");
    });

    // Back to top scroll button action

    $(".scroll-top").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".header_section").offset().top},1000,);

    });

    // Scroll code

    $(window).scroll(function () {

        
        // Back to top scroll button

        if ($(window).scrollTop() > 950) {
            $(".scroll-top").fadeIn(400,function(){
                $(".scroll-top").css("display", "block");
            });
        }
        else {
            $(".scroll-top").fadeOut(400,function(){
                $(".scroll-top").css("display", "none");
            });
        }

    });

    
    $(document)
    .on("click","[data-activate]",function(){
        $($(this).data("activate")).addClass("active")
    })
    .on("click","[data-deactivate]",function(){
        $($(this).data("deactivate")).removeClass("active")
    })
    .on("click","[data-toggle]",function(){
        $($(this).data("toggle")).toggleClass("active")
    })

});

$(window).scroll(function(e){parallaxScroll();});
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.y1').css({'transform': 'translate3d(0,' + scrolled * -0.85 + 'px, 0)'});
        $('.y2').css({'transform': 'translate3d(0,' + scrolled * -0.95 + 'px, 0)'});
        $('.y3').css({'transform': 'translate3d(0,' + scrolled * -0.73 + 'px, 0)'});
        $('.y4').css({'transform': 'translate3d(0,' + scrolled * -1.05 + 'px, 0)'});
        $('.y5').css({'transform': 'translate3d(0,' + scrolled * -0.75 + 'px, 0)'});
        $('.y6').css({'transform': 'translate3d(0,' + scrolled * -0.86 + 'px, 0)'});
    };



    function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
        showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
        showImages('.star');
});

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


