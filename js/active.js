$(function(){
    
    var all = $('.content_wrap');
    var workconbtn = $('.tab_btn_list.maintenance');
    var workcon = $('#Workmaintenance');

    setTimeout(function(){
        
        all.addClass('active');
        workconbtn.addClass('active');
        workcon.addClass('active');

    },250);
   

    //변수를 선언할때 바로 위 부모영역을 꼭 넣어준다.
	var tabBtn = $(".tab_btn_wrap > .tab_btn_list");
    tabBtn.click(function (e) {
        //변수를 선언할때 바로 위 부모영역을 꼭 넣어준다. 그래야 index번호가 알맞게 들어가 1=1/2=2/3=3에 맞게 들어간다.
        var tabCont = $(".works_box > .work_con");
        var target = $(this);
        var index = target.index();

        tabBtn.removeClass('active');
        target.addClass('active');

        tabCont.removeClass('active');
        tabCont.eq(index).addClass('active');

      

    });
    
});