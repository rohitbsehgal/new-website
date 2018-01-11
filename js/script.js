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
    var top = $window.scrollTop();
    var windowHeight = $(window).height();
    if(top >= height  && i < divs.length-1){
      $(divs[i]).css({position: "fixed", bottom: "0px", top: "auto"});
      top = 0;
      i++;
      window.scrollTo(0, 0);
    }else if(i >= 1 && top <= 0){
      i--;
      $(divs[i]).css({position: "relative", top: "100%", bottom: "auto"});
      window.scrollTo(0, bottoms[i]);

    }else if(i < 1){
      $(divs[i]).css({position: "relative", top: "100%"});
    }
  }
});
var attachMobileSafariAddressBarHelpTip = function (target) {
    var $target = $(target);
    $target.tooltip({
        title: 'Scroll up to hide Safari address bar',
        trigger: 'manual',
        placement: 'bottom'
    });
    $(window).on('resize', function () {
        var bodyHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var isLandscape = Math.abs(window.orientation) === 90;
        var showTooltip = (windowHeight < bodyHeight);
        if(!isLandscape) return;
        $target.tooltip(showTooltip ? 'show' : 'hide');
    });
}
var ua = window.navigator.userAgent;
if(ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {
    attachMobileSafariAddressBarHelpTip('#main-nav');
}
