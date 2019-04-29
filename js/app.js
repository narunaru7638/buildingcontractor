$(function () {

  //// フロートヘッダーメニュー
  //ヒーローバナーの高さを取得
//  //画面のスクロール量がヒーローバナーの高さより高ければ、ヘッダーの見た目を変える
        
    var targetHeight = $('.js-float-menu').offset().top;
    $(window).on('scroll', function(){
        $('.u-float-header-area').toggleClass('u-float-header-area--active',

        $(this).scrollTop() > targetHeight);

    });
    
    //モーダルをshowする要素をクリックすると、
    $('.js-show-modal').on('click', function(){
//                 alert('test');
//        
//        var modalPositionX =;
//        var modalPositionY =;
        
//        var modalWidth = $('.js-show-modal-target').width();
//        var windowWidth = $(window).width();
//        $('.js-show-modal-target').attr('style',
//                                        'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');

        $(this).siblings('.js-show-modal-target').show();
//        $('.js-show-modal-target').show();
        $('.js-show-modal-cover').show();
    });
//
//    $('.js-hide-modal').on('click', function(){
//        $('.js-show-modal-target').hide();
//        $('.js-show-modal-cover').hide();
//    })
    
    
});