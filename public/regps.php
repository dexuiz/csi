<?php
	
	$servername = "localhost";
	$username = "crcecsidatabase";
	$password = "csicouncil16";
	$databasename="csicompsweek";

	$con = mysqli_connect($servername,$username,$password,$databasename);

	if (!$con) {
		echo "con error";
    die("Connection failed: " . mysqli_connect_error());
	}


	$fname = mysqli_real_escape_string($con,$_POST['fname']);
	$lname= mysqli_real_escape_string($con,$_POST['lname']);
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$member = mysqli_real_escape_string($con,$_POST['vote']);

	$sql  = "select id FROM votes WHERE  email like '".$email."' and fname like '".$fname."'and lname like '".$lname."' and vote like '".$member."'" ;
	$result = mysqli_query($con, $sql)  ;
	if ( mysqli_num_rows($result) > 0) {	
		echo "1";
	}
	else {		
			$sql = "insert into votes(fname,lname,email,vote) values ('".$fname."','".$lname."','".$email."','".$member."')";
			if(mysqli_query($con,$sql)){
		         $subject = "CSI-CRCE PHOTOSHOT Verification ";
		         $link="www.csicrce.com/verify.php?email=".$email."&voteto=".$member;
		         $message = "<h1>Thankyou for voting.</h1>";
		         $message .= "<p>To confirm your vote please click on the link <a href = '".$link."'>".$link."</a> </p>";
		         $header = "From:contact@csicrce.com \r\n";
		         $header .= "MIME-Version: 1.0\r\n";
		         $header .= "Content-type: text/html\r\n";
		         
		         $retval = mail ($email,$subject,$message,$header);
		         if($retval){

		         echo "2";
		         }
			}
			mysqli_close($con);	
	}




?>