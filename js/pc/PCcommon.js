var bodyWidth = $(window).width();
// console.log(bodyWidth);
var proportion = Math.round((bodyWidth / 1920) * 100) / 100;
$('html,body').css('fontSize',100*proportion);
// console.log(proportion);
// $(window).scroll(function() {
//     //为了保证兼容性，这里取两个值，哪个有值取哪一个
//     //scrollTop就是触发滚轮事件时滚轮的高度
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     // console.log("滚动距离" + scrollTop);
//     if($('.bodyTop').length > 0){
//         if(scrollTop > $('.bodyTop').height() - $('#nav').height()){
//             $('#nav').css('backgroundColor','rgba(255,77,0,0.9)');
//         }else{
//             $('#nav').css('backgroundColor','transparent');
//         }
//     }
// })
//
$('#nav .indexBtn,#nav .logo').on('click',function () {
    window.location.href = 'index1.html';
})
$('#nav .investBtn').on('click',function () {
    window.location.href = 'invest.html';
})
$('#nav .relationBtn').on('click',function () {
    window.location.href = 'relation.html';
})
$('#nav .newsBtn').on('click',function () {
    window.location.href = 'news.html';
})
$('#nav .asBtn').on('click',function () {
    window.location.href = 'as.html';
})
$('#nav .joinBtn').on('click',function () {
    window.location.href = 'join.html';
})
$('#nav .territoryBtn').on('click',function () {
    window.location.href = 'territory.html';
})
// $('#nav .branBtn').on('click',function () {
//     window.location.href = 'bran.html';
// })
// $('#nav .experienceBtn').on('click',function () {
//     window.location.href = 'experience.html';
// })
//
// $('#help .inline').on('click',function () {
//     window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=14138741&userId=29403538';
// })
//
// $('#help .experience').on('click',function () {
//     window.location.href = 'experience.html';
// })

