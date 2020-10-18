/*!
**/

$.fn.sparallax = function(options) {
  var $window  = $(window),
      defaults = {
        $elements: $(this),
        speed: 4
      },
      settings = $.extend(defaults, options);

  $.each(settings.$elements, function(i, el) {
    var $el = $(el), offset = 0,
        speed = ($el.data('parallax-speed') ? $el.data('parallax-speed') : defaults.speed);

    $window.scroll(function() {
      offset = -($window.scrollTop() / speed);
      $el.css({ backgroundPosition: '50% ' + offset + 'px' });
    });
  });
};
