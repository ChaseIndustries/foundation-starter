(function ($) {
  
  // set the default foundation breakpoints and variables
  var breakpoints = {
    sm : 640,
    md : 1025,
    lg : 1441,
    xl : 1921
  },
  winWidth,
  winHeight,
  docWidth,
  docHeight;
  
  function setVars(){ 
    docHeight = $(document).outerHeight(),
    docWidth  = $(document).outerWidth(),
    winHeight = $(window).height(),
    winWidth  = $(window).width();
  }

  /**
   * Swap out svg files for PNGs on unsupporting devices. Modrnizr determines
   * what an unsupporting device is by adding the .no-svg class to the html
   * tag.
   */
  function svgToPng() {
    $('.no-svg .js__svg-image').each(function() {
      var src = $(this).attr('src');
      src = src.replace("svg", "png");
      $(this).attr('src', src);
    });
  }

  /**
   * Stuff to run immediately upon page load
   */
  svgToPng();

  // initialize foundation plugins
  $(document).foundation();

  /**
   * Stuff to run on resize.
   */
  $(window).resize(function() {
    waitForFinalEvent(function() {
      var width = $(window).width();
      // Place functions here
    }, 500, "");
  });

  /**
   * Stuff to run after page load is complete.
   */
  $(document).ready(function() {
    // Place functions here
  });

  /**
   * Helper function to delay firing resize events until the user actually
   * stops resizing their browser.
   */
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
  
  Drupal.behaviors.STARTER = {
    attach: function(context, settings) {
      // Get your Yeti started.
    }
  };
  
  

}(jQuery));

