$(function() {
  $('#play').click(function(){
    var input = $('#slider-1').val();
    var count = input*60;

    $('#white').countdown({
      until: count,
      format: 'MS',
      layout: '{mn}'+':'+'{sn}'
    });

    $('#black').countdown({
      until: count,
      format: 'MS',
      layout: '{mn}'+':'+'{sn}'
    });

  });

  $('#black').click(function() { 
    // function pauseBlack() {
      console.log('pauseblack');
      $('#black').countdown('pause');
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
      console.log('pausewhite');
      $('#white').countdown('pause');
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