require(["public/Magnifier_model","public/jquery-2.0.0","public/shopCar_model"],function(response,ca,shopcar){
//	console.log(response,shopcar);
	//获取地址栏中传入的商品id
	var idIndex = window.location.href.indexOf("id");
	var id = window.location.href[idIndex+3];
	var opt = {
		type:"post",
		url:"php/goods_list.php",
		async:true,
		data:{"id":id}
	}
	$.ajax(opt).then(function(res){
//		 console.log(JSON.parse(res));
		var res = JSON.parse(res);
		var goodsItem = `<p class="p1">${res[0].title}</p>
					<p class="p2">${res[0].content}</p>
					<p class="p3">
						<span>型号:16155570</span>
						<span>编号:28605</span>
						<span>品牌:迪沃斯</span>
						<span>销量:5602</span>
					</p>
					<div class="price">
						<div class="price_item">
							<span class="sp1">万表价</span>
							<span class="sp2">${res[0].price}</span>
						</div>
						<div class="day_item">
							<span class="sp1">分期</span>
							<span class="sp3">每月461元×12期</span>
						</div>
						<div class="there_item">
							<span class="sp1">领券</span>
							<span class="sp4">520元迪沃</span>
							<span class="sp1">更多</span>
						</div>
					</div>`;
		$(".right_top").html(goodsItem);
		$(".detail_uper_left_img img").attr("src",res[0].href);
		$(".detail_uper_left_img").css({
			"background":"url("+res[0].href+")"
		})
		
		//数量控制
		response.init(".detail_uper_left_img");
		var num = $("#num");
		$(".num_reduce").on("click",function(){
			if(num.val() > 1){
				num.val(num.val()-1);
			}
		})
		$(".num_add").on("click",function(){
			if(num.val() < 5){
				num.val(num.val()*1+1);
			}
		})
		num.on("blur",function(){
			if( isNaN( parseInt(num.val()) ) || parseInt(num.val())>5 || parseInt(num.val())<1 ){
				num.val("5");
			}
			num.val(parseInt(num.val()))
		})
		//款式选择
		var $p = $(".style_item p");
		$p.on("click",function(){
			$p.each(function(item){
				$p.eq(item).css({"border":"1px solid #ddd"})
			})
			this.style.border = "1px solid black";
		})
		
		
		//加入购物车
		$("#addCar").on("click",function(){
			shopcar.addShopCar({
				id:id,
				href:res[0].href,
				title:res[0].title,
				content:res[0].content,
				num:parseInt(num.val()),
				price:res[0].price
			});
		})
	});

})
