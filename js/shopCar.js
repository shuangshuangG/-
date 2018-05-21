require(["public/shopCar_model","public/jquery-2.0.0"],function(results){
	$.ajax({
		type:"post",
		url:"php/user_list.php",
		data:{type:"shopCar"}
	}).then(function(res){
		var result = JSON.parse(res);
		result.forEach(function(item){
			var str = `<div class="goods_list" data-id="${item.id}">
					<!--ajax渲染内容-->
					<span class="span"></span>
					<img src="${item.href}"/>
					<span class="goods_title">${item.title}</span>
					<span class="goods_price"> ${item.price}</span>
					<!--数量控制-->
					<div class="num_item">
						<span class="num_ctrol num_reduce">-</span>
						<input type="text" name="" class="num" value="${item.num}" />
						<span class="num_ctrol num_add">+</span>
					</div>
					<span class="goods_conut"> ${item.price.substr(2,item.price.length-2)*item.num}</span>
					<span class="goods_opt">删除</span>				
				</div>`;
			$(".list_item").html( $(".list_item").html() + str );
		})
		//数量控制 减
		$(".num_reduce").each(function(item){
			$(".num_reduce").eq(item).on("click",function(){
//				console.log($(this).parents(".goods_list").attr("data-id"));
				if($(this).next().val()>1){
					$(this).next().val($(this).next().val()-1);
					var id = $(this).parents(".goods_list").attr("data-id");
					var num = $(this).next().val();
					results.addShopCar({
						id:id,
						num:parseInt(num)
					})
				}
			})
		})
		//加
		$(".num_add").each(function(item){
			$(".num_add").eq(item).on("click",function(){
				if($(this).prev().val()<5){
					$(this).prev().val($(this).prev().val()*1+1);
					var id = $(this).parents(".goods_list").attr("data-id");
					var num = $(this).prev().val();
					results.addShopCar({
						id:id,
						num:parseInt(num)
					})
				}
			})
		})
		//改
		$(".num").each(function(item){
			$(".num").eq(item).on("blur",function(){
				if( isNaN( parseInt($(this).val()) ) || parseInt($(this).val())>5 || parseInt($(this).val())<1 ){
					$(this).val("5");
				}
				$(this).val(parseInt($(this).val()))
				var id = $(this).parents(".goods_list").attr("data-id");
				var num = $(this).val();
				results.addShopCar({
					id:id,
					num:parseInt(num)
				})
				
			})
		})
		//删
		$(".goods_opt").on("click",function(){
			var id = $(this).parent().attr("data-id");
			results.delShopCar({
				id:id
			})
		})
		//选择按钮控制
		var flag = true;
		var priceCount = 0;
		var goodsNum = 0;
		$(".span").on("click",function(){
			$(this).toggleClass("classActive");

			if(!$(this).hasClass("title")){
				if($(this).hasClass("classActive")){
					goodsNum++;
					priceCount += $(this).nextAll(".goods_conut").text()*1;
				}
				else
				{
					goodsNum--;
					priceCount -= $(this).nextAll(".goods_conut").text()*1;
				}	
			}
			$(".numGoods").text(goodsNum);
			$(".numPrice").text(priceCount);
		})
		
		$(".first_span").on("click",function(){
			flag = !flag;
			if(flag){
				priceCount = 0;
				goodsNum = 0;
				$(".span").each(function(index){
					$(".span").eq(index).removeClass("classActive");	
				})
			}
			else{
				priceCount = 0;
				goodsNum = $(".span").length-3;
				$(".span").each(function(index){
					$(".span").eq(index).addClass("classActive");
					priceCount += $(".span").eq(index).nextAll(".goods_conut").text()*1;
				})
			}
			$(".numGoods").text(goodsNum);
			$(".numPrice").text(priceCount);
		})
	})
})