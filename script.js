$(function() {
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

  });

  $('#black').click(function() { 
    // function pauseBlack() {
      $('#black').countdown('pause');
      $('#white').countdown('resume');
    // }
  });

  //     function startBlack() {    
  //       $('#black').countdown({
  //         until: count,
  //         format: 'MS',
  //         layout: '{mn}'+':'+'{sn}'
  //       });
  //     }
  //   }); 

  $('#white').click(function() {
    // function pauseWhite() {
      $('#white').countdown('pause');
      $('#black').countdown('resume')
    // }
  });

  //     function startWhite() {
  //       $('#white').countdown({
  //         until: count
  //         format: 'MS',
  //         layout: '{mn}'+':'+'{sn}'
  //       });
  //     }
  //   });

});