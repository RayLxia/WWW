/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
    $(".hd-banner-cot").on("mouseenter",function () {
        $(".jt-cot").stop().fadeIn(800);
    });
    $(".hd-banner-cot").on("mouseleave",function () {
        $(".jt-cot").stop().fadeOut(800);
    });
    function getBannerBoxMove() {
        return $(window).width();
    };
    var moveNum = 0;
    $(".jt-fr-po").click(function () {
        if(moveNum>1){
            moveNum=0;
        }else{
            moveNum++;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".jt-fl-po").click(function () {
        if(moveNum<=0){
            moveNum=2;
        }else{
            moveNum--;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".last-tab .f-ul li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".last-tab .s-ul").stop().animate({"top": $(this).index() * (-174)}, 800)
    });

    var index = 0;
    var len = $(".main-r-m .zhuanjia-box ul").children().length;
    console.log(len);
    function getShow() {
        return $(".main-r-m ul li.show").index();
    }
    $(".main-r-m ul li:nth-child(1)").addClass("show");
    $(".pre").click(function () {
        index = getShow() - 1;
        if(getShow()== 0 || index == 0 ){
            $(".main-r-m ul li:nth-child(1)").addClass("show").siblings().removeClass("show");
        }else if (index > 0 && index < len-1) {
            $(".pre").bind("click");
            $(".main-r-m ul li:nth-child(" + (index+1) + ")").addClass("show").siblings().removeClass("show");
        } else if (index == 0) {
            $(".tab-3-ul li:nth-child(1)").addClass("show").siblings().removeClass("show");
            $(".pre").unbind("click");
        }
    });
    $(".next").click(function () {
        index = getShow() + 1;
        if (index >= 0 && index < len) {
            $(".next").bind("click");
            $(".main-r-m ul li:nth-child(" + (index + 1) + ")").addClass("show").siblings().removeClass("show");
        } else if (index == (len-1)) {
            $(".tab-3-ul li:nth-child("+len+")").addClass("show").siblings().removeClass("show");
            $(".tab-3-main .next").unbind("click");
        }
    });
    $(".tab-1 .line").width($(".tab-1 .title1 .fl").width());
});