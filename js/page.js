var isTouch = Modernizr.touch,
    isMobile = false,//区分移动端与PC端
    mobile = false,//区分手机端与平板
    w_width = 0,
    w_height = 0,
    bannerImgh=638,
    navItem = 0,
    h_height=0,
    roll=0,
    sTop=150,
    produs=0,
    ST = 0;
    
var _mousemove;
var _click;
var _mousedown;
var _mouseup;

//移动端事件和PC事件的切换
if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
};

function pageBox() {
    w_width = jQuery(window).width();
    w_height = jQuery(window).height();

    //设置移动端参数
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
    //区分手机端和平板
    if (w_width <= 640) {
        mobile = true;
    } else if (w_width > 640) {
        mobile = false;
    };
    if(!isMobile){
        ST = $(window).scrollTop();
        datailT = $("#J_DetailTab").offset().top;
        travelT = $('.travel-detail').offset().top;
        mh = $('.travel-detail').height();
        fh = $('#travel-nav-inner').height();
        if (ST < datailT) {
            $('.J_DetailTab-box').removeClass('scollfox');
        } else {
            $('.J_DetailTab-box').addClass('scollfox');
        }
        if(ST > travelT - 90){
            $('#travel-nav-inner').css('position','fixed');
        } else {
            $('#travel-nav-inner').css('position','');
        }
        $(window).scroll(function () {
            ST = $(window).scrollTop();
            datailT = $("#J_DetailTab").offset().top;
            travelT = $('.travel-detail').offset().top;
            mh = $('.travel-detail').height();
            fh = $('#travel-nav-inner').height();
            if (ST < datailT) {
                $('.J_DetailTab-box').removeClass('scollfox');
            } else {
                $('.J_DetailTab-box').addClass('scollfox');
            };
            if(ST > travelT - 90){
                var STS = travelT + mh - fh - 68;
                $('#travel-nav-inner').css('position','fixed');
                if(ST > travelT + mh - fh - 68){
                   $('#travel-nav-inner').css('margin-top', STS-ST);
                }else {
                    $('#travel-nav-inner').css('margin-top', "0");
                }
            }else{
                $('#travel-nav-inner').css('position','');
            }
            $('#travel-nav-inner ul li').eq(0).addClass('active');
            $('.travel-detail .travel-detail-list').each(function(){
                _line = $(this).outerHeight(true);
                _lineT = $(this).offset().top;
                _target= _lineT-ST-_line;
                _i=$(this).index();
                if (ST>=_lineT) {
                    $('#travel-nav-inner ul li').removeClass('active');
                    $('#travel-nav-inner ul li').eq(_i).addClass('active');
                }
            });
        });
    }
}
pageBox();
jQuery(window).resize(function () {
    pageBox();
});
$( '#menu_toggle1' ).on('click', function(e) {
    $('.menu-list > li > a').removeClass('now');
    $('.menu-leval').slideUp();
    $(this).toggleClass('active');
    $('.menubox').fadeToggle(500);
});
$(".menus-list li").each(function( index ) {
  $( this ).css({'animation-delay': (index/2)+'s'});
});

$('#goTopBtn').click(function(e){
    e.preventDefault();
    jQuery("html,body").animate({ scrollTop: 0}, 600, 'easeInOutExpo');
})

$(".nav >li a").hover(function(){
});

$('.iphone-fix span').click(function(){
    $('.iphone-down').slideToggle();
});

$(".market-list li").each(function(i,o){
    $(this).css({"transition":"500ms "+(i*120)+"ms","-webkit-transition":"500ms "+(i*120)+"ms"});
});

jQuery(window).scroll(function(){
    var windowTop=jQuery(window).scrollTop();
    if (windowTop < w_height && !isMobile) {
        jQuery('.pbanner figure img').css('transform',"translate(0px,"+(windowTop) / 1.5+"px)");
    };
});

jQuery(".menu-list > li > a").bind("click", function (e) {
    var $navMobile=jQuery(".menus"),
        $navA=$navMobile.find(".menu-list > li > a"),
        $mSubnav=$navMobile.find(".menu-leval");
    var hjcur = $(this);
    var hjDD = $(this).parents("li");
    if (hjDD.find(".menu-leval").size() > 0) {
        if (hjcur.hasClass("now")) {
            $navMobile.slideUp();
            hjDD.find(".menu-leval").stop(false, false).slideUp();
            hjcur.removeClass("now");
            $navMobile.slideUp();
        } else {
            $navA.removeClass("now");
            $mSubnav.stop(false, false).slideUp();
            hjDD.find(".menu-leval").stop(false, false).slideDown();
            hjcur.addClass("now");
            e.preventDefault();
        }
    }
});

getHash();
jQuery(".strategy-info a,.meundown li a,.menu-leval li a").click(function(e){
    var hash=jQuery(this).attr("href").split("#")[1];
    if(hash && jQuery("#"+hash).length==1){
        
        setScroll("#"+hash);
    }
    $(".menubox").fadeOut();
    $(".menu").removeClass("active");
});

function getHash(){
    var hash = location.href.split("#")[1];
    if(hash){
        setScroll("#"+hash);
    }
};
var scnum=0;
function setScroll(anchorCur){
    scnum=$(".header-box").outerHeight();
    jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-scnum},1000,'easeInOutExpo');
};



setPopUp($('.weixin'), "官方微信");
function setPopUp(obj, title) {
    obj.click(function () {
        var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
    $("body").append(str);
    jQuery(".popUpblack").fadeIn();
    jQuery(".popUp").animate({marginTop:"-127"},400);
    $(".popUp .close").click(function () {
        $(".popUpblack").remove();
    });
    jQuery(".popUpblack").click(function(){$(".popUpblack").remove();});
        return false;
    });
};
setInterval(function () {
    var bLength = $(".banner .bannerfix li").length;
    var bSou = w_width/bLength;
    $(".banner .flex-control-nav li").width(bSou);
});

function setImgMax(img, imgW, imgH, tW, tH) {
    var tWidth = tW || w_width;
    var tHeight = tH || w_height;
    var coe = imgH / imgW;
    var coe2 = tHeight / tWidth;
    if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
    } else {
        var imgHeight = tWidth * coe;
        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
    };
};

jQuery(window).load(function(){
    jQuery('.article-block').delay(300).scrollClass();
});

/*********************************************************************************************/
$('.J_DetailTab-box').navScroll({
    mobileDropdown: true,
    mobileBreakpoint: 768,
    scrollSpy: true
});
/*********************************************************************************************/
// 渐入效果
/*********************************************************************************************/
(function(jQuery){
    $.fn.scrollClass = function(config){
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;

        function addAction(){
            var length = target.length;
            for(var i=0; i<length; i++){
                if(target.eq(i).hasClass('articleShow')) continue;
                
                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if(in_position < window_bottom_position){
                    target.eq(i).addClass('articleShow');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function(){
            addAction();
        });
        return target;
    };
} )(jQuery);
