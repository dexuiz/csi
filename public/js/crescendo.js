

          
         function checkname(tablename,id){
            var tname = $(id +" #tname").val();
            $.ajax({
              url:'checkteam.php',
              data : {tname: tname,tablename: tablename},
              type : 'POST',
              success:function(result){
                 if(result === '1'){
                    $(id + " #teamblock").html('<p style = "color:red;">Team name already taken.</p>');
                    $(id+"btn").prop('disabled', true);
                  }
                  else {
                    $(id +" #teamblock").html(" ");
                    $(id+"btn").prop('disabled', false);
                  }
                }
            });
         }

    
     
      $("#past").on('show.bs.modal', function (event){
        var button = $(event.relatedTarget);
        var modal =$(this);
        var image='<img src="'+button.data('images')+'" class = "img-responsive">';
        modal.find("#event-title").html(image);
        modal.find("#event-head").text(button.data('title'));
        modal.find('#event-description').text(button.data('description'));
        modal.find('#event-date').text(button.data('date'));
        modal.find('#event-venue').html(button.data('venue'));
        modal.find('#event-csi').text("CSI Members :-"+button.data('csi'));
        modal.find('#event-noncsi').text("Non-CSI Members:-"+button.data('noncsi'));
        modal.find('#event-contact1').text(button.data('contact1'));
        modal.find('#event-contact2').text(button.data('contact2'));
      });


      $(document).ready(function() {


      /*Code for validation of cs */
         $('#csregisterform').submit(function(event){

          event.preventDefault();
            var form = $(this);
            var data = form.serialize()+"&case=cs";
            $("#csregisterbtn").prop('disabled', true);
            $("#csclosebtn").prop('disabled', true);
            $("#csresetbtn").prop('disabled', true);
            $.ajax({
              url:'cresendo.php',
              data : data,
              type : 'POST',
              success:function(result){
                 if(result === '1'){
                   var msg ="<h1>It seems like you have already been registered Successfully</h1><br></div>";
                      $("#cmessage").html(msg);
                      $("#confirm").modal();

                  }
                  else if(result ===  '2'){
                      var msg = "<h1><strong>Congratulation !</strong> You have  registered successfully for Counter Strike</h1><br>";
                      $("#cmessage").html(msg);
                      document.getElementById("csregisterform").reset();
                      $("#csregister").modal('hide');
                      $("#confirm").modal();
            
                }
                else{
                      $("#cmessage").html("<h1>Please try after some time</h1>");
                      $("#confirm").modal();
                }
                }
            });
            $("#csregisterbtn").prop('disabled', false);
            $("#csclosebtn").prop('disabled', false);
            $("#csresetbtn").prop('disabled', false);
          
        });


         /*Code for goc*/
         $('#gocregisterform').submit(function(event){

          event.preventDefault();
            var form = $(this);
            var data = form.serialize()+"&case=goc";
            $("#gocregisterbtn").prop('disabled', true);
            $("#gocclosebtn").prop('disabled', true);
            $("#gocresetbtn").prop('disabled', true);
            $.ajax({
              url:'cresendo.php',
              data : data,
              type : 'POST',
              success:function(result){
                 if(result === '1'){
                   var msg ="<h1>It seems like you have already been registered Successfully</h1><br></div>";
                      $("#cmessage").html(msg);
                      $("#confirm").modal();

                  }
                  else if(result ===  '2'){
                      var msg = "<h1><strong>Congratulation !</strong> You have  registered successfully for Game of Code</h1><br>";
                      $("#cmessage").html(msg);
                      document.getElementById("gocregisterform").reset();
                      $("#gocregister").modal('hide');
                      $("#confirm").modal();
            
                }
                else{
                      $("#cmessage").html("<h1>Please try after some time</h1>");
                      $("#confirm").modal();
                }
                }
            });
            $("#gocregisterbtn").prop('disabled', false);
            $("#gocclosebtn").prop('disabled', false);
            $("#gocresetbtn").prop('disabled', false);
          
        });


         /*Code for validation of junyard wars*/

         $('#jwregisterform').submit(function(event){

          event.preventDefault();
            var form = $(this);
            var data = form.serialize()+"&case=jw";
            $("#jwregisterbtn").prop('disabled', true);
            $("#jwclosebtn").prop('disabled', true);
            $("#jwresetbtn").prop('disabled', true);
            $.ajax({
              url:'cresendo.php',
              data : data,
              type : 'POST',
              success:function(result){
                 if(result === '1'){
                   var msg ="<h1>It seems like you have already been registered Successfully</h1><br></div>";
                      $("#cmessage").html(msg);
                      $("#confirm").modal();

                  }
                  else if(result ===  '2'){
                      var msg = "<h1><strong>Congratulation !</strong> You have  registered successfully for junkyard wars</h1><br>";
                      $("#cmessage").html(msg);
                      document.getElementById("jwregisterform").reset();
                      $("#jwregister").modal("hide");
                      $("#confirm").modal();
            
                }
                else{
                      $("#cmessage").html("<h1>Please try after some time</h1>");
                      $("#confirm").modal();
                }
                }
            });
            $("#jwregisterbtn").prop('disabled', false);
            $("#jwclosebtn").prop('disabled', false);
            $("#jwresetbtn").prop('disabled', false);
          
        });

         /*Code for validation of lazer tag*/

         $('#lazerregisterform').submit(function(event){

          event.preventDefault();
            var form = $(this);
            var data = form.serialize()+"&case=lazer";
            $("#lazerregisterbtn").prop('disabled', true);
            $("#lazerclosebtn").prop('disabled', true);
            $("#lazerresetbtn").prop('disabled', true);
            $.ajax({
              url:'cresendo.php',
              data : data,
              type : 'POST',
              success:function(result){
                 if(result === '1'){
                   var msg ="<h1>It seems like you have already been registered Successfully</h1><br></div>";
                      $("#cmessage").html(msg);
                      $("#confirm").modal();

                  }
                  else if(result ===  '2'){
                      var msg = "<h1><strong>Congratulation !</strong> You have  registered successfully for the Lazer Tag</h1><br>";
                      $("#cmessage").html(msg);
                      document.getElementById("lazerregisterform").reset();
                      $("#lazerregister").modal("hide");
                      $("#confirm").modal();
            
                }
                else{
                      $("#cmessage").html("<h1>Please try after some time</h1>");
                      $("#confirm").modal();
                }
                }
            });
            $("#lazerregisterbtn").prop('disabled', false);
            $("#lazerclosebtn").prop('disabled', false);
            $("#lazerresetbtn").prop('disabled', false);
          
        });


      });