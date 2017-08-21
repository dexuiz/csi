
      $('#registerform').submit(function(event){
          event.preventDefault();
          var data = $('#registerform').serialize();
          $.ajax({
            url:'iv.php',
            data : data,
            type : 'POST',
            success:function(result){
              if(result == '1'){
                 var msg ="<h1>It seems like you have already been registered Successfully</h1><br><div><p>Kindly Pay Rs.2,150 and Confirm your Seat.</p></div>";
                    $("#cmessage").html(msg);
                    $("#confirm").modal();
              }
              else{
                 var msg ="<h1><strong>Congratulation !</strong> You have  registered successfully for the Industrial Visit</h1><br><div ><p>Kindly Pay Rs.2,150 and confirm your seat.</p><p>Your seats is not yet confirmed until the payment is done.</p><br><br></div>";
                    $("#cmessage").html(msg);
                    $("#confirm").modal();

                }
              }
          });
        });