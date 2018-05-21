define(["public/jquery-2.0.0"],function(){
	function regModel(){
		this.inpObj = {
			userPhone: /^1[3-9][0-9]{9}$/,
			userName: /^[\u4e00-\u9fa5a-z0-9\-_]{4,20}$/i,
			userPwd: /^[0-9a-z\u0021-\u002f]{4,16}$/i,
			userEmail: /\w{6,20}@[a-z0-9]{2,6}\.[a-z]{2,6}/i
		}
	}
	regModel.prototype = {
		constructor:regModel,
		init(ele,eleSelf){
			if(eleSelf) this.eleSelf = eleSelf;
			this.ele = ele;
			switch(this.ele){
				case "#phone_num": 
					{
						if(this.eleSelf) return this.phoneNum(this.eleSelf);
						else return this.phoneNum(this.ele); 
					}break;
				return this.phoneNum(this.ele,this.eleSele); break;
				case "#username": return this.userName(this.ele); break;
				case "#email": return this.email(this.ele); break;
				case "#password": return this.password(this.ele); break;
				default : return 2;
			}
		},
		phoneNum(ele){
			if( this.inpObj.userPhone.test( $(ele).val() ) ) return 1;
		},
		userName(ele){
			if( this.inpObj.userName.test( $(ele).val() ) ) return 1;
		},
		email(ele){
			if( this.inpObj.userEmail.test( $(ele).val() ) ) return 1;
		},
		password(ele){
			if( this.inpObj.userPwd.test( $(ele).val() ) ) return 1;
		}
	}
	
	return new regModel();
})