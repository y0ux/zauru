// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var windowHeight = 0, windowWidth = 0;
console.log("window: "+windowWidth+","+windowHeight);
$( document ).ready(function() {
  //console.log(windowWidth+","+windowHeight);
  
  // Returns height of browser viewport
  windowHeight = viewportHeight();
  windowWidth = viewportWidth();
  //console.log("window: "+windowWidth+","+windowHeight);
  //alert(windowWidth+","+windowHeight);
  $(window).resize(function() {
    //windowHeight = viewportHeight();
    //windowWidth = viewportWidth();
    //console.log("width: "+windowWidth+","+windowHeight);
  });
});

$(window).load(function() {
  //console.log("everythig loaded");
  imageAsBackground();
  $(window).resize(function() {
    //imageAsBackground();
  });
});

function imageAsBackground() {
  //console.log("window: "+windowWidth+","+windowHeight);
  var image = $(".image-as-background");
  $(".homepage-ad").each(function(){
    var padding = $(this).outerHeight() - $(this).height(),
    extra = padding + $(".tab-bar").height() + $(".top-bar").height(),
    info = $(this).find(".info-container").outerHeight(),
    imageW = image.width(),
    imageH = image.height();
    
    //console.log("extra: "+extra);
    //console.log("padding: "+padding);
    //console.log("info: "+info);
    //console.log("image: "+imageW+","+imageH);
    
    $(this).css('min-height',padding+info);
    
    
    if (windowHeight >= windowWidth) {
      $(this).height(windowHeight - extra);
      image.removeClass('wider').addClass('higher');

    }
    else {
      //$(this).height('650');

    }
//    if ($(this).height() >= $(this).width()) {
//      if (image.height() >= $(this).height())
//        image.removeClass('higher').addClass('wider');
//      else
//        image.removeClass('wider').addClass('higher');
//    }
//    else {
//      if (image.width() >= $(this).width())
//        image.removeClass('wider').addClass('higher');
//      else
//        image.removeClass('higher').addClass('wider');
//    } 
  });
}
function viewportHeight() {
  return $( window ).height();
}
function viewportWidth() {
  return $( window ).width();
}