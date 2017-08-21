$(document).ready(function(){ 
	var top =0;
var btnclick = 0;
	$(window).scroll(function(){$navTop = $(window).scrollTop();
	if($navTop > 300  )
	{
		$('#navigation').css('background-color','#0f8ec7');
		top =1;
	}
	else
	{

		$('#navigation').css('background-color','rgba(0,0,0,0)');
		top=0;

	}
});
$("#navbtn").click(function(){
	if(top == 0)
	{
		if(btnclick == 0 )
		{
			btnclick=1;		
			$('#navigation').css('background-color','#0f8ec7');
		}
		else
		{
			btnclick = 0;		
			$('#navigation').css('background-color','rgba(0,0,0,0)');
		}
	}
	
});


});