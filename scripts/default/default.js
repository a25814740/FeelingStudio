var $html = $('html');
var $body = $('body');

$(document).ready(function () {

	resizeCss(true);
	goTop();

	$(".jqimgFill").imgLiquid();

	new WOW().init();

	// $('[data-toggle="tooltip"]').tooltip();

	$("[data-toggle=popover]").each(function (i, obj) {

		$(this).popover({
			html: true,
			content: function () {
				var id = $(this).attr('id')
				return $('#popover-content-' + id).html();
			},
			placement: function () { return $(window).width() < 975 ? 'top' : 'right'; }
		});

	});

	/* ==========================================================================
			   * Detect PC Phone 's browser
   ==========================================================================*/

	browserDetect();

	/* ==========================================================================
					* 視窗捲動時
	==========================================================================*/

	$(window).bind('scroll', function () {

		var menu = $('[data-page="index"] .menu'),
			navbar = $('[data-page="index"] .navbar');

		if ($(this).scrollTop() > 50) {
			menu.fadeOut(100);
			navbar.css('display', 'flex');
		} else {
			navbar.fadeOut(100);
			menu.css('display', 'flex');
		}

		// var goTop = $('.gotop');

		// if ($(this).scrollTop() > 100) {
		// 	goTop.fadeIn();
		// } else {
		// 	goTop.fadeOut();
		// }

	}).scroll();

    /* ==========================================================================
                * 頁面區塊
	==========================================================================*/


	$('.navbar-collapse').on('hide.bs.collapse', function () {
		$('.navbar-toggler').removeClass('open');
		$('.navbar-brand').css('opacity', 0);
	})
	$('.navbar-collapse').on('show.bs.collapse', function () {
		$('.navbar-toggler').addClass('open');
		$('.navbar-brand').css('opacity', 1);
	})

	// $('.navbar').each(function () {

	// 	$('.navbar .dropdown').on('show.bs.dropdown', function () {
	// 		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	// 	});

	// 	// Add slideUp animation to Bootstrap dropdown when collapsing.
	// 	$('.navbar .dropdown').on('hide.bs.dropdown', function () {
	// 		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	// 	});



	// 	$('.navbar .collapse').on('show.bs.collapse', function () {
	// 		$(this).parents('.navbar').removeClass('navbar-close')
	// 		$(this).parents('.navbar').addClass('navbar-open')
	// 	});

	// 	// Add slideUp animation to Bootstrap collapse when collapsing.
	// 	$('.navbar .collapse').on('hide.bs.collapse', function () {
	// 		$(this).parents('.navbar').removeClass('navbar-open')
	// 		$(this).parents('.navbar').addClass('navbar-close')
	// 	});


	// 	// jump to page's id
	// 	$('.navbar-nav .jump .dropdown-menu a').click(function () {
	// 		var jumpID = '#' + $(this).attr("href").toString().split('#')[1];
	// 		jump2SectionId(jumpID);
	// 		$('#navbar-collapse').collapse('hide')
	// 	});

	// 	detectUrlJumpHash();

	// });

	// .wp
	$(".wp").each(function () {
		var $navbar_id = $(".wp").data("page");
		$(".navbar .navbar-nav li").removeClass("active");
		$(".navbar .navbar-nav " + "." + $navbar_id).addClass("active");
	});

	/*document END*/
});

/* ==========================================================================
        * 網頁一載入時
==========================================================================*/

$(window).on("load", function (e) {

	$html.addClass("page-in");

});


/* ==========================================================================
        * 網頁一resize時
==========================================================================*/

$(window).on('resize', function () {
	resizeCss();
});

function resizeCss(init) {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var search_form = $('.search-form-container');

	var navbar_toggle = $('.navbar-nav li a.dropdown-toggle');

	if (init && init === true) {
		// 判斷現在寬度 桌機？手機？
		if (w < 1200) {
			isPads = true;
		} else {
			isPads = false;
		}

		if (w < 768) {
			isMobile = true;
			navbar_toggle.attr('data-toggle', 'dropdown');
		} else {
			isMobile = false;
			navbar_toggle.attr('data-toggle', '');
		}

	} else {
		if (w < 1200) {
			if (isPads === false) {
				isPads = true;
			}
		} else {
			if (isPads === true) {
				isPads = false;
			}
		}


		if (w < 768) {
			if (isMobile === false) {
				isMobile = true;
				navbar_toggle.attr('data-toggle', 'dropdown');
			}
		} else {
			if (isMobile === true) {
				isMobile = false;
				navbar_toggle.attr('data-toggle', '');
			}
		}
	}

}
/**
 * 偵測PC、手機瀏覽器
 */
function browserDetect() {
	var phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
	var IE = /MSIE|Trident/i.test(window.navigator.userAgent);

	var chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var explorer = navigator.userAgent.indexOf('MSIE') > -1;
	var firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var safari = navigator.userAgent.indexOf("Safari") > -1;
	var camino = navigator.userAgent.indexOf("Camino") > -1;
	var opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
	if ((chrome) && (safari)) safari = false;
	if ((chrome) && (opera)) chrome = false;

	if (!phone) {
		// not mobile
		$body.addClass("not-mobile-mode");

		if (navigator.userAgent.indexOf('Mac OS X') != -1) {
			//is Mac
		} else {
			//is PC
		}
	} else {
		// mobile
		$body.addClass("mobile-mode");


		if (!iOS) {
			// not iOS
		} else {
			// is iOS
			$body.addClass("ios-mode");
			var ua = navigator.userAgent.toLowerCase();
			if (ua.indexOf('safari') != -1) {
				if (navigator.userAgent.match('CriOS')) {
					// alert("iOS Chrome") // Chrome
				} else if (navigator.userAgent.match('FxiOS')) {
					// alert("iOS Firefox") // Firefox
				} else {
					// alert("iOS Safari") // Chrome
					$body.addClass("ios-safari-mode");
				}
			} else {
			}
		}
	}

	/** detect IE version **/

	if (!IE) {
		$html.removeClass("IE-mode");
	} else {
		//Do internet explorer exclusive behaviour here
		$html.addClass("IE-mode");
	}

}

/**
 * goTop
 */
function goTop() {
	$('.gotop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
}


/**
 * 檢查網址標籤滾動至錨點
 */
function detectUrlJumpHash() {
	if (location.hash) {
		setTimeout(function () {
			jump2SectionId(location.hash);
		}, 1000);
	}
}

/**
 * 滾動至指定錨點ID
 * @param {String} id 
 */
function jump2SectionId(id) {
	var $element = $(id);
	if (!$element) return;

	$("html, body").animate({
		scrollTop: $element.offset().top - navbarH
	}, 1000, "easeInOutCirc");
}