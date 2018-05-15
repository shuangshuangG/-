define(["public/jquery-2.0.0"],function(){
//放大镜效果
	function Magnifier(ele){
		this.ele = $(ele);
		this.init();
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init(){
			this.img = this.ele.children("img");
			this.ele.on("mouseenter",$.proxy(this.ratio,this));
		},
		ratio(event){
			this.scale = 2;
			this.img.css({
				"height":this.img.height() * this.scale,
				"width":this.img.width() * this.scale
			}).animate({"opacity":"1"},300,function(){
				console.log(1);
			})
		}
	}
	
	new Magnifier(".detail_uper_left_img");	
})
