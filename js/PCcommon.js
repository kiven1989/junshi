var bodyWidth = $(window).width();
console.log(bodyWidth);
var proportion = Math.round((bodyWidth / 1920) * 100) / 100;
$('html,body').css('fontSize',100*proportion);
console.log(proportion);
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
// $('#nav .indexBtn,#nav .logo').on('click',function () {
//     window.location.href = 'index.html';
// })
// $('#nav .systemBtn').on('click',function () {
//     window.location.href = 'system.html';
// })
// $('#nav .teacherBtn').on('click',function () {
//     window.location.href = 'teacher.html';
// })
// $('#nav .creativityBtn').on('click',function () {
//     window.location.href = 'creativity.html';
// })
// $('#nav .videoBtn').on('click',function () {
//     window.location.href = 'video.html';
// })
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

