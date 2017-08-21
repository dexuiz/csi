<?php
	
	$servername = "localhost";
	$username = "";
	$password = "";
	$databasename="test";

	$con = mysqli_connect($servername,$username,$password,$databasename);

	if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
	}


	$fname = $_POST['fname'];
	$lname= $_POST['lname'];
	$email = $_POST['email'];
	$phone =  $_POST['phone'];
	$year =  $_POST['year'];
	$event = $_POST['event'];
	$sql  = "select id FROM events WHERE event like '".$event."' and email like '".$email."' and fname like '".$fname."'";
	$result = mysqli_query($con, $sql)  ;
	if ( mysqli_num_rows($result) > 0) {	
		echo "1";
	}
	else {		
			$sql = "insert into events(fname,lname,email,phone,year,event) values ('".$fname."','".$lname."','".$email."','".$phone."','".$year."','".$event."')";
			mysqli_query($con,$sql);
			mysqli_close($con);		
			echo "2";
	}




?>