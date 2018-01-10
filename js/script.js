
    var distance = $('.stickyBanner').offset().top,
        $window = $(window);
    var distance1 = $('.stickyBanner1').offset().top,
        $window = $(window);
    $window.scroll(function() {
      console.log(distance1 - $window.scrollTop());
        if ( $window.scrollTop() >= distance ) {
            $('.stickyBanner').css({position: "fixed", top: "0px"});

        }else if(distance1 >= $(window).height()){
          $('.stickyBanner').css({position: "relative", top: "100%"});
    		}
    });
