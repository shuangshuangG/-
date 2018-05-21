<?php
	header("Content-type: text/html; charset=utf-8");
	$servername = "localhost:3306";
	$username = "root";
	$password = "";
	$dbname = "wb_date";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	mysqli_query($conn,"SET NAMES UTF8");
	if($conn->connect_error){
		die("数据库连接失败：".$conn->connect_error);
	}
	
	// echo "连接成功";
?>