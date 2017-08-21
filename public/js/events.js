$(document).ready(function(){
	

      $(window).fadeThis({speed:700,reverse:false,distance:60});
    
      $("#past").on('show.bs.modal', function (event){
        var button = $(event.relatedTarget);
        var modal =$(this);
        modal.find("#event-title").css("background-image","url('"+button.data('images')+"')");
        modal.find("#event-head").text(button.data('title'));
        modal.find('#event-description').text(button.data('description'));
        modal.find('#event-date').text(button.data('date'));
        modal.find('#event-time').text(button.data('time'));
        modal.find('#event-csi').text("CSI Members :-"+button.data('csi'));
        modal.find('#event-noncsi').text("Non-CSI Members:-"+button.data('noncsi'));
        modal.find('#event-contact1').text(button.data('contact1'));
        modal.find('#event-contact2').text(button.data('contact2'));
      });
$(document).ready(function(){
      var events 
      $("#register").on('show.bs.modal', function (event){
        var button = $(event.relatedTarget);
        var modal =$(this);
        modal.find("#event-title").css("background-image","url('"+button.data('images')+"')");
        modal.find("#event-head").text(button.data('title'));
        events = button.data('title');
      });



      $('#registerform').submit(function(event){
          event.preventDefault();
          var form = $(this);
          var fname = $('#fname').val();
          var lname = $('#lname').val();
          var email = $('#email').val();
          var phno = $('#phno').val();
          var year = $('#year option:selected').text(); 
          $("#status").hide();
          $.ajax({
            url:'functions.php',
            data : {fname:fname,lname:lname,email:email,phone:phno,year:year,event:events},
            type : 'POST',
            success:function(result){
              if(result == '2'){
                    $("#status p").html("<strong>Congratulation !</strong> You Have been registered Successfully");
                    $("#status div").removeClass("alert-danger").addClass("alert-success fade in");
                    $("#status").fadeIn("slow");
              }
              else{
                    $("#status p").html("<strong>Sorry!</strong> You Have already been registered Successfully");
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

});