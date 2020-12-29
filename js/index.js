jQuery(function(){
    jQuery(function(){
        var bannersider=jQuery(".banner"); 
        bannersider.flexslider({
            animation: "fade",
            easing:"swing",
            slideshowSpeed: 6000,
            animationSpeed: 0,
            pauseOnAction: false,
            directionNav:false,
            prevText: "",
            nextText: "",
            controlNav:true,
            start: function(slider) {       
               jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");
               jQuery(".bamnline").addClass("load");
            },
            after: function(slider) {
               jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");
               jQuery(".bamnline").addClass("load");
            },
            before: function(slider) {
                jQuery(".bamnline").removeClass("load");
            }
        });
    });
    function initBox() {
        if(!isMobile){
            var headerH = $("header").height();
            var heaSou = w_height - headerH;
            $('.banner').css('height',heaSou);
            $('.banner .bannerfix >li').css('height',heaSou);
            setImgMax($('.banner .bannerfix li .bimg'), 1920, 950, w_width, heaSou);
        }
    };
    initBox();
    jQuery(window).resize(function () {
        initBox();
    });
    
    jQuery(function(){
        var bannersider5=jQuery(".h-news-swiper"); 
        bannersider5.flexslider({
            animation: "fade",
            directionNav:false,
            controlNav:true,
            slideshow: true,
            animationLoop: true,
        });
    });

    jQuery(function(){
        $('.history-tab-swiper').flexslider({
            animation: "slide",
            directionNav: true,
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 150,
            itemMargin: 0,
            prevText: "",
            nextText: "",
            minItems: 2,
            maxItems: 6,
            asNavFor: '.history-con-swiper',
        });
        $('.history-con-swiper').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            // sync: '.history-tab-swiper',
        });
    });

    // jQuery(function(){
    //     var bannersider7=jQuery(".effect-swiper"); 
    //     bannersider7.flexslider({
    //         animation:"fade",
    //         slideshowSpeed: 6000,
    //         manualControls:".effect-icon .effect-info",
    //         slideshow:false,
    //         pauseOnHover:true,
    //         directionNav:false,
    //         controlNav:true
    //     });
    // });
    
    // jQuery(function(){
    //     var bannersider7_=jQuery(".landscape-tab-swiper"); 
    //     bannersider7_.flexslider({
    //         animation:"fade",
    //         slideshowSpeed: 6000,
    //         manualControls:".landscape-icon .landscape-info",
    //         slideshow:false,
    //         pauseOnHover:true,
    //         directionNav:false,
    //         controlNav:true,
    //     });
    // });

    // jQuery(function(){
    //     var bannersider8=jQuery(".effect-swiper"); 
    //     bannersider8.flexslider({
    //         animation:"fade",
    //         slideshowSpeed: 6000,
    //         manualControls:".effect-icon .effect-info",
    //         slideshow:false,
    //         pauseOnHover:true,
    //         directionNav:false,
    //         controlNav:true
    //     });
    // });

    // jQuery(function(){
    //     var bannersider9=jQuery(".financial-swiper"); 
    //     bannersider9.flexslider({
    //         animation: "fade",
    //         directionNav:true,
    //         prevText: "",
    //         nextText: "",
    //         controlNav:true,
    //         minItems: 1,
    //         maxItems: 1,
    //         itemWidth: 1200,
    //         itemMargin: 0,
    //         slideshow: true,
    //         animationLoop: true
    //     });
    // });
    // jQuery(function(){
    //     var bannersider10=jQuery(".medical-care-head-swiper"); 
    //     bannersider10.flexslider({
    //         animation: "slide",
    //         directionNav:true,
    //         prevText: "",
    //         nextText: "",
    //         controlNav:false,
    //         minItems: 1,
    //         maxItems: 4,
    //         itemWidth: 280,
    //         itemMargin: 26,
    //         slideshow: true,
    //         animationLoop: true
    //     });
    // });


    // var swiper1 = new Swiper('.travel-swiper', {
    //       slidesPerView: 'auto',
    //       spaceBetween: 2,
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    // });
    var swiper2 = new Swiper('.in-swiper', {
        slidesPerView: 4,
        spaceBetween: 26,
        paginationClickable: true,
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.in-next',
            prevEl: '.in-prev',
        },
        breakpoints: {
            991: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }
    });
    var swiper = new Swiper('.team-swiper', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        simulateTouch : true,
        // slidesPerColumnFill: 'row',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.team-next',
            prevEl: '.team-prev',
        },
        // breakpoints: {
        //     1259: {
        //       slidesPerView: 2,
        //       slidesPerColumn: 2,
        //       spaceBetween: 30,
        //     },
        //     991: {
        //       slidesPerView: 1,
        //       spaceBetween: 25,
        //     },
        //     768: {
        //       slidesPerView: 1,
        //       slidesPerColumn: 1,
        //       spaceBetween: 15,
        //       simulateTouch : true,
        //     },
        //     640: {
        //       slidesPerView: 1,
        //       slidesPerColumn: 1,
        //       spaceBetween: 10,
        //     },
        //     320: {
        //       slidesPerView: 1,
        //       slidesPerColumn: 1,
        //       spaceBetween: 10,
        //     }
        //   }
    });
});
