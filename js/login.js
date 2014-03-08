//<!---------------------------------+
//  Developed by Santanu  Sabata
//  for this script and more.
//  This notice MUST stay intact for legal use
// --------------------------------->

$(document).ready(function() {
	$('#login').click(function(event) {

	
		//remove all the class add the messagebox classes and start fading
		$("#available_email").removeClass().addClass('messagebox1').text('Checking...').fadeIn("slow");
		//check the uname exists or not from ajax
		$.post("authetication.php",{ email:$('#email').val(),password:$('#password').val()} ,function(data)
        {
		  if(data=='yes') //if uname not avaiable
		  {
			  $("#available_email").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Login Sucessfully.....!!!').addClass('messageboxok1').fadeTo(900,1);
			  var url = "index.php?msg=1";			  
			  $(location).attr('href',url);
			});			  
		  }
		  else{
		  	$("#available_email").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html(data).addClass('messageboxerror1').fadeTo(900,1);
			  $("#email").focus();;
			});		
          }
		  
				
        });
 return false;
		
	});
	return false;
  });    
