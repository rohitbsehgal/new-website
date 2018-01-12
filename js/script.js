var divs = ['.stickyBanner', '.stickyBanner1', '.stickyBanner2'];
var distance = $('.stickyBanner').offset().top, $window = $(window);
var height = $('.stickyBanner').height();
var distance1 = $('.stickyBanner1').offset().top, $window = $(window);
var divNum = 0;
var i = 0;
var x = 0;
var height2 = height;
var bottoms = [];
if($window.width() <= 575){
for(var j = 0; j< divs.length; j++){
  var bottom = $(divs[j]).height();
  bottoms.push(bottom);
}
}
$window.scroll(function() {
  if($window.width() > 575){
    height = $(divs[i]).height();
    var top = $window.scrollTop() ;
    var windowHeight = $(window).height();
    if( top - windowHeight*(i+1) >= 0  && i < divs.length-1){
      $(divs[i]).css({position: "fixed", top: "0px"});
      i++
    }else if(i >= 1 && top - windowHeight/(i+1) >= 0){
      $(divs[i]).css({position: "relative", top: (i+1) + "00%"});
      i--;
    }else{
      $(divs[i]).css({position: "relative", top: (i+1) + "00%"});
    }
  }else{
    height = $(divs[i]).height();
    var top = $("body").scrollTop();
    console.log(top);
    console.log(height);
    console.log(i);
    var windowHeight = $(window).height();
    if(top >= height  && i < divs.length-1){
      $(divs[i]).css({position: "fixed", bottom: "0px", top: "auto"});
      console.log("first");
      top = 0;
      i++;
      window.scrollTo(0, 10);
    }else if(i >= 1 && top <= 0 ){
      console.log("second");
      $(divs[i]).css({position: "relative", top: "100%", bottom: "auto"});
      i--;
      window.scrollTo(0, bottoms[i] - 10);

    }else{
      $(divs[i]).css({position: "relative", top: "100%", bottom: "auto"});
    }
  }
});
