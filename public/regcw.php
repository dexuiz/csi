<?php
	
	$servername = "localhost";
	$username = "crcecsidatabase";
	$password = "csicouncil16";
	$databasename="csicompsweek";

	$con = mysqli_connect($servername,$username,$password,$databasename);

	if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
	}


	$fname = mysqli_real_escape_string($con,$_POST['fname']);
	$lname= mysqli_real_escape_string($con,$_POST['lname']);
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$phone = mysqli_real_escape_string($con, $_POST['phone']);
	$year =  mysqli_real_escape_string($con,$_POST['year']);
	$event = mysqli_real_escape_string($con,$_POST['event']);
	$rfno = mysqli_real_escape_string($con,$_POST['rfno']);
	$member = mysqli_real_escape_string($con,$_POST['member']);

	$sql  = "select id FROM compsweek WHERE event like '".$event."' and email like '".$email."' and fname like '".$fname."'and lname like '".$lname."'" ;
	$result = mysqli_query($con, $sql)  ;
	if ( mysqli_num_rows($result) > 0) {	
		echo "1";
	}
	else {		
			$sql = "insert into compsweek(fname,lname,email,phone,year,event,rfno,member) values ('".$fname."','".$lname."','".$email."','".$phone."','".$year."','".$event."','".$rfno."','".$member."')";
			if(mysqli_query($con,$sql)){
				echo "2";
			}
			mysqli_close($con);	
	}




?>