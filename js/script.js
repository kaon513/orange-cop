$(function() {
  $(window).on('load', function() {
    var locUrl = location.href;
    var setHash = locUrl.split('#');
    //現在のページURLに#が含まれる場合はスクロール移動
    if (setHash[1]) {
      hashMove("#" + setHash[1]);
    }
    //#pagetop
    $('#pagetop a').on('click', function() {
      var href = $(this).attr("href");
      var clkUrl = href.split('#');
      hashMove("#" + clkUrl[1]);
      return false;
    });
    //#から始まるリンクはスクロール
    $('a[href^="#"]').on('click', function() {
      var href = $(this).attr("href");
      var clkUrl = href.split('#');
      hashMove("#" + clkUrl[1]);
    });
    //#を含むリンクは、リンク先と現在のページのURLを比較して判断
    $('a[href*="#"]').on('click', function() {
      var href = $(this).attr("href");
      var pageURL = location.pathname;
      reg = new RegExp(pageURL);
      //ページ名が同じならスクロール移動
      if (href.match(reg)) {
        var clkUrl = href.split('#');
        hashMove("#" + clkUrl[1]);
      }
    });

    function hashMove(trg) {
      var position = $(trg).offset().top;
      if ($('body').hasClass('admin-bar')) {
        position = position - 50;
      } else {
        position = position - 20;
      }
      if ($('body').width() <= 980) {
        position = position - 50; //見出しの文字が切れるのを防ぐ
      } else {
        position = position - 150; //見出しの文字が切れるのを防ぐ
      }
      $('body,html').animate({
        scrollTop: position
      }, '800', 'swing');
    }
  });

  $('.hamburger-wrapper').click(function() {
    // $(this).toggleClass('active');
    $(".menu").toggleClass('active');

    if ($(".menu").hasClass('active')) {
      // if ($(this).hasClass('active')) {
      $('.menu').addClass('active');
      // $('.gnav-hamburger').addClass('active');
      // $('.gnav').addClass('active');
    } else {
      $('.menu').removeClass('active');
      // $('.gnav-hamburger').removeClass('active');
      // $('.gnav').removeClass('active');
    }
  });

  $('.faq-acoordion').click(function() {

    if ($(this).children('.faq-answer').hasClass('open')) {
      $(this).children('.faq-answer').slideUp();
      $(this).children('.faq-answer').removeClass("open");
      $(this).find('span').html("+");
    } else {
      $(this).children('.faq-answer').slideDown();
      $(this).children('.faq-answer').toggleClass("open");
      $(this).find('span').html("-");
    }
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    speed: 100,
    accessibility: false,
    arrows: false,
    centerMode: true,
    // centerPadding:50px,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow: 1,
    centerPadding: '100px', //両サイドの見えている部分のサイズ
    slide: ".slider-bg",
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '10px' //両サイドの見えている部分のサイズ
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '10px' //両サイドの見えている部分のサイズ
        }
      }
    ]
  });

  // var mySwiper = new Swiper ('.swiper-container', {
  //   loop: true,
  //   slidesPerView: 2,
  //   spaceBetween: 10,
  //   centeredSlides : true,
  //   pagination: '.swiper-pagination',
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
  //   autoplay:1000,
  //   speed:0,
  //   effect: 'fade'
  // });

  //
  // //this is where we apply opacity to the arrow
  // $(window).scroll(function () {
  //
  //   //get scroll position
  //   var topWindow = $(window).scrollTop();
  //   //multipl by 1.5 so the arrow will become transparent half-way up the page
  //   var topWindow = topWindow * 1.5;
  //
  //   //get height of window
  //   var windowHeight = $(window).height();
  //
  //   //set position as percentage of how far the user has scrolled
  //   var position = topWindow / windowHeight;
  //   //invert the percentage
  //   position = 1 - position;
  //
  //   //define arrow opacity as based on how far up the page the user has scrolled
  //   //no scrolling = 1, half-way up the page = 0
  //   $('#arrow').css('opacity', position);
  //
  // });

  $('.slick01').slick({ //{}を入れる
    autoplay: true, //「オプション名: 値」の形式で書く
    autoplaySpeed: 2000, // 自動再生のスピード（ミリ秒単位）
    arrows: false,

  });


});
