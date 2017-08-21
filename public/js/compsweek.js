$(document).ready(function(){
	

      $(window).fadeThis({speed:700,reverse:false,distance:60});
    
      $("#past").on('show.bs.modal', function (event){
        var button = $(event.relatedTarget);
        var modal =$(this);
        modal.find("#event-title").css("background-image","url('"+button.data('images')+"')");
        modal.find("#event-head").html(button.data('title'));
        modal.find('#event-description').html(button.data('description'));
        modal.find('#event-date').html(button.data('date'));
        modal.find('#event-time').html(button.data('time'));
        modal.find('#event-csi').html("CSI Members :-"+button.data('csi'));
        modal.find('#event-noncsi').html("Non-CSI Members:-"+button.data('noncsi')); 
        modal.find('#prize').html(button.data('prize'));
        modal.find('#event-contact1').html(button.data('contact1'));
        modal.find('#event-contact2').html(button.data('contact2'));
        console.log(button.data('prize'))
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
          var member = $('#member option:selected').text();
          var rfno = $('#rfno').val();

          $("#status").hide();
          $.ajax({
            url:'regcw.php',
            data : {fname:fname,lname:lname,email:email,phone:phno,year:year,event:events,member:member,rfno:rfno},
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
 var eventscar = $(".events-car");
eventscar.owlCarousel({
          items : 3, //10 items above 1000px browser width
          itemsDesktop : [1000,2], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });

     eventscar.trigger('owl.play',5000);
});