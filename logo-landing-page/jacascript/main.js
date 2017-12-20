(function () {
    $('#testimonials').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1
    });

    var sandwIcon = $("#sandwich-icon");
    var navigation = $('#nav-menu');
    var mainHeader = $('#main-header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            mainHeader.addClass('fixed-header');
        } else {
            mainHeader.removeClass('fixed-header');
        }
    });
    $('.main-header-navigation_link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 60
        }, 500);
        sandwIcon.removeClass('active');
        navigation.removeClass('expanded-menu');
        return false;
    });
    sandwIcon.click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        navigation.toggleClass('expanded-menu');
    });
})();