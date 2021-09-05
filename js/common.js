$(document).ready(function(){
    $('.btn').append('<span class="material-icons-outlined">chevron_right</span>')
    $('.btn01').append('<span class="material-icons-outlined">chevron_right</span>')
    
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('nav').stop().fadeToggle();
    })
});