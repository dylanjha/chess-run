$(function() {
  
  //When play is clicked, initialize counters and pause them.
  $('#play').click(function(){
    var input = $('#slider-1').val();
    var count = input*60;

    $('#white').countdown({
      until: count,
      format: 'MS',
      layout: '{mn}'+':'+'{snn}'
    });

    $('#black').countdown({
      until: count,
      format: 'MS',
      layout: '{mn}'+':'+'{snn}'
    });

    $('#black').countdown('pause');
    $('#white').countdown('pause');
  });


  //When black is clicked, 
  $('#black').click(function() { 
      $('#black').countdown('pause');
      $('#white').countdown('resume');
  });

  //When white is clicked
  $('#white').click(function() {
      $('#white').countdown('pause');
      $('#black').countdown('resume')
  });

  //When back button is clicked, destroy timers
  $('#back').click(function(){
    $('#white').countdown('destroy');
    $('#black').countdown('destroy');
  });

  //When pause is clicked, pause both countdowns
  $('#pause').click(function(){
    $('#white').countdown('pause');
    $('#black').countdown('pause');
  });

});