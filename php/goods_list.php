<?php
	require("./_connect.php");
	$id = @$_POST["id"];
	$sql = "SELECT * FROM goods WHERE id = '{$id}'";
	$result = $conn->query($sql);

	if($result->num_rows <= 0){
	    die("0");
	}
	
	while($row = $result->fetch_assoc()){
	    $rows[] = $row;
	} 

	echo json_encode($rows);
?>