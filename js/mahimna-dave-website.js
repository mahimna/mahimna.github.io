$(window).scroll(function() {
	var scrollPos = $(document).scrollTop();
	var bottomPos = scrollPos + $(window).height();
	$(".navbar a").each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"))
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
			$(".navbar a").removeClass("active");
			$(".navbar a").blur();
			currLink.addClass("active");
		} else {
			currLink.removeClass("active");
		}
	});

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if (bottomPos >= $(".about-me-image").offset().top + 100) {
    	$(".about-me-image").addClass("slide-in-right-animation");
    }

    $(".work-experience").each(function (index) {
    	var curElement = $(this);
    	if (bottomPos >= curElement.offset().top) {
    		// if (index%2 == 0) {
    		// 	curElement.addClass("slide-in-left-animation");
    		// } else {
    		// 	curElement.addClass("slide-in-right-animation");
    		// }
    		curElement.addClass("fade-in-animation");
    	}
    });
});

$(function() {
	$(".smooth-scroll").on("click", function() {
		$.smoothScroll({
			scrollElement: $("html,body"),
			scrollTarget: $(this).attr("href")
		});
		return false;
	});
});

$(function() {
	$(".home-click-for-more-button").on("click", function() {
		$.smoothScroll({
			scrollElement: $("html,body"),
			scrollTarget: "#about-me"
		});	
		return false;
	});
});




