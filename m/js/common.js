$(document).ready(function(){
    $('.btn').append('<span class="material-icons-outlined">chevron_right</span>')
    $('.btn01').append('<span class="material-icons-outlined">chevron_right</span>')
    
    
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('nav').stop().fadeToggle();
    })

    // var scrollSelecter;
    // var scrollBoolean = true;
    // var scrollIdx = 0;
    // var scrollOffset = 0;

    // $('body.scrollArea').on('mousewheel',function(e){
    //     if(scrollBoolean){
    //         scrollBoolean = false;
    //         setTimeout(() => {
    //             scrollBoolean = true;
    //         }, 500);
    //         var delta = e.originalEvent.wheelDelta;
    //         scrollSelecter = $('header + * , footer');
    //         if(delta > 0 && scrollIdx > 0){
    //             scrollIdx--;
    //             scrollOffset = scrollSelecter.eq(scrollIdx).offset().top;
    //         }else if(delta < 0 && scrollIdx < scrollSelecter.length - 1){
    //             scrollIdx++;
    //             scrollOffset = scrollSelecter.eq(scrollIdx).innerHeight();
    //         }else{
    //             return;
    //         }
    //         $('html').stop().animate({scrollTop : scrollOffset},500)
    //     }
    // })
});

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};