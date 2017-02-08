$(function() {
  $('.mode').click(function() {
    if ($('body').hasClass('compact')) {
      $('body').removeClass('compact')
    } else {
      $('body').addClass('compact')
    }
  });
});
