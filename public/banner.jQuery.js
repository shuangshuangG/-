require(["public/jquery-2.0.0"],function(){
	+function($){
		$.fn.myBanner = function(index,options){
			new Banner(this,index,options);
		}
		//背景元素  默认显示的图片  操作按钮
		function Banner(bgEle,index,options){
			this.bgEle = bgEle;
			this.index = index;
			this.img = this.bgEle.children(".banner").find("img");
			this.count = this.img.size();
			this.options = options;
			this.init(this.index);
		}
		
		Banner.prototype = {
			constructor:Banner,
			init:function(){
				this.showBanner(this.index,this.bgEle);
				this.banner_timer = setInterval(function(){
					this.index ++;
					console.log(this.index)
					if(this.index == this.count) this.index = 0;
					this.showBanner(this.index,this.bgEle);
				}.bind(this),3000)
				
				this.bgEle.hover(function(){
					clearInterval(this.banner_timer);
				}.bind(this),function(){
					this.banner_timer = setInterval(function(){
						this.index ++;
						if(this.index == this.count) this.index = 0;
						this.showBanner(this.index,this.bgEle);
					}.bind(this),3000)
				}.bind(this))
				
				$(this.options.left).on("click",function(){
					this.index --;
					if(this.index < 0) this.index = this.count - 1;
					this.showBanner(this.index,this.bgEle);
				}.bind(this));
				
				$(this.options.right).on("click",function(){
					this.index ++;
					if(this.index == this.count) this.index = 0;
					this.showBanner(this.index,this.bgEle);
				}.bind(this));
				
			},
			//每次轮播的图片  轮播图的背景
			showBanner:function(item,bgEle){
	//			var index = this.index;
				//初始化背景颜色和所有轮播图的状态
				this.bgEle.css({"background":this.img.eq(item).attr("data-color")});
	//			console.log(this.img)
				this.img.each(function(index){
					this.img.eq(index).css({"opacity":0,"transform":"scale(1.02)","transition":"none"});
	//				console.log(this.img)
				}.bind(this))
				
				//运动
				this.img.eq(item).animate({"opacity":"1"},800,function(){
					this.img.each(function(item){
						this.img.eq(item).css({"zIndex":0});
					}.bind(this))
					this.img.eq(item).css({"zIndex":1,"transform":"scale(1)","transition":"all 1s linear"});
				}.bind(this))
			}
			
			
		}
		
	}(jQuery);
})
