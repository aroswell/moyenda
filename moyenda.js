$(document).on('ready page:load', function(){
    slides = $('#moyenda-slide .slide');

  // Moyenda.init();
  setTimeout( function () {
    Moyenda.run(true);
  }, 1500);

});

var slides;


// MODULE
var Moyenda = ( function () {

  var interval;
  var currentIndex;

  var _loadActiveSlide = function (activeSlide) {
    $(activeSlide).fadeIn(5000);
    // $(activeSlide).toggle();
  };

  var _moveSlide = function (activeSlide, slide) {
    activeSlide.removeClass("active").fadeOut(5000);
    slide.addClass("active").fadeIn(5000);

    // activeSlide.removeClass("active");
    // slide.addClass("active");

  };

  var _advance = function (slides, wrap) {
    var lastIndex = slides.length - 1;
    var firstSlide = slides[0];
    var activeSlide = slides.filter('.active');
    var currentIndex = slides.index(activeSlide);

    console.log("Current index is " + currentIndex);

    if (currentIndex == lastIndex) {
      // if wrap is false the slider will not start over
      if (wrap == true) {
        _moveSlide( $(activeSlide), $(firstSlide) );

      } else {
        clearInterval(interval);
        console.log("interval cleared.");

      }

    } else {
      var nextSlide = slides[currentIndex + 1];
      _moveSlide( $(activeSlide), $(nextSlide) );

    }

  };

  return {
      run:  function (wrap) {
              var wrapping = wrap;
              var activeSlide = slides.filter('.active');

              _loadActiveSlide( $(activeSlide) );

              setTimeout(function () {
                interval = setInterval(_advance, 7000, slides, wrapping);
              }, 3000);
            },

      // advance:  function (wrap) {
      //             _advance(slides, wrap)
      //           }

  };

}) ();


document.oncontextmenu = function(e) {
    e = e || window.event;
    if (/^img$/i.test((e.target || e.srcElement).nodeName)) return false;
};



