

  // var _moveForward = function (currentIndex) {
  //   console.log("Moving slide forward.");

  //   var gotoIndex = currentIndex + 1;
  //   var nextImage = slides[gotoIndex];
  //   _changeBackgroundImage(nextImage);
  // };




// ( function ($) {

//   $.fn.slideshow = function(slideOptions, action) {

//     var slides = this;

//     if (typeof slideOptions !== 'object') {
//       action = slideOptions;
//       slideOptions = {};
//     }


//     var command = action || "";
//     var defaults = {
//       auto: true,
//       wrap: false,
//       timeInterval: 3000,
//       slideLoadingTime: 2000
//     };

//     slideOptions = $.extend({}, defaults, slideOptions);
//     // console.log(slideOptions);

//     if (command == 'back') {
//       console.log("back back friend");

//     } else if (command == 'forward') {
//       console.log("forward ever backward never!");

//     } else if (command == 'pause') {
//       console.log("PAUSE!");

//     } else if (command == 'cycle') {
//       console.log("cycle through ...");

//     } else if (typeof command == 'number') {
//       console.log("A number was passed");
//       //check if the number enter was an integer.
//       // if not an integer throw exception

//     } else {
//       setTimeout(function () {
//         slides.filter(".active").toggle();
//         if (slideOptions.auto == true) {
//           interval = setInterval(advance, slideOptions.timeInterval, slides, slideOptions.wrap);
//         }
//       }, slideOptions.slideLoadingTime);

//     }

//   }

// }(jQuery));



// function advance(slides, wrap) {
//   var lastIndex = slides.length - 1;
//   var active = slides.filter('.active');
//   var currentIndex = slides.index(active);

//   if (currentIndex == lastIndex) {
//     // if wrap is false the slider will not start over
//     if (wrap == true) {
//       var firstSlide = $(slides[0]);
//       moveSlide(active, firstSlide);

//     } else {
//       clearInterval(interval);
//     }

//   } else {
//     var nextSlide = $( slides[currentIndex + 1] );
//     moveSlide(active, nextSlide);
//   }

//   // console.log("wrap is " + wrap);
//   // console.log(slides);
//   // console.log(active);
//   // console.log(currentIndex);
//   // console.log(nextSlide);

// }

// function moveSlide(activeSlide, slide) {
//   activeSlide.toggle();
//   slide.toggle();
//   activeSlide.removeClass("active");
//   slide.addClass("active");
// }

// url("images/ferrari_dino_1280x768.jpg")




