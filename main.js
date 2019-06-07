SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/630165681', function(sound) {
    $('#Start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/617165133', function(sound) {
    $('#Start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/617165145', function(sound) {
    $('#Start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/617165166', function(sound) {
    $('#Start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/97844601', function(sound) {
   $('#start4').click(function(e) {
     e.preventDefault();
     sound.start();
   });

   $('#Stop4').click(function(e) {
     e.preventDefault();
     sound.stop();
   });
  });

  SC.stream('/tracks/617165184', function(sound) {
   $('#Start5').click(function(e) {
     e.preventDefault();
     sound.start();
   });

   $('#Stop5').click(function(e) {
     e.preventDefault();
     sound.stop();
   });
 });


  SC.stream('/tracks/617165193', function(sound) {
   $('#Start6').click(function(e) {
     e.preventDefault();
     sound.start();
   });

   $('#Stop6').click(function(e) {
     e.preventDefault();
     sound.stop();
   });
  });

  SC.stream('/tracks/617165238', function(sound) {
   $('#Start7').click(function(e) {
     e.preventDefault();
     sound.start();
   });

   $('#Stop7').click(function(e) {
     e.preventDefault();
     sound.stop();
   });
 });


});
