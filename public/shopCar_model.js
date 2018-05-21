define(["public/jquery-2.0.0"],function(){
	function shopCarOption(){
//		this.addShopCar({id:"5"});
	}
	shopCarOption.prototype = {
		constructor:shopCarOption,
		addShopCar(item){
			this.shopCarOpt(item,"add");
		},
		reduceShopCar(item){
			
		},
		delShopCar(item){
			this.shopCarOpt(item,"del");
		},
		shopCarOpt(item,type){
			$.ajax({
				type:"post",
				url:"php/user_list.php",
				async:true,
				data:{
					id:item.id,
					href:item.href,
					title:item.title,
					content:item.content,
					price:item.price,
					num:item.num,
					type:type
				}
			}).then(function(res){
				if(res == "1") alert("成功添加到购物车！");
				else if(res == "2") location.reload();
				else if(res == "3") location.reload();
				else alert("添加失败！");
			})
		}
	}
	return new shopCarOption();
})