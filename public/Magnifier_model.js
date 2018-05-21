define(["public/jquery-2.0.0"],function(){
//放大镜效果
	function Magnifier(){
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init(ele){
			this.ele = $(ele);
			this.img = this.ele.children("img");
			this.size = {
				"height":this.img.height(),
				"width":this.img.width()
			};
			this.ele.on("mouseenter",function(){
				this.moveIn();
				this.ele.on("mousemove",$.proxy(this.move,this));
			}.bind(this));
			this.ele.on("mouseleave",$.proxy(this.moveOut,this));
		},
		moveIn(){
			//先判断图片是否进行了放大  防止鼠标高频触发事件
			if(this.img.height() == this.size.height){
				this.img.css({
					"height":this.img.height() * 2,
					"width":this.img.width() * 2
				}).stop().animate({"opacity":"1"},300)
			}
		},
		moveOut(){
			var that = this.img;
			if(this.img.height()/2 == this.size.height){
				that.stop().animate({"opacity":"0"},300,function(){
					that.css({
						"height":that.height() / 2,
						"width":that.width() / 2
					})
				})
			}
		},
		move(event){
			this.img.css({
				"left": -event.offsetX/2,
				"top": -event.offsetY/2
			})
		}
	}
	
	return new Magnifier();
})
