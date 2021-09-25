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

        // Header scroll change

        if ($(window).scrollTop() > 70) {
            $("header").css("background-color", "rgba(252,252,252,1)");
            $(".link_color").css("color", "#191919");
            $("#logo_color").attr('src', 'img/assets/logo-julie.png');
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03)");
        }
        else {
            $("header").css("background-color", "rgba(252,252,252,0)");
            $(".link_color").css("color", "#ffffff");
            $("#logo_color").attr('src', 'img/assets/logo-julie-blackwhite.png');
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)");
        }

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