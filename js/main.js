$(document).ready(()=>{
    
    //image play btn
    var imgbtn = $('.image__btn');
    var imgholder = $('.image__holder');
    var song = $("#rainbow");
    var playing = true;
    imgbtn.click(function() {
        if (playing) {
            imgbtn.text("Pause");
            imgholder.addClass("boderColorChange");
            song.trigger('play');
            playing = false;
        }else{
            imgbtn.text("Play");
            imgholder.removeClass("boderColorChange");
            song.trigger('pause');
            playing = true;
        }
    });

});