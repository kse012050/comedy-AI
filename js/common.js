$(document).ready(function(){
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('nav').stop().fadeToggle();
    })
});