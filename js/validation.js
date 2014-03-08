//<!---------------------------------+
//  Developed by Santanu  Sabata
//  for this script and more.
//  This notice MUST stay intact for legal use
// --------------------------------->



$(document).ready(function() {
	$('#register').click(function(event) {

	//validating username
	   if($("#username").val()=='')
		{
			$("#available_name").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
			 
				$("#available_name").fadeTo(200,0.1,function() //start fading the messagebox
				{ 
				  //add message and change the class of the box and start fading			 
				  $(this).html('User Name is requried').addClass('messageboxerror').fadeTo(900,1);
				  $('#username').focus();			   
				});		
			return false;
		}

		else if($("#email").val()=='')
		{
			$("#available_email").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
			//check the uname exists or not from ajax
			 
			   
				$("#available_email").fadeTo(200,0.1,function() //start fading the messagebox
				{ 
				  //add message and change the class of the box and start fading
				  $(this).html('Email id is Required').addClass('messageboxerror').fadeTo(900,1);
				  $("#email").focus();
				});		
			   
			return false;
		}

		else if($("#password").val()=='')
		{
			//remove all the class add the messagebox classes and start fading
			$("#check_password").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
			//check the uname exists or not from ajax
			 
			   
				$("#check_password").fadeTo(200,0.1,function() //start fading the messagebox
				{ 
				  //add message and change the class of the box and start fading
				  $(this).html(data).addClass('messageboxerror').fadeTo(900,1);
				  $("#password").focus();;
				});		
				
			   
			return false;
		}


	});
  });    

$(document).ready(function()
{
	$("#username").blur(function()
	{
		//remove all the class add the messagebox classes and start fading
		$("#available_name").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
		//check the uname exists or not from ajax
		$.post("user_availability.php",{ user_name:$(this).val(),id:'user'} ,function(data)
        {
		  if(data!='') //if uname not avaiable
		  {
		  	$("#available_name").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading			 
			  $(this).html(data).addClass('messageboxerror').fadeTo(900,1);
			  $('#username').focus();
			  
			});		
          }
		  else
		  {
		  	$("#available_name").fadeTo(200,0.1,function()  //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Username available to register').addClass('messageboxok').fadeTo(900,1);	
			});
		  }
				
        });
 
	});/*End*/
	
	$("#email").blur(function()
	{
		//remove all the class add the messagebox classes and start fading
		$("#available_email").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
		//check the uname exists or not from ajax
		$.post("user_availability.php",{ email:$(this).val(),id:'email' } ,function(data)
        {
		  if(data!='') //if uname not avaiable
		  {
		  	$("#available_email").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html(data).addClass('messageboxerror').fadeTo(900,1);
			  $("#email").focus();;
			});		
          }
		  else
		  {
		  	$("#available_email").fadeTo(200,0.1,function()  //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('email available to register').addClass('messageboxok').fadeTo(900,1);	
			});
		  }
				
        });
 
	});/*End*/
	
	$("#password").blur(function()
	{
		//remove all the class add the messagebox classes and start fading
		$("#check_password").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
		//check the uname exists or not from ajax
		$.post("user_availability.php",{ password:$(this).val(),id:'password' } ,function(data)
        {
		  if(data!='') //if uname not avaiable
		  {
		  	$("#check_password").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html(data).addClass('messageboxerror').fadeTo(900,1);
			  $("#password").focus();;
			});		
          }else
		  {
		  	$("#check_password").fadeTo(200,0.1,function()  //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Valid password to register').addClass('messageboxok').fadeTo(900,1);	
			});
		  } 
				
        });
 
	});/*End*/
	
	$("#password2").blur(function()
	{
		//remove all the class add the messagebox classes and start fading
		$("#verifypassword_password2").removeClass().addClass('messagebox').text('Checking...').fadeIn("slow");
		//check the uname exists or not from ajax
		$.post("user_availability.php",{ password:$("#password").val(),vpassword:$(this).val(),id:'vpassword' } ,function(data)
        {
		  if(data!='') //if uname not avaiable
		  {
		  	$("#verifypassword_password2").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html(data).addClass('messageboxerror').fadeTo(900,1);
			  $("#password2").focus();;
			});		
          }else
		  {
		  	$("#verifypassword_password2").fadeTo(200,0.1,function()  //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Valid verifay password to register').addClass('messageboxok').fadeTo(900,1);	
			});
		  } 
				
        });
 
	});/*End*/
});

 