define(["public/reg_model","public/jquery-2.0.0"],function(reg){
	var flag = {
		"#phone_num":false,
		"#username":false,
		"#email":false,
		"#password":false,
		"#confirm":false,
		"#recommed":true
	};
	$(".item input").on("blur",function(){
		var id = "#"+this.id;
		if(!reg.init(id)) 
			$(id).next().css({"display":"block"});
		else{
			flag[id] = true;
			$(id).next().css({"display":"none"});
		}
	})
	$("#recommed").on("blur",function(){
		if($("#recommed").val()){
			if(!reg.init("#phone_num","#recommed")){
				flag["#recommed"] = false;
				$("#recommed").next().css({"display":"block"});
			}
			else{
				$("#recommed").next().css({"display":"none"});
			}
		}
	})
	$("#confirm").on("blur",function(){
		if($("#confirm").val() != $("#password").val()){
			flag["#confirm"] = false;
			$("#confirm").next().css({"display":"block"});
		}	
		else{
			flag["#confirm"] = true;
			$("#confirm").next().css({"display":"none"});
		}
	})
	
	$("#btn").on("click",function(){
		var succCount = 0;
		for(var i in flag){
			if(flag[i]) succCount ++;
		}
		if(succCount == 6){
			var opt = {
				url:"php/user_list.php",
				type:"post",
				data:{
						username:$("#username").val(),
						password:$("#password").val(),
						phone_num:$("#phone_num").val(),
						email:$("#email").val(),
						recommed:$("#recommed").val(),
						type:"register"
					}
			}
			$.ajax(opt).then(function(res){
				// console.log(res);
				if(res == "1") location.href = "login.html";
				else alert("用户名已存在")
			})
		}
		else alert("请先完善信息！");
	})
})