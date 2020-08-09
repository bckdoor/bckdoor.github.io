$(function(){
   
        "use strict";

  	// Define Some Elements
  	var allWindow = $(window),
        body = $('body'),
        top = allWindow.scrollTop(),
        navBar = $(".nav-wrapper");

    
    
    window.onload = function(){
        //hide the preloader
        document.querySelector(".preloader").style.display = "none";
    }
    
    
    
    
    
    $(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
   
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});
    
    
    



//wow    
    
    new WOW().init();
    

    /*-----------------------------------------------------
  Javascript Function To check Aniamtion support
-------------------------------------------------------*/

    var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elm = document.createElement('div');

    if( elm.style.animationName !== undefined ) { animation = true; }

    if( animation === false ) {
      for( var i = 0; i < domPrefixes.length; i++ ) {
        if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
          pfx = domPrefixes[ i ];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }


    
    
    
    
    
    $('#contact-form').submit(function(e){
        e.preventDefault();
//        alert("hey");
        
        var name=document.getElementById("name").value;
		var email=document.getElementById("email").value;
//		var msg=document.getElementById("message").value;
//		console.log(name + email + msg);
        if(name !== "" && email !== ""){
            e.preventDefault();
//            Email.send({
//			    SecureToken : "18fc25c4-9519-4389-a6ee-d67da47d853d",
//    			To : 'bkdr99@gmail.com',
//				From : "bkdr99@gmail.com",
//				Subject : "Enquiry from " + name ,
//				Body : name + "(" + email +")" + " left his contact details on your backdoor website."
//			}).then(
//            message => {
////                alert(message);
//                
//            if(message == "OK"){
//               
//        $('#exampleModal').modal('hide');
//        $('#exampleModal2').modal('show');
//    
//            }else{
//                $('#exampleModal').modal('hide');
//                $('#exampleModal3').modal('show');
//            }
//            }
//			
//				
//			);
            
            $('#exampleModal').modal('hide');
        $('#exampleModal2').modal('show');
            
        }else{
            
        }
        
    });

    
    
    
    
    
    
    
    
    
    
});