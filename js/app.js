$(function () {

  //// フロートヘッダーメニュー
  //ヒーローバナーの高さを取得
//  //画面のスクロール量がヒーローバナーの高さより高ければ、ヘッダーの見た目を変える
        
    var targetHeight = $('.js-float-menu').offset().top;
    $(window).on('scroll', function(){
        $('.u-float-header-area').toggleClass('u-float-header-area--active',$(this).scrollTop() > targetHeight);
//        $('.l-hero').toggleClass('l-hero--active',$(this).scrollTop() > targetHeight);


    });
    
    ////モーダル
    //モーダルをshowする要素をクリックすると、
    $('.js-show-modal').on('click', function(){
        //モーダルを表示させる
        $(this).siblings('.js-show-modal-target').fadeIn();
        //カバーを表示させる
        $('.js-show-modal-cover').fadeIn();
    });

    $('.js-hide-modal').on('click', function(){
        $('.js-show-modal-target').fadeOut("fast");
        $('.js-show-modal-cover').fadeOut("fast");
    })
    
    $('.js-show-modal-cover').on('click', function(){
        $('.js-show-modal-target').fadeOut("fast");
        $('.js-show-modal-cover').fadeOut("fast");
    })

    
    
});