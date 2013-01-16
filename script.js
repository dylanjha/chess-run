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

    $('.counter').countdown('pause');
  });


  //When black is clicked,
  $('#black').click(function() {
    $('#black').countdown('pause');
    $('#white').countdown('resume');
    return false;
  });

  //When white is clicked
  $('#white').click(function() {
    $('#white').countdown('pause');
    $('#black').countdown('resume');
    return false;
  });

  //When back button is clicked, destroy timers
  $('#back').click(function(){
    $('.counter').countdown('destroy');
    return false;
  });

  //When pause is clicked, pause both countdowns
  $('#pause').click(function(){
    $('.counter').countdown('pause');
    return false;
  });

});