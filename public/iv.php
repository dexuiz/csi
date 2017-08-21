<?php
	
	$servername = "localhost";
	$username = "";
	$password = "";
	$databasename="test";
	$con = mysqli_connect($servername,$username,$password,$databasename);

	if (!$con) {
    die("3");
	}
	$fname = mysqli_real_escape_string($con,$_POST['fname']);
	$lname = mysqli_real_escape_string($con,$_POST['lname']);
	$roll = mysqli_real_escape_string($con,$_POST['roll']);
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$phno = mysqli_real_escape_string($con,$_POST['phno']);
	$year =  mysqli_real_escape_string($con,$_POST['year']);
	$dept =  mysqli_real_escape_string($con,$_POST['dept']);

	$sql  = "select rollno FROM iv WHERE rollno = $roll" ;
	$result =  mysqli_query($con, $sql);
	if ( mysqli_num_rows($result) > 0) {	
		echo "1";
	}
	else {		
			$sql = "insert into iv(fname,lname,rollno,email,phone,year,dept) values ('$fname','$lname',$roll,'$email','$phno','$year','$dept')";
			if(mysqli_query($con,$sql)){	
				echo "2";
			}
			mysqli_close($con);	
	}
?>
