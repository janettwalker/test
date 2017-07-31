$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active');
      if ($('.row-offcanvas').hasClass('active')) {
          $('button.btnexpand').text('<<');
      } else {
          $('button.btnexpand').text('>>');
      }
  });
});