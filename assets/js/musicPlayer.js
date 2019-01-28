audioPlayer();
    var currentSong = 0;
    function audioPlayer(){
      $('#audioPlayer')[0].src = $('playlist div a')[0];
      $('#audioPlayer')[0].play();
      $('#playlist div a').click(function(e){
        e.preventDefault();
        $('#audioPlayer')[0].src = this;
        $('#audioPlayer')[0].play();
        $('#playlist div').removeClass('play');
        currentSong = $(this).parent().index();
        $(this).parent().addClass('play');


      });

      $('#audioPlayer')[0].addEventListener('ended', function(){
        currentSong++;
        if(currentSong === $('#playlist div a').length)
        currentSong = 0;
        $('#playlist div').removeClass('play');
        $('#playlist div:eq('+currentSong+')').addClass("play");
        $('#audioPlayer')[0].src = $('#playlist div a')[currentSong].href;
        $('#audioPlayer')[0].play();

        

      });

    }