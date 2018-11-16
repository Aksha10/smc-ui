$(document).ready(function () {

  $("html,body").animate({ scrollTop: 0 });

  activeTab();



  $('.nav-item a').on('click', function () {
    $('.nav-item').css('padding', "5px 10px")
    $('.nav-item:first-child').css("padding-left", "0")
    $(this).parent().css("padding", "5px 0")
  })

  // =========================================================
  // Add and Remove active class on hover of super nav
  // =========================================================

  $('.header .super-nav .container .menu-tab .menu li').hover(
    function () {
      $("li.active").addClass('inactive').removeClass('active');
    },
    function () {
      $("li.inactive").addClass('active').removeClass('inactive');
    }
  );

  // =========================================================
  // Footer expand collapse functionality
  // =========================================================

  $('.upper-footer-wrapper').on('click', function () {
    $(this).parent().siblings('.expand-view').slideToggle();
    $('.arrow').toggleClass('fa-angle-down fa-angle-up')
  });


  // =========================================================
  // Change Plus and minus icon on button click
  // =========================================================

  $('.btn-link').on('click', function () {
    $(this).find('.font-icon i').toggleClass('fa-plus-circle fa-minus-circle');
  })

  // =========================================================
  // Add tab href to page URL
  // =========================================================

  $('.nav-item a').on('click', function () {
    var href = $(this).attr('href');
    window.location.hash = href;
    scrollTop();
  })

  // =========================================================
  // Show Overview tab when hash value is not present in url
  // =========================================================

  if (!window.location.hash) {
    $('#overview-tab').addClass('active');
    $('#overview-tab').parent().siblings().children().removeClass('active')
    $('#overview').addClass('active show')
    $('#overview').siblings().removeClass('show active')
  }

  // =========================================================
  // Based on Url tab section change
  // =========================================================

  $(window).on('hashchange', function (e) {

    scrollTop();

    if (window.location.hash) {
      var hashValue = window.location.hash.substr(1);
      $('.tab-content .main-container').each(function () {
        var id = $(this).attr('id');
        if (hashValue == id) {
          $(this).addClass('active show')
          $(this).siblings().removeClass('active show');
        }
      });
    } else {
      $('.tab-content .main-container#overview').addClass('active show')
      $('.tab-content .main-container#overview').siblings().removeClass('active show')
    }

    if (window.location.hash) {
      var hashHref = window.location.hash;
      $('.nav-item a').each(function () {
        var href = $(this).attr('href');
        if (hashHref == href) {
          $(this).addClass('active');
          $(this).parent().siblings('li').children().removeClass('active show');
          $(this).parent().siblings('span').show();
          $(this).parent().next('span').hide();
          $(this).parent().prev('span').hide();
        }
      })
    } else {
      if ($('.nav-item a').attr('href') == "#overview") {
        $("#overview-tab").addClass('active show')
        $("#overview-tab").parent().siblings().children().removeClass('active show');
        $("#overview-tab").parent().siblings('span').show();
        $("#overview-tab").parent().next('span').hide();
        $("#overview-tab").parent().prev('span').hide();
      }
    }

  });

  var hash_href = window.location.hash;
  $('.nav-item a').each(function () {
    var href = $(this).attr('href');
    if (hash_href == href) {
      $(this).trigger('click')
    }
  })

  // =========================================================
  // Remove pipe when tab active
  // =========================================================

  if ($('.header .secondary-nav nav ul li a.active').attr('aria-selected') === "true") {
    var $this = $('.header .secondary-nav nav ul li a.active');
    $this.parent().prev('span').hide();
    $this.parent().next('span').hide();
  }

  $('.header .secondary-nav nav ul li a').on('click', function () {
    $(this).parent().siblings('span').show();
    $(this).parent().prev('span').hide();
    $(this).parent().next('span').hide();
  });

  // =========================================================
  // Carousel
  // =========================================================

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 8,
    margin: 8,
    loop: true,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        // autoplay: true,
      },
      321: {
        items: 2,
        nav: true,
        // autoplay: true,
      },
      480: {
        items: 3,
        nav: true,
        // autoplay: true,
      },
      640: {
        items: 4,
        nav: true,
        // autoplay: true,
      },
      767: {
        items: 5,
        nav: true,
        // autoplay: true,
      },
      991: {
        items: 6,
        nav: true,
        // autoplay: true,
      },
      1200: {
        items: 8,
        nav: true,
        // autoplay: true,
      }
    }
  });

  // =========================================================
  // Toggle search box on click
  // =========================================================

  $(".header .super-nav .container .search-wrap").on('click', function () {
    $(".header .super-nav .container .search-box").slideToggle();
    $(".arrow").toggleClass("fa-angle-down fa-angle-up")
    $(".header .super-nav .container .search-box").toggleClass("display");
    if ($(window).width() <= 991) {
      if ($(".header .super-nav .container .search-box").hasClass("display")) {
        $(".tab-dropdown").animate({ marginTop: 55 })
        $(".main-container").animate({ marginTop: 170 })
      } else {
        $(".tab-dropdown").animate({ marginTop: 0 })
        $(".main-container").animate({ marginTop: 115 })
      }
    }
  })

  // =======================================================
  // hide and show menu
  // =========================================================

  $(".header .super-nav .container .toggle-menu").on('click', function () {
    $(".menu-tab").slideToggle('slow');
  })

  $(".header .super-nav .container .menu-tab .close-menu").on('click', function () {
    $(".menu-tab").slideToggle('slow');
  })

  // =======================================================
  // Display active dropdown item tab text
  // =======================================================

  $(".dropdown-item").on('click', function () {
    var itemText = $(this).text();
    $(".tab-dropdown .dropdown #dropdownMenuLink .text").html(itemText);
  });

  $(".secondary-nav .nav .nav-item a").on('click', function () {
    var tabText = $(this).text();
    $(".tab-dropdown .dropdown #dropdownMenuLink .text").html(tabText);
  })

  // =======================================================
  // Keep same dropdown item text on refresh
  // =======================================================

  var windowHref = window.location.hash;
  $('.dropdown-menu a').each(function () {
    var dropdownHref = $(this).attr('href');
    var dropdownText = $(this).text();
    if (windowHref == dropdownHref) {
      $(".dropdown-toggle .text").html(dropdownText)
    }
  })

  //=======================================================
  // open submenu-wrap class onclick of arrow
  //=======================================================

  $(".header .super-nav .container .menu-tab .menu li .arrow").on('click', function () {
    $(this).parents(".submenu").siblings(".submenu-wrap").slideToggle()
  })

  //=======================================================
  // open submenu-item class onclick of arrow-down
  //=======================================================

  $(".header .super-nav .container .menu-tab .menu li .arrow-down").on('click', function () {
    $(this).parent().siblings(".submenu-item").slideToggle();
  })

  //=======================================================
  // open submenu-wrap-item class onclick of down angle
  //=======================================================

  $(".item-heading .angle").on('click', function () {
    $(this).parents(".item-heading").siblings().slideToggle()
  })


  if ($(window).width() >= 991) {
    onHover();
    overlinkHover();
  }

  //===========================================================
  // on click of item-heading 
  //===========================================================

  $(".item-heading").on('click', function () {
    if ($(window).width() >= 991) {
      $(".item-heading").removeClass("menu-display")
      $(".submenu-item-wrap").removeClass("submenu-display")
      $(this).addClass("menu-display")
      $(this).siblings().addClass("submenu-display");
      $(this).parents(".submenu-item").siblings(".active-menu-wrap").addClass("overview-active")
      if ($(".active-menu-wrap").hasClass("overview-active")) {
        $(this).parents(".submenu-item").siblings(".active-menu-wrap").removeClass("d-block")
      } else {
        $(this).parents(".submenu-item").siblings(".active-menu-wrap").addClass("d-block")
      }
      $(".overview-link").removeClass("active-link");
      if ($(".overview-link").hasClass("active-link")) {
        $(this).siblings(".active-menu-wrap").removeClass("d-block")
      }
    }
  })

  // =========================================================
  // overview-link on click functionality
  // =========================================================

  $(".menu-item li .overview-link").on("click", function () {
    $(this).siblings(".active-menu-wrap").removeClass("overview-active")
    $(this).addClass("active-link")
    if ($(".active-menu-wrap").hasClass("overview-active")) {
      $(this).siblings(".active-menu-wrap").removeClass("d-block");
    } else {
      $(this).siblings(".active-menu-wrap").addClass("d-block");
    }
    $(".item-heading").each(function () {
      if ($(this).hasClass("menu-display")) {
        $(this).removeClass("menu-display")
        $(this).siblings(".submenu-item-wrap").removeClass("submenu-display")
      }
    })
  })

  if ($(window).width() >= 991) {
    $(".menu-wrapper").addClass("onhover-wrapper");
  } else {
    $(".menu-wrapper").removeClass("onhover-wrapper");
  }

  $(".onhover-wrapper").hover(function () {
    if ($(window).width() >= 991) {
      $(this).find(".submenu-wrap").addClass("d-block")
      $('.menu-wrapper .submenu-wrap').removeAttr('style')
      $('.menu-wrapper .submenu-item').removeAttr('style')
    }
  }, function () {
    if ($(window).width() >= 991) {
      $(this).find(".submenu-wrap").removeClass("d-block")
    }
  })

  $('.menu-item').mouseleave(function () {
    $(this).parents(".submenu-wrap").removeClass("d-block")
    $(".hover-menu-item li").removeClass("d-block")
    $(".hover-menu-item #overview-links").addClass("d-block")
  })

  $(".hover-menu-item #overview-links").addClass("d-block")

  $(".header-main-menu li").hover(function () {
    var onhoverHref = $(this).children().attr("href").substr(1)

    $(".hover-menu-item li").each(function () {
      var onhoverID = $(this).attr("id")

      if (onhoverHref == onhoverID) {
        $(this).addClass("d-block")
      } else {
        $(this).removeClass("d-block")
      }
    })
  });
});

