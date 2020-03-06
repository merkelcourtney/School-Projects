//
    // Courtney Merkel
    // Into the Woods article
    // Food & Wine Magazine, November 2019
    // Project 3: Redesign
    // SOAD-S 352, MW 3:35-6:20pm
    // Indiana University
    // sourced from: https://codepen.io/SitePoint/pen/WrZmME 
//

$(function() {
    $('ul.nav a').bind('click', function(event) {
      var $anchor = $(this);
      /*
      if you want to use one of the easing effects:
      $('html, body').stop().animate({
          scrollLeft: $($anchor.attr('href')).offset().left
      }, 1500,'easeInOutExpo');
       */
      $('html, body').stop().animate({
        scrollLeft: $($anchor.attr('href')).offset().left
      }, 1000);
      event.preventDefault();
    });
  });