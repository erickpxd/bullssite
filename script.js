$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        const menuIsOpen = $('.navbar .menu').hasClass("active");

        $(this).attr("aria-expanded", menuIsOpen);
        $(this).find(".menu-icon").html(menuIsOpen ? "&times;" : "&#9776;");
    });

    $('.navbar .menu a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn').attr("aria-expanded", "false");
        $('.menu-btn .menu-icon').html("&#9776;");
    });
});
