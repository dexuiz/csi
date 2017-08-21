$(document).ready(function(){
	

      $(window).fadeThis({speed:700,reverse:false,distance:60});
    



      $('#registerform').submit(function(event){
          event.preventDefault();
          var form = $(this);
          var fname = $('#fname').val();
          var lname = $('#lname').val();
          var email = $('#email').val();
          var year = $('#year option:selected').text(); 
          var vote = $('#vote option:selected').text();

          $("#status").hide();
          $.ajax({
            url:'regps.php',
            data : {fname:fname,lname:lname,email:email,year:year,vote:vote},
            type : 'POST',
            success:function(result){
              if(result == '2'){
                    $("#status p").html("Confirmation mail sent at "+ email);
                    $("#status div").removeClass("alert-danger").addClass("alert-success fade in");
                    $("#status").fadeIn("slow");
              }
              else{
                    $("#status p").html("<strong>Sorry!</strong> You have already voted");
                    $("#status div").removeClass("alert-sucess").addClass("alert-danger fade in");
                    $("#status").fadeIn("slow");

                }
              }
          });
        });
      $("#close").click(function(event){
          $("#status").fadeOut("slow",function(){$("#status").hide();});
      });



});