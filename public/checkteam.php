<?php
	

	$servername = "localhost";
	$username = "";
	$password = "";
	$databasename="test";

	$con = mysqli_connect($servername,$username,$password,$databasename);
	if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
	}
	$tablename = $_POST['tablename'];
	$team= mysqli_real_escape_string($con,$_POST['tname']);

	$sql = "select * from ".$tablename." where tname = '$team' ";
	$result = mysqli_query($con,$sql);
	if( mysqli_num_rows($result) > 0){
		echo 1;
	}
	else{
		echo 0;
	}


mysqli_close($con);
?>