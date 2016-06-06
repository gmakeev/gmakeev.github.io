$(document).ready(function(){
   $("#qwe").on('click', function(){
       $("#asd").css({
           display: 'block'
       });
       $(window).scrollTop(0);
       $('body').css({
           background: '#000',
           overflow: 'hidden'
       });
       $("#asd").add('p').css({
           width: '50px',
           height: '50px',
           background: '#666'});

    });
    /*console.log(1);*/
    $("#asd p").click(function() {
        console.log(1);
        $("#asd").hide();
        $('body').css({background: 'none'});
    });
});