var mousewheelFlag = true;
var ballShow = true;
var part2Flag = true;
var part3Flag = true;
//    判断是否是PC还是安卓还是ios
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPadBrowserNG)/i))) {
    //ios do somting
    window.location.href = '';
}
else if ((navigator.userAgent.match(/(Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //安卓 do somting
    window.location.href = '';
}
else {
    //电脑 do somting
    window.addEventListener('load', function () {
        setInterval(function () {
            // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//            右侧导航条
            if ($('#part4').offset().top < 200) {
                $('#scrollBox .every').removeClass('now');
                $('#scrollBox .every5').addClass('now');
            }
            else if ($('#part3').offset().top < 200) {
                $('#scrollBox .every').removeClass('now');
                $('#scrollBox .every4').addClass('now');
                part3text();
            }
            else if ($('#part2').offset().top < 200) {
                $('#scrollBox .every').removeClass('now');
                $('#scrollBox .every3').addClass('now');
                part2BallShow();
            }
            else if ($('#part1').offset().top < 200) {
                $('#scrollBox .every').removeClass('now');
                $('#scrollBox .every2').addClass('now');
                ballpage1Show();
            }
            else if ($('#swiper1').offset().top < 200) {
                $('#scrollBox .every').removeClass('now');
                $('#scrollBox .every1').addClass('now');
            }
        }, 100);

        $('#scrollBox .every').each(function (i, e) {
            $(e).on('click', function () {
                console.log(bodyScroll)
                if (i == 0) {
                    $('.page').removeClass('now');
                    $('#swiper1').addClass('now');
                    $('html,body').animate({
                        scrollTop: 0
                    }, 500, function () {
                        bodyScroll = 0;
                        nowPage = $('.page.now');
                    });
                } else if (i == 1) {
                    $('.page').removeClass('now');
                    $('#part1').addClass('now');
                    $('html,body').animate({
                        scrollTop: $('#swiper1').height() + (parseInt($('#part1').css('margin-top')))
                    }, 500, function () {
                        bodyScroll = $('#swiper1').height() + (parseInt($('#part1').css('margin-top')));
                        nowPage = $('.page.now');
                    });
                } else if (i == 2) {
                    $('.page').removeClass('now');
                    $('#part2').addClass('now');
                    $('html,body').animate({
                        scrollTop: $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')))
                    }, 500, function () {
                        bodyScroll = $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')));
                        nowPage = $('.page.now');
                    });
                } else if (i == 3) {
                    $('.page').removeClass('now');
                    $('#part3').addClass('now');
                    $('html,body').animate({
                        scrollTop: $('#part2').height() + $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')))
                    }, 500, function () {
                        bodyScroll = $('#part2').height() + $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')));
                        nowPage = $('.page.now');
                    });
                } else {
                    $('.page').removeClass('now');
                    $('#part4').addClass('now');
                    $('html,body').animate({
                        scrollTop: $('#part3').height() + $('#part2').height() + $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')))
                    }, 500, function () {
                        bodyScroll = $('#part3').height() + $('#part2').height() + $('#part1').height() + $('#swiper1').height() + (parseInt($('#part1').css('margin-top')));
                        nowPage = $('.page.now');
                    });
                }
            })
        })


        //滑动标志
        var nowPage = $('.page.now');
        var bodyScroll = 0;
        var ballFlag = 1;
        // js判断鼠标滚轴方向（向上或向下）
        $(document).on("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
            if (mousewheelFlag) {
                mousewheelFlag = false;
                if ($('#part1').hasClass('now')) {
                    if (delta > 0) {
                        // 向上滚
                        if (ballFlag == 3) {
                            page1ToPage2('../../images/pc/index/part1-2head.png', $('#part1 .content2'));
                            $('#part1 .indexBox div').removeClass('now');
                            $('#part1 .indexBox div:nth-child(2)').addClass('now');
                            $('#part1 .bg3').fadeOut(1000);
                            $('#part1 .bg2').fadeIn();
                            ballFlag = 2;
                        } else if (ballFlag == 2) {
                            page2ToPage1('../../images/pc/index/part1-1head.png', $('#part1 .content1'));
                            $('#part1 .indexBox div').removeClass('now');
                            $('#part1 .indexBox div:nth-child(1)').addClass('now');
                            $('#part1 .bg2').fadeOut(1000);
                            $('#part1 .bg1').fadeIn();
                            ballFlag = 1;
                        } else if (ballFlag == 1) {
                            $('#part1').removeClass('now');
                            $('#swiper1').addClass('now');
                            mousewheelFlag = true;
                        }
                    } else {
                        // 向下滚
                        if (ballFlag == 1) {
                            page1ToPage2('../../images/pc/index/part1-2head.png', $('#part1 .content2'));
                            $('#part1 .indexBox div').removeClass('now');
                            $('#part1 .indexBox div:nth-child(2)').addClass('now');
                            $('#part1 .bg1').fadeOut(1000);
                            $('#part1 .bg2').fadeIn();
                            ballFlag = 2;
                        } else if (ballFlag == 2) {
                            page2ToPage1('../../images/pc/index/part1-3head.png', $('#part1 .content3'));
                            $('#part1 .indexBox div').removeClass('now');
                            $('#part1 .indexBox div:nth-child(3)').addClass('now');
                            $('#part1 .bg2').fadeOut(1000);
                            $('#part1 .bg3').fadeIn();
                            ballFlag = 3;
                        } else if (ballFlag == 3) {
                            $('#part1').removeClass('now');
                            $('#part2').addClass('now');
                            mousewheelFlag = true;
                        }
                    }
                } else {
                    bodyScroll = 0;
                    if (delta > 0) {
                        // 向上滚
                        if ($(nowPage).prev().hasClass('page')) {
                            $('.page').removeClass('now');
                            $(nowPage).prev().addClass('now');
                            nowPage = $('.page.now');
                            $(nowPage).prevAll().each(function (i, e) {
                                bodyScroll += $(e).height();
                            })
                            $('html,body').animate({
                                scrollTop: bodyScroll + (parseInt($('#part1').css('margin-top')))
                            }, 1000, function () {
                                mousewheelFlag = true;
                            });
                        } else {
                            $('html,body').animate({
                                scrollTop: 0
                            }, 1000, function () {
                                bodyScroll = 0;
                                mousewheelFlag = true;
                            });
                        }
                    }
                    else if (delta < 0) {
                        // 向下滚
                        if ($(nowPage).next().hasClass('page')) {
                            $('.page').removeClass('now');
                            $(nowPage).next().addClass('now');
                            nowPage = $('.page.now');
                            $(nowPage).prevAll().each(function (i, e) {
                                bodyScroll += $(e).height();
                            })
                            $('html,body').animate({
                                scrollTop: bodyScroll + (parseInt($('#part1').css('margin-top')))
                            }, 1000, function () {
                                mousewheelFlag = true;
                            });
                        } else {
                            $('.page').each(function (i, e) {
                                bodyScroll += $(e).height();
                            })
                            $('html,body').animate({
                                scrollTop: bodyScroll + $(nowPage).height()
                            }, 1000, function () {
                                mousewheelFlag = true;
                            });
                        }
                    }
                }
            }

        });
    })
    var swiper2 = new Swiper('#swiper2', {
        initialSlide: 1,//初始索引
        speed: 300,//速度
        allowTouchMove: false,//无法滑动
        slidesPerView: 3,//显示个数
        centeredSlides: true,//居中
        effect: 'coverflow',//切换效果
        coverflowEffect: {
            rotate: 0,//角度
            stretch: 40,//间距
            depth: 80,//深度
            modifier: 2,//总体效果
            slideShadows: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            // clickable :true,
        },
    })

    // 第一页点击下滑
    $('#part1 .down:nth-child(1)').on('click',function () {
        $('#scrollBox .every2').click();
    })
    // 第二页点击下滑
    $('#part1 .down:last-child').on('click',function () {
        $('#scrollBox .every3').click();
    })
    // 第三页点击下滑
    $('#part2 .down').on('click',function () {
        $('#scrollBox .every4').click();
    })
    // 第四页点击下滑
    $('#part3 .down').on('click',function () {
        $('#scrollBox .every5').click();
    })








    // 球点击事件
    // $('#part2 .box .every').each(function (i,e) {
    //     $(e).on('mouseover',function () {
    //         $('#part2 .box .every').removeClass('cli');
    //         $('#part2 .box .every').find('.ballBox').show();
    //         $('#part2 .box .every').find('.liBox').hide();
    //         // if($(this).hasClass('cli')){
    //         //     $(this).removeClass('cli');
    //         //     $(this).find('.ballBox').fadeIn(1000);
    //         //     $(this).find('.liBox').fadeOut(1000);
    //         // }else{
    //             $(this).addClass('cli');
    //             // $(this).find('.ballBox').fadeOut(500);
    //             $(this).find('.liBox').fadeIn(1000);
    //         // }
    //     })
    // })

}


// 球出现动画
function ballpage1Show() {
    if(ballShow){
        ballShow = false;
        $('#part1 .blueBall').animate({
            'width': '150%',
            'height': '150%',
            'opacity': '0',
        }, 1000);
        $('#part1 .whiteBall').animate({
            'width': '100%',
            'height': '100%',
            'opacity': '1',
        }, 700);
        setTimeout(function () {
            $('#part1 .greyBall').animate({
                'width': '4.7rem',
                'height': '4.7rem',
                'left': '47%',
                'top': '47%',
            }, 700);
            $('#part1 .greyBall>img').animate({
                'width': '110%',
                'height': '110%',
            }, 700, function () {
                $('#part1 .greyBall>img').animate({
                    'width': '100%',
                    'height': '100%',
                }, 100)
            });
        }, 300)
        $('#part1 .ball1').show();
        $('#part1 .ball2').show();
        $('#part1 .box .ball3').show();
        $('#part1 .content1').show();
    }
}

//球从第一页到第二页
function page1ToPage2(src, content) {
    $('#part1 .blueBall').animate({
        'width': '25%',
        'height': '25%',
        'opacity': '1',
    }, 700);
    $('#part1 .whiteBall').animate({
        'width': '0%',
        'height': '0%',
        'opacity': '0',
    }, 700, function () {
        $('#part1 .box').animate({
            'left': 0
        }, 500, function () {
            content.show();
            $('#part1 .greyBall>img').attr('src', src);
            $('#part1 .blueBall').animate({
                'width': '150%',
                'height': '150%',
                'opacity': '0',
            }, 1000);
            $('#part1 .whiteBall').animate({
                'width': '100%',
                'height': '100%',
                'opacity': '1',
            }, 700);
            setTimeout(function () {
                $('#part1 .box .ball3').show();
                $('#part1 .greyBall').animate({
                    'width': '4.7rem',
                    'height': '4.7rem',
                    'left': '53%',
                    'top': '47%',
                }, 700);
                $('#part1 .greyBall>img').animate({
                    'width': '110%',
                    'height': '110%',
                }, 700, function () {
                    $('#part1 .greyBall>img').animate({
                        'width': '100%',
                        'height': '100%',
                    }, 100, function () {
                        mousewheelFlag = true;
                    })
                });
            }, 300)
        })
    });
    $('#part1 .greyBall').animate({
        'width': '0',
        'height': '0',
        'left': '50%',
        'top': '50%',
    }, 700);
    $('#part1 .greyBall>img').animate({
        'width': '0%',
        'height': '0%',
    });
    $('#part1 .ball1Box').removeClass('moveRight');
    $('#part1 .ball2Box').removeClass('moveRight');
    $('#part1 .ball1Box').addClass('moveLeft');
    $('#part1 .ball2Box').addClass('moveLeft');
    $('#part1 .box .ball3').hide();
    $('#part1 .box .ball3').css('left', '15%');
    $('#part1 .content1,#part1 .content3').removeClass('fadeInLeft');
    $('#part1 .content1,#part1 .content3').addClass('fadeOutLeft');
    $('#part1 .content2').addClass('fadeInRight');
    $('#part1 .content2').removeClass('fadeOutRight');
    $('#part1 .content2').hide();
}

//球从第二页到第一页
function page2ToPage1(src, content) {
    $('#part1 .blueBall').animate({
        'width': '25%',
        'height': '25%',
        'opacity': '1',
    }, 700);
    $('#part1 .whiteBall').animate({
        'width': '0%',
        'height': '0%',
        'opacity': '0',
    }, 700, function () {
        $('#part1 .box').animate({
            'left': '8rem'
        }, 500, function () {
            content.show();
            $('#part1 .greyBall>img').attr('src', src);
            $('#part1 .blueBall').animate({
                'width': '150%',
                'height': '150%',
                'opacity': '0',
            }, 1000);
            $('#part1 .whiteBall').animate({
                'width': '100%',
                'height': '100%',
                'opacity': '1',
            }, 700);
            setTimeout(function () {
                $('#part1 .box .ball3').show();
                $('#part1 .greyBall').animate({
                    'width': '4.7rem',
                    'height': '4.7rem',
                    'left': '47%',
                    'top': '47%',
                }, 700);
                $('#part1 .greyBall>img').animate({
                    'width': '110%',
                    'height': '110%',
                }, 700, function () {
                    $('#part1 .greyBall>img').animate({
                        'width': '100%',
                        'height': '100%',
                    }, 100, function () {
                        mousewheelFlag = true;
                    })
                });
            }, 300)
        })
    });
    $('#part1 .greyBall').animate({
        'width': '0',
        'height': '0',
        'left': '50%',
        'top': '50%',
    }, 700);
    $('#part1 .greyBall>img').animate({
        'width': '0%',
        'height': '0%',
    });
    $('#part1 .ball1Box').removeClass('moveLeft');
    $('#part1 .ball2Box').removeClass('moveLeft');
    $('#part1 .ball1Box').addClass('moveRight');
    $('#part1 .ball2Box').addClass('moveRight');
    $('#part1 .box .ball3').hide();
    $('#part1 .box .ball3').css('left', '75%');
    $('#part1 .content1,#part1 .content3').addClass('fadeInLeft');
    $('#part1 .content1,#part1 .content3').removeClass('fadeOutLeft');
    $('#part1 .content1,#part1 .content3').hide();
    $('#part1 .content2').removeClass('fadeInRight');
    $('#part1 .content2').addClass('fadeOutRight');
}

// 治疗领域球出现
function part2BallShow() {
    if(part2Flag){
        part2Flag = false;
        $('#part2 .box .every1 .borderBox').show();
        // $('#part2 .box .every1 .white').animate({'width':'80%','height':'80%'},250,function(){
        $('#part2 .box .every1 .white').show();
            $('#part2 .box .every1 .arc').show();
            $('#part2 .box .every1 .smallBall').show();
            // $('#part2 .box .every1 .ballBox .white>div').show();
            setTimeout(function () {
                $('#part2 .box .every1 .ballBox .borderBox').addClass('move');
                $('#part2 .box .every1>img').show();
                $('#part2 .box .every2 .borderBox').show();
                // $('#part2 .box .every2 .white').animate({'width':'1.7rem','height':'1.7rem'},250,function(){
                $('#part2 .box .every2 .white').show();
                    $('#part2 .box .every2 .arc').show();
                    $('#part2 .box .every2 .smallBall').show();
                    // $('#part2 .box .every2 .ballBox .white>div').show();
                    setTimeout(function () {
                        $('#part2 .box .every2 .ballBox .borderBox').addClass('move');
                        $('#part2 .box .every2>img').show();
                        $('#part2 .box .every3 .borderBox').show();
                        // $('#part2 .box .every3 .white').animate({'width':'1.7rem','height':'1.7rem'},250,function(){
                        $('#part2 .box .every3 .white').show();
                            $('#part2 .box .every3 .arc').show();
                            $('#part2 .box .every3 .smallBall').show();
                            // $('#part2 .box .every3 .ballBox .white>div').show();
                            setTimeout(function () {
                                $('#part2 .box .every3 .ballBox .borderBox').addClass('move');
                                $('#part2 .box .every3>img').show();
                                $('#part2 .box .every4 .borderBox').show();
                                // $('#part2 .box .every4 .white').animate({'width':'1.7rem','height':'1.7rem'},250,function(){
                                $('#part2 .box .every4 .white').show();
                                    $('#part2 .box .every4 .arc').show();
                                    $('#part2 .box .every4 .smallBall').show();
                                    // $('#part2 .box .every4 .ballBox .white>div').show();
                                    setTimeout(function () {
                                        $('#part2 .box .every4 .ballBox .borderBox').addClass('move');
                                        $('#part2 .box .every4>img').show();
                                        $('#part2 .box .every5 .borderBox').show();
                                        // $('#part2 .box .every5 .white').animate({'width':'1.7rem','height':'1.7rem'},250,function(){
                                        $('#part2 .box .every5 .white').show();
                                            $('#part2 .box .every5 .arc').show();
                                            $('#part2 .box .every5 .smallBall').show();
                                            // $('#part2 .box .every5 .ballBox .white>div').show();
                                        $('#part2 .knowBtn').show();
                                            setTimeout(function () {
                                                $('#part2 .box .every5 .ballBox .borderBox').addClass('move');
                                            },300)
                                        // });
                                    },300)
                                // });
                            },300)
                        // });
                    },300)
                // });
            },300)
        // });
    }
}

// 公司历程文字动画
function part3text() {
    if(part3Flag){
        part3Flag = false;
        $('#part3 .textBox').show();
        setTimeout(function () {
            $('#part3 .textBox .every1').show();
            $('#part3 .textBox .every1 .fill').animate({'width': '100%'}, 1500);
            $('#part3 .textBox .every1 .ball').animate({'left': '100%'}, 1500, function () {
                $('#part3 .textBox .every2').show();
                $('#part3 .textBox .every2 .fill').animate({'width': '80%'}, 1200);
                $('#part3 .textBox .every2 .ball').animate({'left': '80%'}, 1200, function () {
                    $('#part3 .textBox .every3').show();
                    $('#part3 .textBox .every3 .fill').animate({'width': '60%'}, 900);
                    $('#part3 .textBox .every3 .ball').animate({'left': '60%'}, 900, function () {
                        mousewheelFlag = true;
                    });
                });
            })
        }, 500);
    }
}




// 获取旋转角度
function getRotate(dom) {
    var el = dom[0];
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";
    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
//         console.log('Matrix: ' + tr);
    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var scale = Math.sqrt(a * a + b * b);
//         console.log('Scale: ' + scale);
    // arc sin, convert from radians to degrees, round
    var sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
//         console.log('Rotate: ' + angle + 'deg');
    return angle - 0;
}

// 获取移动距离
function getlate(dom) {
    var el = dom[0];
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";
    var value = tr.replace(/[^0-9\-,]/g, '').split(',')[4];
    return value - 0;
}

//    向下动画
function downScroll(doc, num) {
    var doc = doc;
    if (doc.find('.head1').width() < doc.find('.hoverBall').width()) {
        doc.find('.textBox').css({
            'opacity': ($('#part1 .as .content .textBox').css('opacity') - 0) + 0.04,
            '-webkit-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-moz-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-ms-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-o-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            'transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
        });
        doc.find('.head1').css({
            'width': doc.find('.head1').width() + 1,
            'height': doc.find('.head1').height() + 1,
        })
        doc.find('.animateBox').css({
            '-webkit-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-moz-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-ms-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-o-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            'transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
        })
    } else {
        doc.find('.head2').show();
    }
}

//    向上动画
function upScroll(doc, num) {
    var doc = doc;
    doc.find('.head2').hide();
    if (doc.find('.head1').width() >= asHeadWidth) {
        doc.find('.textBox').css({
            'opacity': (doc.find('.textBox').css('opacity') - 0) - 0.04,
            '-webkit-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-moz-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-ms-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            '-o-transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
            'transform': 'translate(' + (getlate(doc.find('.textBox')) + num) + 'px,-50%)',
        });
        doc.find('.head1').css({
            'width': doc.find('.head1').width() - 1,
            'height': doc.find('.head1').height() - 1,
        })
        doc.find('.animateBox').css({
            '-webkit-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-moz-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-ms-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            '-o-transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
            'transform': 'rotateZ(' + (getRotate(doc.find('.animateBox')) + num) + 'deg)',
        })
    } else {
        doc.find('.textBox').css({
            'opacity': 0
        });
    }
}
