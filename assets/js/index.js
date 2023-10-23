const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

$(window).scroll(function() {
  var scrollLeft = $(this).scrollLeft();
  var footerToDisplay = false;
  $('.footer[data-visible-range]').each(function() {
      var range = $(this).data('visible-range').split('-');
      range[0] = range[0] ? parseInt(range[0], 10) : 0;
      range[1] = range[1] ? parseInt(range[1], 10) : $(document).height();
      if(scrollLeft >= range[0] && scrollLeft <= range[1]) {
          footerToDisplay = $(this);
          return false;
      }
  });
  if(footerToDisplay && !footerToDisplay.is(':visible')) {
      $('.footer[data-visible-range]').hide();
      footerToDisplay.show();
  }
});