// =========================================================
// Page scroll position to top at page refresh
// =========================================================

function scrollTop() {
  $(window).scrollTop(0);
}

// =========================================================
// Same tab after page refresh
// =========================================================

function activeTab() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    localStorage.setItem('activeTab', $(this).attr('href'));
  });

  var activeTab = localStorage.getItem('activeTab');

  if (activeTab) {
    $('.secondary-nav .nav a[href="' + activeTab + '"]').tab('show');
  }
}

//===========================================================
// on hover display submenu-item-wrap 
//===========================================================

function onHover() {
  $(".item-heading").hover(function () {
    $(".active-menu-wrap").addClass("d-none")
    $(this).siblings().addClass("d-block")
    $(".submenu-item-wrap").each(function () {
      if ($(this).hasClass("submenu-display")) {
        $(this).removeClass("submenu-display")
      }
    })
    if ($(".active-menu-wrap").hasClass("overview-active")) {
      $(this).parents(".submenu-item").siblings(".active-menu-wrap").addClass("d-none")
    }
    if ($(".overview-link").hasClass("active-link")) {
      $(".overview-link").siblings(".active-menu-wrap").removeClass("d-block")
    }
  }, function () {
    $(".active-menu-wrap").removeClass("d-none")
    $(".item-heading").each(function () {
      if ($(this).hasClass("menu-display")) {
        $(this).siblings().addClass("submenu-display")
      }
    })
    $(this).siblings().removeClass("d-block")
    if ($(".active-menu-wrap").hasClass("overview-active")) {
      $(this).parents(".submenu-item").siblings(".active-menu-wrap").addClass("d-none")
    }
    if ($(".overview-link").hasClass("active-link")) {
      $(".overview-link").siblings(".active-menu-wrap").addClass("d-block")
    }
  })
}

