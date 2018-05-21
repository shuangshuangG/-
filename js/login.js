define(["public/reg_model","public/jquery-2.0.0"],function(reg){
	//验证码
	var code = [];
	for(var i = 0;i < 4;i ++){
		var chr = Math.round(Math.random()*74+48);
		if( (chr>48 && chr < 58) || (chr>64 && chr < 91) || (chr>96 && chr < 123))
			code.push( String.fromCharCode(chr) )
		else i--;
	}
	var stringCode = code.join("");
	$("#code").text(stringCode);
	
	$(".sp1").on("click",function(){
		$(".sp1").css({"color":"#cc5252"});
		$(".item_left").css({"display":"block"});
		$(".item_right").css({"display":"none"});
		$(".sp2").css({"color":"gray"});
	})
	$(".sp2").on("click",function(){
		$(".sp2").css({"color":"#cc5252"});
		$(".sp1").css({"color":"gray"});
		$(".item_left").css({"display":"none"});
		$(".item_right").css({"display":"block"});
	})
	
	var flag = {
		"#username":false,
		"#password":false,
		"code":false
	};
	
	$(".mobile input").on("blur",function(){
		var id = "#"+this.id;
		if(!reg.init(id)) 
			$(id).next().css({"display":"block"});
		else{
			flag[id] = true;
			console.log(flag)
			$(id).next().css({"display":"none"});
		}
	})
	
	$(".mobile_code input").on("blur",function(){
		if(this.value == $("#code").text()){
			flag.code = true;
			$("#code").next().css({"display":"none"});
		}
		else $("#code").next().css({"display":"block"});
	})
	
	$("#btn").on("click",function(){
		var succCount = 0;
		for(var i in flag){
			if(flag[i]) succCount ++;
		}
		if(succCount == 3){
			var opt = {
				url:"php/user_list.php",
				type:"post",
				data:{
						username:$("#username").val(),
						password:$("#password").val(),
						type:"login"
					}
			}
			$.ajax(opt).then(function(res){
				if(res == "-1") alert("该用户不存在!");
				else if(res == "0") alert("密码错误!");
				else location.href = "index.html";
			})
		}
		else alert("请先完善信息！");
	})
})