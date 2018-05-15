//放大镜效果
function Magnifier(ele){
	this.ele = ele;
	this.init();
}
Magnifier.prototype = {
	constructor:Magnifier,
	init(){
		this.img = this.ele.children("img");
		this.ele.on("mouseenter",$.proxy(this.ratio,this));
	},
	ratio(event){
		this.scale = 4;
		this.img.css({
			"height":this.img.height() * 4,
			"width":this.img.width() * 4
		}).animate({"opacity":"1"},300,function(){
			
		})
	}
}
