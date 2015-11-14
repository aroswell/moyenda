$(document).on('ready page:load', function(){

  Moyenda.init();
  Moyenda.run();

});

var interval;
var slideImages = [
  "images/bmw-e90-z-performance.jpg",
  "images/ferrari_dino_1280x768.jpg",
  "images/iss_art01_1280x768.jpg",
  "images/Mar-Saura-3-1280x768.jpg",
  "images/shipwreck-beach-zakynthos-greece-wallpaper-1280x768-405.jpg",
  "images/ngc346_01_1280x768.jpg",
  "images/tropical-beach-wallpaper-1280x768-144.jpg"
];
var currentIndex = -1;



// MODULE
var Moyenda = ( function () {

  var slides = slideImages;

  var _changeBackgroundImage = function (imagePath) {
    // console.log("url(" + imagePath + ")");
    $('body').css('background-image', "url(" + imagePath + ")");
    var Image = $('body').css('background-image');
    console.log(Image);

  };

  var _advance = function (wrap) {
    var lastIndex = slides.length - 1;
    var firstImage = slides[0];
    var fullImagePath = $('body').css('background-image');

    console.log("Current image is " + fullImagePath);
    console.log("Current index = " + currentIndex);

    if (currentIndex == -1) {
      _changeBackgroundImage(firstImage);
      currentIndex += 1;

    } else if (currentIndex == lastIndex) {
      // if wrap is false the slider will not start over
      if (wrap == true) {
        _changeBackgroundImage(firstImage);
        // resetting index
        currentIndex = 0;

      } else {
        clearInterval(interval);
        console.log("interval cleared.");

      }

    } else {
      var nextSlide = slides[currentIndex + 1];
      _changeBackgroundImage(nextSlide);
      currentIndex += 1;

    }

  };

  return {
      init: function () {
              $('#moyenda-slide').hide();
            },

      run:  function (wrap) {
              var lastIndex = slides.length - 1;
              var currentIndex = 0;
              var wrapping = wrap;

              setTimeout(function () {
                interval = setInterval(_advance, 4000, slides, wrapping);
              }, 1000);
            },

      advance:  function (wrap) {
                  _advance(slides, wrap)
                }
  };

}) ();
