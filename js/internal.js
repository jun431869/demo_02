
$(document).ready(function () {

  //獲獎彈窗
  $(".md-award_bth").click(function () {
    $(".md").removeClass("active");
    $(".md-award").addClass("active");
    $("body").addClass("active");
  });

  //攻略彈窗
  $(".md-guide_bth").click(function () {
    $(".md").removeClass("active");
    $(".md-guide").addClass("active");
    $("body").addClass("active");
  });

  //廣宣彈窗
  $(".md-act_bth").click(function () {
    $(".md").removeClass("active");
    $(".md-act").addClass("active");
    $("body").addClass("active");
  });


  //彈窗取消
  $(".md-close,.md .md-overlay").click(function () {
    $(".md").removeClass("active");
    $("body").removeClass("active");
  });

  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });

  //錨點移動
  $(".m_a").click(function () {
    $("html,body").animate({ scrollTop: $(".bootstrap").offset().top }, 800);
  });

  $(".m_b").click(function () {
    $("html,body").animate({ scrollTop: $(".self").offset().top }, 800);
  });

  $(".m_c").click(function () {
    $("html,body").animate({ scrollTop: $(".rwd_img").offset().top }, 800);
  });

  // 表格切換
  $('.ranking_tab li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".ranking_tab li").removeClass('active');
    $('.ranking_table').eq($tabIndex).fadeIn().siblings(".ranking_table").hide();
  });

  
  //浮動按鈕 隨捲軸移動


  $(window).on('scroll', function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
      $('.cm').stop().animate({ 'top': scrollTop + 300 + 'px' }, 400);
    } else {
      $('.cm').stop().animate({ 'top': '300px' }, 400);
    }
  });



  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

});

