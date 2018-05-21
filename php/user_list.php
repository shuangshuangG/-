<?php
	require("./_connect.php");
	$username = @$_POST["username"];
	$password = @$_POST["password"];
	$phone_num = @$_POST["phone_num"];
	$email = @$_POST["email"];
	$recommed = @$_POST["recommed"];
	$type = @$_POST["type"];
	$password = md5($password);

	$sql_select = "SELECT username,password FROM user_list";
	$sql_register = "INSERT user_list(username,password,email,phoneNum,recommed)
					 VALUES('{$username}','{$password}','{$email}','{$phone_num}','{$recommed}')";
	
	$res_select = $conn->query($sql_select);
	
	if($type == "register"){								//注册操作
		while($row = $res_select->fetch_assoc()) {
			//用户名已经存在
			if($row["username"] == $username) die ("0");
		}		
		$res_register = $conn->query($sql_register);
		if($res_register) die ("1");		
	}
	else if($type == "login"){								//登录操作
		while($row = $res_select->fetch_assoc()) {
			if($row["username"] == $username){
				if($row["password"] != $password) die ("0");//密码错误
				else die ("1");								//登录成功
			}
		}
		die ("-1");											//用户名错误
	}
	else if($type == "shopCar"){
		$sql_shopCar = "SELECT * FROM shopcar";
		$res_shopCar = $conn->query($sql_shopCar);
		
		while($row = $res_shopCar->fetch_assoc()){
		    $rows[] = $row;
		}
		echo json_encode($rows);
	}
	else if($type == "add"){
		$id = @$_POST["id"];
		$sql = "SELECT * FROM shopcar WHERE id='{$id}'";
		$result = $conn->query($sql);
		if($result->num_rows<= 0){	
			$href = @$_POST["href"];
			$title = @$_POST["title"];
			$content = @$_POST["content"];
			$price = @$_POST["price"];
			$num = @$_POST["num"];	
			$sql_insert = "INSERT shopcar(id,href,title,content,num,price)
						VALUES('{$id}','{$href}','{$title}','{$content}','{$num}','{$price}')";
			$res_insert = $conn->query($sql_insert);
			if($res_insert) echo 1;
			else echo 0;
		}
		else{
			$num = @$_POST["num"];
			$sql_undata = "update shopcar set num='{$num}' where id='{$id}'";
			$res_undata = $conn->query($sql_undata);
			if($res_undata) echo 2;
			else echo 0;
		}
	}
	else if($type == "del"){
		$id = @$_POST["id"];
		$sql = "DELETE FROM shopcar WHERE id='{$id}'";
		$res_del = $conn->query($sql);
		if($res_del) echo 3;
		else echo 0;
	}
?>