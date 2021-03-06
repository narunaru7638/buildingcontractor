$(function () {

    //// フロートヘッダーメニュー
    //ヒーローバナーの高さを取得        
    var targetHeight = $('.js-float-menu').offset().top;
    //画面のスクロール量がヒーローバナーの高さより高ければ、ヘッダーの見た目を変える
    $(window).on('scroll', function(){
        $('.u-float-header-area').toggleClass('u-float-header-area--active',$(this).scrollTop() > targetHeight);
    });
    
    ////モーダル
    //モーダルを表示させる要素をクリックすると、
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

    
    //////モーダルスライダー
    ////モーダル
    //モーダルスライダーを表示させる要素をクリックすると、
    var cliclItemNum;
//    var $slideContainer = $('.c-slider__container');
//    var slideItemNum = $('.c-slider__item').length;
//    var slideItemWidth = $('.c-slider__item').innerWidth();
//    console.log(slideItemWidth);
//    var slideContainerWidth = slideItemWidth * slideItemNum;
//    var DURATION = 500;
    var $slideContainer;
    var slideItemNum;
    var slideItemWidth;
    console.log(slideItemWidth);
    var slideContainerWidth;
    var DURATION;
    var currentItemNum;

    $('.js-show-modal-slider').on('click', function(e){
        $slideContainer = $('.c-slider__container');
        slideItemNum = $('.c-slider__item').length;
        slideItemWidth = $('.c-slider__item').innerWidth();
        console.log(slideItemWidth);
        slideContainerWidth = slideItemWidth * slideItemNum;
        DURATION = 500;
        
        
        //ボタンの通常の処理を止める
        e.preventDefault();
        
        //モーダルを表示させる
        $(this).siblings('.js-show-modal-slider-target').fadeIn();
        //カバーを表示させる
        $('.js-show-modal-slider-cover').fadeIn();
        
        //clickしたスライドのNoを取得
        clickItemNum = $('.js-show-modal-slider').index(this) + 1;
        
        ////スライダー

        $slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');
        var slideInitialWidth = (clickItemNum-1) * slideItemWidth;
        $slideContainer.animate({left: '-='+slideInitialWidth+'px'}, 0);//-=は今のleftからさらに-の意味
        currentItemNum = clickItemNum;
    
    });
//    console.log(clickItemNum);

    $('.js-hide-modal-slider').on('click', function(){
        $('.js-show-modal-slider-target').fadeOut("fast");
        $('.js-show-modal-slider-cover').fadeOut("fast");
    })

    $('.js-show-modal-slider-cover').on('click', function(){
        $('.js-show-modal-slider-target').fadeOut("fast");
        $('.js-show-modal-slider-cover').fadeOut("fast");
    })
    



    $('.js-slide-next').on('click', function(){

        if(currentItemNum < slideItemNum){
            $slideContainer.animate({left: '-='+slideItemWidth+'px'}, DURATION);//-=は今のleftからさらに-の意味
            currentItemNum++;

        }
    });
    $('.js-slide-prev').on('click', function(){

        
        if(currentItemNum > 1){
            $slideContainer.animate({left: '+='+slideItemWidth+'px'}, DURATION);
            currentItemNum--;

        }

    });
    
    
    
    // SPメニュー
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    
    // メニューをクリックしたらメニューを閉じる
    $('.js-click-close-menu').on('click', function () {
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    
    
//    if(currentItemNum > 1){
//        $slideContainer.animate({left: '+='+slideItemWidth+'px'}, DURATION);
//        currentItemNum--;
//    }

    

    
});