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
  // $('#black').click(function() 
    //   function pauseBlack() {
    //     $('#black').countdown.stop();
    //   }

    //   function startBlack() {    
    //     $('#black').countdown({
    //       until: count,
    //       format: 'MS',
    //       layout: '{mn}'+':'+'{sn}'
    //     });
    //   }
    // }); 

    // $('#white').click(function()
    //   function pauseWhite() {
    //     $('#white').countdown.stop();
    //   }

    //   function startWhite() {
    //     $('#white').countdown({
    //       until: count
    //       format: 'MS',
    //       layout: '{mn}'+':'+'{sn}'
    //     });
    //   }
    // });
  
});