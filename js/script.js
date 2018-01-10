var divs = ['.stickyBanner', '.stickyBanner1', '.stickyBanner2','.stickyBanner3', '.stickyBanner4', '.stickyBanner5', '.stickyBanner6'];
var distance = $('.stickyBanner').offset().top, $window = $(window);
var height = $('.stickyBanner').height();
var distance1 = $('.stickyBanner1').offset().top, $window = $(window);
var divNum = 0;
var i = 0;
var x = 0;
$window.scroll(function() {
height = $(divs[i]).height();
var top = $window.scrollTop() ;
var windowHeight = $(window).height();
console.log(top);
console.log(windowHeight*(i+1));
console.log(i);
if( top - windowHeight*(i+1) >= 0  && i < divs.length-1){
  $(divs[i]).css({position: "fixed", top: "0px"});
  i++
}else if(i >= 1 && top - windowHeight/(i+1) >= 0){
  $(divs[i]).css({position: "relative", top: (i+1) + "00%"});
  i--;
}else{
  $(divs[i]).css({position: "relative", top: (i+1) + "00%"});
}
});
