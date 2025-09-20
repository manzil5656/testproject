$(document).ready(function(){

  // Hamburger toggle (mobile)
  $(".hamburger").click(function(){
    $(".menu").slideToggle();
  });

  // Handle menu visibility on resize
  $(window).resize(function(){
    if($(window).width() > 768){
      $(".menu").show();   // Always visible on desktop
    } else {
      $(".menu").hide();   // Hidden by default on mobile
    }
  }).trigger("resize"); // run once on page load

  // Force carousel autoplay
  var myCarousel = document.querySelector('#heroCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: false
  });

});