// =========================================================
// overview-link on hover functionality
// =========================================================

function overlinkHover() {
  $(".menu-item li .overview-link").hover(function () {
    $(this).siblings(".active-menu-wrap").removeClass("d-none");
    $(".item-heading").each(function () {
      if ($(this).hasClass("menu-display")) {
        $(this).siblings().removeClass("submenu-display")
      }
    })
  }, function () {
    $(".item-heading").each(function () {
      if ($(this).hasClass("menu-display")) {
        $(this).siblings().addClass("submenu-display")
      }
    })
    $(this).siblings(".active-menu-wrap").addClass("d-none");
  })
}

$(window).resize(function () {

  if ($(window).width() >= 991) {
    $(".menu-wrapper .submenu-wrap").removeAttr("style")
    $(".menu-wrapper .submenu-item").removeAttr("style")
    $(".menu-wrapper .submenu-item .submenu-item-wrap").removeAttr("style")
    $(".header .super-nav .container .menu-tab").removeAttr("style");
    $(".menu-wrapper").addClass("onhover-wrapper");
  } else {
    $(".menu-wrapper").removeClass("onhover-wrapper");
  }

  $(".onhover-wrapper").hover(function () {
    if ($(window).width() >= 991) {
      $(this).find(".submenu-wrap").addClass("d-block")
      $('.menu-wrapper .submenu-wrap').removeAttr('style')
      $('.menu-wrapper .submenu-item').removeAttr('style')
    }
  }, function () {
    if ($(window).width() >= 991) {
      $(this).find(".submenu-wrap").removeClass("d-block")
    }
  })

  if ($(window).width() >= 991) {
    $(".header .super-nav .container .menu-tab").removeAttr("style")
    $(".header .super-nav .container .search-box").removeAttr("style")
    $(".main-container").css("margin-top", "145px")
  } else {
    $(".main-container").css("margin-top", "115px")
  }

  if ($(window).width() >= 991) {
    // onHover();

    $(".item-heading").on('click', function () {
      $(".item-heading").removeClass("menu-display")
      $(".submenu-item-wrap").removeClass("submenu-display")
      $(this).addClass("menu-display")
      $(this).siblings().addClass("submenu-display");
    })
  } else {
    $(".item-heading").hover(function () {
      $(this).siblings().removeClass("d-block")
      $(".active-menu-wrap").removeClass("d-none")
    })
    $(".item-heading").off('click')

    $(".menu-item li .overview-link").hover(function () {
      $(this).siblings(".active-menu-wrap").addClass("d-block");
    })
  }
})





