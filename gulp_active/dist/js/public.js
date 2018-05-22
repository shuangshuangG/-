//顶部广告
var flag = false;
$(".close-advi").on("click",function(){
	$(".advi").stop().slideUp(200,"linear",function(){
		console.log("广告已隐藏!");
	})
})

// 顶栏导航动画
$(".to_wanbiao_hidden").stop().slideUp(0);
$(".to_fuwu_link").stop().slideUp(0);
$(".relative").hover(function(){
	$(".to_wanbiao").toggleClass("active");
	$(".to_wanbiao_hidden").stop().slideDown(200);
},function(){
	$(".to_wanbiao").toggleClass("active");
	$(".to_wanbiao_hidden").stop().slideUp(200);
})

$(".relative2").hover(function(){
	$(".to_fuwu").toggleClass("active");
	$(".to_fuwu_link").stop().slideDown(200);
},function(){
	$(".to_fuwu").toggleClass("active");
	$(".to_fuwu_link").stop().slideUp(200);
})

$(".wb_app").on("mouseenter",function(){
	document.querySelector(".to_wanbiao_img").src = "img/new_1.jpg";
})
$(".wb_weixin").on("mouseenter",function(){
	document.querySelector(".to_wanbiao_img").src = "img/3.png";
})

//悬浮固定元素
$(".talk_close").hover(function(){
	$(".talk_close").css({
		"transform": "rotate(180deg)",
		"transition": "all 0.2s linear"
	})
},function(){
	$(".talk_close").css({
		"transform": "rotate(0deg)",
		"transition": "all 0.2s linear"
	})
})
$(".attach_talk").hover(function(){
	$(".attach_talk_msg").css({"display":"block"});
	$(".attach_talk").css({
		"height":"190px",
		"width":"376px"
	});
	$(".attach_talk_msg").stop().animate({
		"right":"76px",
		"opacity":1
	},800)
},function(){
	$(".attach_talk_msg").stop().animate({
		"opacity":0
	},function(){
		$(".attach_talk_msg").css({"display":"none","right":"54px"});
		$(".attach_talk").css({
			"height":"66px",
			"width":"58px"
		});
	})
})

$(".talk_close").on("click",function(){
	$(".attach_talk_msg").animate({
		"opacity":0
	},function(){
		$(".attach_talk_msg").css({"display":"none","right":"54px"});
		$(".attach_talk").css({
			"height":"66px",
			"width":"58px"
		});
	})
})
$(".attach_bottom ul li").each(function(index){
	$(".attach_bottom ul li").eq(index).hover(function(){
		$(".attach_bottom ul li a").eq(index).css({"display":"inline-block"})
		$(".attach_bottom ul li a").eq(index).stop().animate({"opacity":"1"})
	},function(){
		$(".attach_bottom ul li a").eq(index).stop().animate({"opacity":"0"},function(){
			$(".attach_bottom ul li a").eq(index).css({"display":"none"});
		})
	})
})
		//返回顶部
$(".to_top").on("click",function(){
	$("body,html").animate({"scrollTop":"0"},300);
})

//footer
var $ul = $(".in_right ul");
var $img = $(".in_right img");
var $p = $(".in_right p");
$ul.each(function(index){
	var $li = $ul.eq(index).children();
	var $img_item = $img.eq(index);
	var $p_item = $p.eq(index);
	$li.each(function(item){
		$li.eq(item).on("mouseenter",function(){
			$li.each(function(i){
				if($li.eq(i).hasClass("li_active")){
					$li.eq(i).removeClass("li_active");
				}
			})
			$li.eq(item).addClass("li_active");
			if(index == 0) $img_item.attr("src","img/pic-"+item+".png");
			else $img_item.attr("src","img/pis-"+item+".png");
			
			if(index == 0){
				if(item == 0) $p_item.text("关注领100现金券");
				else $p_item.text("全球买表 国内保修");
			}
			else{
				if(item == 0) $p_item.text("每日推送手表干货文章");
				else $p_item.text("每周推送打折促销活动信息");
			}
		})
})
})
$(".more_link").eq(0).on("click",function(){
	$(".wb_more_link").eq(0).toggle(400);
})
$(".more_link").eq(1).on("click",function(){
	$(".wb_more_link").eq(1).toggle(400);
})