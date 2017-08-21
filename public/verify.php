<?php

	$servername = "localhost";
	$username = "crcecsidatabase";
	$password = "csicouncil16";
	$databasename="csicompsweek";

	$con = mysqli_connect($servername,$username,$password,$databasename);

	if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
	}
    $email = mysqli_real_escape_string($con,$_REQUEST["email"]);
    $vote = mysqli_real_escape_string($con,$_REQUEST["voteto"]);
    $sql ="select email from votes where email = '".$email."' and verify like 'y'" ;


    if( $result = mysqli_query($con,$sql)){
    	$count = mysqli_num_rows($result);
    	if($count > 0 ){
    		echo "You have already voted";//email id repeated
    		return;
    	}
    	else{
    			$sql="update votes set verify = 'y' where email like '".$email."' and vote like '".$vote."'";
    			if(mysqli_query($con, $sql)){
    					echo "Your vote is been confirmed"; //voteid
    					return;
    			}
    			else{
    					echo "Try Later"; //insertion error
    					return;
    			}
    	}
    }

?>