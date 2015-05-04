$( document ).ready(function() {
    /* Slider */
    $('.carousel').carousel({
        interval: 2000
     });
    /* read more */
    var showChar = 400;
    var ellipsestext = "...";
    var moretext = "(more)";
    var lesstext = "(less)";
    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
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
    /* Show/hide services*/
    $('.triger-services-user').on("click", function () {
        $(this).parents('.services-list').removeClass('active-info').children('.services-info').slideUp();
        $(this).parents('.services-list').toggleClass('active-user').children('.services-user').delay(220).slideToggle(400);
        setTimeout($.proxy(function(){
                $(this).parents('.services-list').find('.owl-carousel').owlCarousel({
                    margin:10,
                    loop: false,
                    stagePadding: 10,
                    items:4,
                    nav:true,
                    navText: [],
                    dots: false,
                    mouseDrag: false,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        400:{
                            items:2
                        },
                        600:{
                            items:3
                        },
                        800:{
                            items:4
                        },
                        1000:{
                            items:4
                        },
                        1200:{
                            items:5
                        }
                    }
                });
        }, this), 240);
    });
    $('.triger-services-info').on("click", function () {
        $(this).parents('.services-list').removeClass('active-user').children('.services-user').slideUp();
        $(this).parents('.services-list').toggleClass('active-info').children('.services-info').delay(220).slideToggle();
    });
    $('.carousel-user input[type=radio]').click(function(){
        if($(this).prop("checked") == true){
            $(this).addClass('test').parents('.services-list').children('.services-description').addClass('active-checked');
        }
    });
    $('#select-time .modal-body input[type=radio]').click(function(){
        if($(this).prop("checked") == true){
            $('#select-time .modal-footer .btn').removeAttr('disabled');
        }
    });
    /* Clear form */
    $(document).on('click', '.btn-reset', function () {
        $('.btn-group label').removeClass('active');
    });
    /* Carousel */
    $('.btn-select-time').one("click", function(){
        setTimeout($.proxy(function(){
            $(this).parents('body').find('.owl-carousel.carousel-time').owlCarousel({
                margin:10,
                loop: false,
                stagePadding: 10,
                items:4,
                nav:true,
                navText: [],
                dots: false,
                mouseDrag: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },
                    1000:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                }
            });
        }, this), 40);
    });

});