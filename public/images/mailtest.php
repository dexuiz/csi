<?php
         $to = $_REQUEST["mail"];
         $voteid="";
         $subject = "CSI-CRCE PHOTOSHOT Verification ";
         $link="www.csicrce.com/verify.php?email=".$to."&voteid=".$voteid;
         $message = "<h1>Thankyou for voting.</h1>";
         $message .= "<p>To confirm your vote please click on the link <a href = '".$link."'>".$link."</a> </p>";

         echo $link;
         $header = "From:crce.csi@gmail.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
      ?>