$(document).ready(function () {

  // ============================================
  // form validation
  // ============================================

  $(".address-wrap .form-wrap input[type='checkbox']").click(function() {
    if($(this).prop("checked") == true){
      console.log("true")
      var current_address = $(".current-addr").val()
      $(".permanent-addr").val(current_address)
      $('.permanent-addr').attr('readonly', true);
    }
    else if($(this).prop("checked") == false){
      $(".permanent-addr").val('')
      $('.permanent-addr').attr('readonly', false);
    }
  })

  $(".btn-submit").on('click', function() {
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var currentAddr = $('#currentAddr').val();
    var permanentAddr = $("#permanentAddr").val();
    var phoneno = $('#phoneno').val();
    var email = $('#email').val();
    if(fname == '')
    {
      alert('Please enter your First Name');
      $('#fname').focus();
    }
    else if(lname == '')
    {
      alert('Please enter your Last Name');
      $('#lname').focus();
    }
    else if(email == '')
    {
      alert('Please enter your Email Id');
      $('#email').focus();
    }
    else if(phoneno == '')
    {
      alert('Please enter your Mobile Number');
      $('#phoneno').focus();
    }
    else if($(".form-control option").is(":selected")) {
      alert('Please select your City');
      $('#selectcity').focus();
    }
    else if(currentAddr == '')
    {
      alert('Please enter your Current Address');
      $('#currentAddr').focus();
    }
    else if(permanentAddr == '')
    {
      alert('Please enter your Permanent Address');
      $('#permanentAddr').focus();
    }
  })

  $(".image-warpper").on('click', function () {
    var img_src = $(this).children().attr("src")
    $(".imagepreview").attr("src", img_src)
  })

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

  $('.header .super-nav .container .menu-tab .menu .menu-wrapper').hover(
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
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        autoplay: true,
      },
      321: {
        items: 2,
        nav: true,
        autoplay: true,
      },
      480: {
        items: 3,
        nav: true,
        autoplay: true,
      },
      640: {
        items: 4,
        nav: true,
        autoplay: true,
      },
      767: {
        items: 5,
        nav: true,
        autoplay: true,
      },
      991: {
        items: 6,
        nav: true,
        autoplay: true,
      },
      1200: {
        items: 8,
        nav: true,
        autoplay: true,
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
        $(".main-container").animate({ marginTop: 122 })
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
    $(".tab-dropdown .dropdown #dropdownMenuLink .text").text(itemText);
  });

  $(".secondary-nav .nav .nav-item a").on('click', function () {
    var tabText = $(this).text();
    $(".tab-dropdown .dropdown #dropdownMenuLink .text").text(tabText);
  })

  // =======================================================
  // Keep same dropdown item text on refresh
  // =======================================================

  var windowHref = window.location.hash;
  $('.dropdown-menu a').each(function () {
    var dropdownHref = $(this).attr('href');
    var dropdownText = $(this).text();
    if (windowHref == dropdownHref) {
      $(".dropdown-toggle .text").text(dropdownText)
    }
  })

  //=======================================================
  // open submenu-wrap class onclick of arrow
  //=======================================================

  $(".header .super-nav .container .menu-tab .menu li .arrow").on('click', function () {
    $(this).parents(".submenu").siblings(".submenu-wrap").slideToggle()
    $(".mobile-menu-wrapper").removeAttr("style")
    $(".header-main-menu li a").removeClass("active")
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
    if ($(window).width() >= 991) {
      $(".header-main-menu li a").removeClass("overview-active")
      $(".header-main-menu li:first-child a").addClass("overview-active")
      $(this).parents(".submenu-wrap").removeClass("d-block")
      $(".hover-menu-item li").removeClass("d-block")
      $(".hover-menu-item #overview-links").addClass("d-block")
      $(".overview-active").addClass("active")
      $(".hover-menu-item li").removeClass("active-menu")
    }
  })

  if ($(window).width() >= 991) {
    $(".hover-menu-item #overview-links").addClass("d-block active-menu")
  }

  $(".header-main-menu li").hover(function () {
    if ($(window).width() >= 991) {
      var onhoverHref = $(this).children().attr("href").substr(1)

      $(".hover-menu-item li").each(function () {
        var onhoverID = $(this).attr("id")

        if (onhoverHref == onhoverID) {
          $(this).addClass("d-block")
        } else {
          $(this).removeClass("d-block")
        }
      })
    }
  });

  if ($(window).width() <= 991) {
    $(".submenu-wrap .menu-item .submenu-item").removeClass("col-sm-4")
    $(".submenu-wrap .menu-item .submenu-item").addClass("col-sm-12")
  } else {
    $(".submenu-wrap .menu-item .submenu-item").removeClass("col-sm-12")
    $(".submenu-wrap .menu-item .submenu-item").addClass("col-sm-4")
  }

  $(".submenu-wrap .header-main-menu .angle").on('click', function () {
    $(this).parent().next().slideToggle()
    $(this).parent().prev().toggleClass("active")
  })

  $(".header .tab-dropdown .dropdown a").on('click', function () {
    var windowHeight = $(window).height();
    var headerHeight = $(".header").height();
    var dropdownHeight = $(".tab-dropdown").height();
    var headerDropdown = headerHeight + dropdownHeight;
    var finalHeight = windowHeight - headerDropdown - 15;
    $(".header .tab-dropdown .dropdown .dropdown-menu").css({ "max-height": finalHeight });
  })

  $(".header .super-nav .container .toggle-menu").on('click', function () {
    var win_height = $(window).height();
    var mobile_header = $(".mobile-header").height();
    var menu_height = win_height - mobile_header
    $(".header .super-nav .container .menu-tab .menu").css({ "max-height": menu_height });
  })

  $(".submenu-wrap .menu-item li a").on('click', function () {
    if ($(window).width() >= 991) {
      var link_href = $(this).attr("href").substr(1)
      $(".submenu-wrap .menu-item li a").removeClass("active overview-active");
      $(this).addClass("overview-active");
      $(".hover-menu-item li").removeClass("active-menu")
      $(".overview-active").parents(".submenu-item").siblings().find("li").each(function () {
        var link_id = $(this).attr("id")
        if (link_href == link_id) {
          $(this).addClass("active-menu")
          $(".hover-menu-item li").removeClass("d-block")
          $(this).addClass("d-block")
        }
      })
    }
  })

  $(".submenu-item .header-main-menu").mouseleave(function () {
    if ($(window).width() >= 991) {
      if ($(".hover-menu-item li").hasClass("active-menu")) {
        $(this).parent().siblings().find("li").removeClass("d-block")
        $(this).parent().siblings().find("li.active-menu").addClass("d-block")
      }
    }
  })

  if ($(window).width() <= 991) {
    $(".header-main-menu li a").removeClass("active overview-active")
  }
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

$(window).resize(function () {

  $(".expand-view").removeAttr('style')
  $(".upper-footer-wrapper .row .arrow").removeClass("fa-angle-up")
  $(".upper-footer-wrapper .row .arrow").addClass("fa-angle-down")

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

  if ($(window).width() <= 991) {
    $(".header-main-menu li a").removeClass("active overview-active")
  } else {
    $(".header-main-menu li:first-child a").addClass("overview-active")
  }

  $(".header .super-nav .container .menu-tab").removeAttr("style")

  $(".header .tab-dropdown .dropdown .dropdown-menu").removeClass("show")

  if ($(window).width() >= 991) {
    $(".hover-menu-item #overview-links").addClass("d-block active-menu")
  } else {
    $(".hover-menu-item #overview-links").removeClass("d-block active-menu")
  }

  if ($(window).width() <= 991) {
    $(".submenu-wrap .menu-item .submenu-item").removeClass("col-sm-4")
    $(".submenu-wrap .menu-item .submenu-item").addClass("col-sm-12")
  } else {
    $(".submenu-wrap .menu-item .submenu-item").removeClass("col-sm-12")
    $(".submenu-wrap .menu-item .submenu-item").addClass("col-sm-4")
  }

  if ($(window).width() >= 991) {
    $(".menu-wrapper .submenu-wrap").removeAttr("style")
    $(".menu-wrapper .submenu-item").removeAttr("style")
    $(".menu-wrapper .submenu-item .submenu-item-wrap").removeAttr("style")
    $(".header .super-nav .container .menu-tab").removeAttr("style");
    $(".menu-wrapper").addClass("onhover-wrapper");
  } else {
    $(".menu-wrapper").removeClass("onhover-wrapper");
  }

  if ($(window).width() >= 991) {
    $(".header .super-nav .container .menu-tab").removeAttr("style")
    $(".header .super-nav .container .search-box").removeAttr("style")
    $(".main-container").css("margin-top", "145px")
  } else {
    $(".main-container").css("margin-top", "122px")
  }
})





