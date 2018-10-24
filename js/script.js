$(document).ready(function () {

  $("html,body").animate({ scrollTop: 0 });

  activeTab();
  // setHeight();

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
    // setHeight();
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
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  // =========================================================
  // Toggle search box on click
  // =========================================================

  $(".header .super-nav .container .search-wrap").on('click', function () {
    $(".header .super-nav .container .search-box").slideToggle();
    $(".arrow").toggleClass("fa-angle-down fa-angle-up")
    $(".header .super-nav .container .search-box").toggleClass("display");
    if ($(".header .super-nav .container .search-box").hasClass("display")) {
      if ($(window).width() <= 991) {
        $(".tab-dropdown").animate({ marginTop: 55 })
        $(".main-container").animate({ marginTop: 170 })
      }
    } else {
      if ($(window).width() <= 991) {
        $(".tab-dropdown").animate({ marginTop: 5 })
        $(".main-container").animate({ marginTop: 115 })
      } else {
        $(".main-container").animate({ marginTop: 145 })
      }
    }
  })

  $(".header .super-nav .container .toggle-menu").on('click', function () {
    $(".menu-tab").slideToggle('slow');
  })

  $(".header .super-nav .container .menu-tab .close-menu").on('click', function () {
    $(".menu-tab").slideToggle('slow');
  })


});

// =========================================================
// Apply height to wrapper
// =========================================================

function setHeight() {
  var documentHeight = $(document).outerHeight(true);
  $('.left-wrapper').css('min-height', documentHeight);
};

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



