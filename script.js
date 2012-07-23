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
    // function pauseBlack() {
      $('#black').countdown('pause');
      $('#white').countdown('resume');
    // }
  });

  //When white is clicked
  $('#white').click(function() {
    // function pauseWhite() {
      $('#white').countdown('pause');
      $('#black').countdown('resume')
    // }
  });

});