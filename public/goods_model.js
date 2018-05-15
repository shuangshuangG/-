//创建商品对象
define(["public/jquery-2.0.0"],function(){
	function createEle(){
	}
	createEle.prototype = {
		constructor:createEle,
		init:function(item,ele){
			this.ele = ele ? ele : "";
			this.item = item;
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href);
			if(item.id) $img.attr("data-id",item.id);
			if(item.color) $img.attr("data-color",item.color);
			
			$a.append($img);
			
			if(item.title){
				var $p1 = $("<p>");
				$p1.addClass("p1");
				$p1.text(item.title);
				$a.append($p1);
			}
			if(item.content){
				var $p2 = $("<p>");
				$p2.addClass("p2");
				$p2.text(item.content);
				$a.append($p2);
			}
			
			if(ele) $(ele).append($a);
			else return $a;
		}
	}
	return new createEle();
})