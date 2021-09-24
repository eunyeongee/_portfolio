$(function () {

    var burger = $('.menu-btn-animate');
    var menuTxt = $('.menu_txt_wrap');
    var menuBtn = $('.menu_btn');
    var menuBox = $('#nav');
    var menuBg = $('#menu_bg');

    burger.each(function (index) {
        var $this = $(this);

        $this.click(function (e) {

            e.preventDefault();
            $this.stop().toggleClass('active');


            if (burger.hasClass('active') === true) {

                menuTxt.stop().addClass('on');
                menuBtn.stop().addClass('active');
                menuBg.stop().fadeIn(350);
                menuBox.stop().addClass('open_menu');


            } else {

                menuTxt.stop().removeClass('on');
                menuBtn.stop().removeClass('active');
                menuBg.stop().fadeOut(350);
                menuBox.stop().removeClass('open_menu');
            }


        });

    });
    
    var menu = $('.nav_wrap > .nav_inner01 > .menu_item');
    
    if( $("body").hasClass("project_wrap") === true ){
       
       menu.eq(0).find('a').addClass('page');
    
       }
    
    


});