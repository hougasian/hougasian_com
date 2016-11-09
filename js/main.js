$(function() {
  const d = new Date(),
        n = d.getFullYear();
  $('time')
    .text(n);

  $('.fa-user-circle-o, .close')
    .on('click', function(e) {
      e.preventDefault();
      $('.about')
        .toggleClass('about-height');
  });
});
