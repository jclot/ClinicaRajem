/*

Template: Medileaf - Health and Medical HTML Template
Author: CLINICARAJEMglobalsolutions
Design and Developed by: CLINICARAJEMglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Menu
:: Sticky
:: Tooltip
::counter
::FancyBox
::Owl carousel
:: Swiper slider
::Slickslider
::Magnific Popup
::City Select
::Shuffle
::datetimepicker
::select2
::Range Slider
::Countdown
::Back to top
::Progressbar

======================================
[ End table content ]
======================================*/
//CLINICARAJEM var

(function ($) {
  "use strict";
  var CLINICARAJEM = {};

  /*************************
    Predefined Variables
  *************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $progressBar = $('.skill-bar'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*************************
        Menu
    *************************/
  CLINICARAJEM.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

  /*************************
           Sticky
  *************************/

  CLINICARAJEM.isSticky = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.header-sticky').addClass('is-sticky');
      } else {
        $('.header-sticky').removeClass('is-sticky');
      }
    });
  };



  /*************************
       Tooltip
  *************************/
  CLINICARAJEM.Tooltip = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }

  /*************************
        Popover
  *************************/
  CLINICARAJEM.Popover = function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }

  /*************************
         Counter
  *************************/
  CLINICARAJEM.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };

  /*************************
      Fancy Box
 *************************/


  /*************************
       Owl carousel
  *************************/
  CLINICARAJEM.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;

        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }

  /*************************
        Swiper slider
  *************************/
  CLINICARAJEM.swiperAnimation = function () {
    var siperslider = jQuery(".swiper-container");
    if (siperslider.length > 0) {
      var swiperAnimation = new SwiperAnimation();
      var swiper = new Swiper(".swiper-container", {
        init: true,
        direction: "horizontal",
        effect: "slide",
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          init: function () {
            swiperAnimation.init(this).animate();
          },
          slideChange: function () {
            swiperAnimation.init(this).animate();
          }
        }
      });
    }
  }

  /*************************
        Slickslider
  *************************/
  CLINICARAJEM.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    }
  };

  /*************************
      Magnific Popup
  *************************/
  CLINICARAJEM.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.portfolio-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
          iframe: {
            patterns: {
              facebook: {
                src: function (src) {
                  return src.replace("facebook.com", "facebook.com/plugins/video.php");
                }
              }
            }
          }
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }

  /*************************
      City Select
  *************************/

  document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Select2 al cargar la página
    $('#provincia, #canton, #distrito').select2();

    const provinciaSelect = $('#provincia');
    const cantonSelect = $('#canton');
    const distritoSelect = $('#distrito');

    provinciaSelect.on('change', function () {
      const provinciaId = this.value;

      // Si se selecciona "Seleccione Provincia", restablecer todo
      if (!provinciaId) {
        cantonSelect.empty().append('<option value="">Seleccione Cantón</option>').prop('disabled', true);
        distritoSelect.empty().append('<option value="">Seleccione Distrito</option>').prop('disabled', true);

        // Reinicializar Select2 para reflejar cambios
        cantonSelect.select2('destroy').select2();
        distritoSelect.select2('destroy').select2();
        return; // Salir de la función para evitar ejecutar el fetch innecesario
      }

      // Reiniciar y habilitar solo el select de cantón
      cantonSelect.empty().append('<option value="">Seleccione Cantón</option>').prop('disabled', false);
      distritoSelect.empty().append('<option value="">Seleccione Distrito</option>').prop('disabled', true);
      cantonSelect.select2('destroy').select2();
      distritoSelect.select2('destroy').select2();

      // Cargar cantones según la provincia seleccionada
      fetch(`/api/cantones/${provinciaId}`)
        .then(response => response.json())
        .then(data => {
          Object.entries(data).forEach(([cantonId, canton]) => {
            cantonSelect.append(new Option(canton.nombre, cantonId));
          });
          cantonSelect.select2(); // Re-inicializar Select2 con nuevas opciones
        });
    });

    cantonSelect.on('change', function () {
      const provinciaId = provinciaSelect.val();
      const cantonId = this.value;

      if (!cantonId) {
        distritoSelect.empty().append('<option value="">Seleccione Distrito</option>').prop('disabled', true);
        distritoSelect.select2('destroy').select2();
        return;
      }

      distritoSelect.empty().append('<option value="">Seleccione Distrito</option>').prop('disabled', false);
      distritoSelect.select2('destroy').select2();

      fetch(`/api/distritos/${provinciaId}/${cantonId}`)
        .then(response => response.json())
        .then(data => {
          Object.entries(data).forEach(([distritoId, nombre]) => {
            distritoSelect.append(new Option(nombre, distritoId));
          });
          distritoSelect.select2();
        });
    });
  });


  /*************************
      Shuffle
  *************************/
  CLINICARAJEM.shuffle = function () {
    if ($('.my-shuffle-container').exists()) {
      var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function () {
        jQuery(".btn-filter").on('click', function () {
          var data_group = jQuery(this).attr('data-group');
          if (data_group != 'all') {
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on('click', function () {
          $(".filters-group .btn-filter").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  }

  /*************************
        Datetimepicker
  *************************/


  CLINICARAJEM.datetimepickers = function () {

    if ($('.datetimepickers').exists()) {

      function aplicarRestriccionesHorarias(fecha) {
        if (!fecha) return;

        const dayOfWeek = fecha.day();
        let minTime, maxTime;
        const esHoy = fecha.isSame(moment(), 'day');

        if ([1, 2, 4].includes(dayOfWeek)) {
          minTime = moment('09:00', 'HH:mm');
          maxTime = moment('19:00', 'HH:mm');
        } else if ([3, 5].includes(dayOfWeek)) {
          minTime = moment('09:00', 'HH:mm');
          maxTime = moment('17:00', 'HH:mm');
        } else {
          return;
        }

        const hoy = moment();
        minTime = moment(hoy.format('YYYY-MM-DD') + ' ' + minTime.format('HH:mm'));
        maxTime = moment(hoy.format('YYYY-MM-DD') + ' ' + maxTime.format('HH:mm'));

        $('#datetimepicker-03').datetimepicker('minDate', minTime);
        $('#datetimepicker-03').datetimepicker('maxDate', maxTime);

        const currentTime = $('#datetimepicker-03').datetimepicker('date');
        if (currentTime) {
          const currentTimeOnly = moment(hoy.format('YYYY-MM-DD') + ' ' + currentTime.format('HH:mm'));
          if (currentTimeOnly.isBefore(minTime) || currentTimeOnly.isAfter(maxTime)) {
            $('#datetimepicker-03').datetimepicker('date', minTime);
          }
        }
      }

      $('#datetimepicker-01, #datetimepicker-02').datetimepicker({
        locale: moment.locale('es'),
        format: 'L',
        minDate: moment().startOf('day'),
        daysOfWeekDisabled: [0, 6],
        date: moment()
      });

      $('#datetimepicker-03, #datetimepicker-04').datetimepicker({
        format: 'LT',
        daysOfWeekDisabled: [0, 6]
      });

      aplicarRestriccionesHorarias(moment());

      $('#datetimepicker-01').on('change.datetimepicker', function (e) {
        aplicarRestriccionesHorarias(e.date);
      });

      $('#datetimepicker-03').on('show.datetimepicker', function (e) {
        const fechaSeleccionada = $('#datetimepicker-01').datetimepicker('date') || moment();
        aplicarRestriccionesHorarias(fechaSeleccionada);
      });
    }
  };


  /*************************
      Select2
  *************************/
  CLINICARAJEM.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({ dropdownCssClass: 'bigdrop' });
      }

    }
  };

  /*************************
      Range Slider
  *************************/
  CLINICARAJEM.rangesliders = function () {
    if ($('.cost-price , .shop-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#cost-price-1").ionRangeSlider({
        min: 0,
        max: 32,
        from: 4,
        to: 100,
        hide_min_max: true,
        hide_from_to: false
      });

      //slider-6
      $("#price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });

    }
  };

  /*************************
           Countdown
  *************************/
  CLINICARAJEM.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '12/25/2022 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }

  /*************************
       Back to top
  *************************/
  CLINICARAJEM.goToTop = function () {
    var $goToTop = $('#back-to-top');
    $goToTop.hide();
    $window.scroll(function () {
      if ($window.scrollTop() > 100) $goToTop.fadeIn();
      else $goToTop.fadeOut();
    });
    $goToTop.on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }

  /*************************
          Progressbar
  *************************/
  CLINICARAJEM.progressBar = function () {
    if ($progressBar.exists()) {
      $progressBar.each(function (i, elem) {
        var $elem = $(this),
          percent = $elem.attr('data-percent') || "100",
          delay = $elem.attr('data-delay') || "100",
          type = $elem.attr('data-type') || "%";

        if (!$elem.hasClass('progress-animated')) {
          $elem.css({
            'width': '0%'
          });
        }
        var progressBarRun = function () {
          $elem.animate({
            'width': percent + '%'
          }, 'easeInOutCirc').addClass('progress-animated');

          $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
        };
        $(elem).appear(function () {
          setTimeout(function () {
            progressBarRun();
          }, delay);
        });
      });
    }
  };

  /****************************************************
       CLINICARAJEM Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
    CLINICARAJEM.shuffle(),
      CLINICARAJEM.progressBar();
  });

  //Document ready functions
  $document.ready(function () {
    CLINICARAJEM.counters(),
      CLINICARAJEM.slickslider(),
      CLINICARAJEM.datetimepickers(),
      CLINICARAJEM.select2(),
      CLINICARAJEM.dropdownmenu(),
      CLINICARAJEM.carousel(),
      CLINICARAJEM.isSticky(),
      CLINICARAJEM.Tooltip(),
      CLINICARAJEM.Popover(),
      CLINICARAJEM.goToTop(),
      CLINICARAJEM.countdownTimer(),
      CLINICARAJEM.mediaPopups(),
      CLINICARAJEM.swiperAnimation(),
      CLINICARAJEM.rangesliders();
  });

})(jQuery);
