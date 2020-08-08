$(function(){
   
        "use strict";

  	// Define Some Elements
  	var allWindow = $(window),
        body = $('body'),
        top = allWindow.scrollTop(),
        navBar = $(".nav-wrapper");

    
    
    
    
    
    
    
    
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
    


/*******************************************************************************************************************************
                            NAVIGATION SECTION
*******************************************************************************************************************************/ 

    $(window).scroll(function(){
        if($(this).scrollTop() < 64){
            
            $("nav").removeClass("wg-top-navbar");
            $(".btn-back-to-top").fadeOut();
        }else{
            $("nav").addClass("wg-top-navbar");
            $(".btn-back-to-top").fadeIn();
        }
            
    });
    
    
    
    $("a.smooth-scroll").click(function(event){
        //dont perform your default action
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64,
            
        },1500,"easeOutExpo");
    });
    
    //onload
    if($(window).scrollTop()>64){
             $("nav").addClass("wg-top-navbar");
       }
    
    
    
    
    
    
 
    
//    var allWindow = $(window),
//        body = $('body'),
//        top = allWindow.scrollTop(),
    
    
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


    
    
    

/*-----------------------------------------------------------------
  Javascript Function for PROGRESS BAR LINES  SCRIPT
------------------------------------------------------------------*/

    var linesHead = $(".skills-section"),
        line = $(".progress-bar-line");
        
    //Progress Bars function
    
    function progressFunction(e) {

      if ( linesHead.length ) {

        if (!linesHead.hasClass("done")) {

          var linesHeadTop = linesHead.offset().top,
              top = allWindow.scrollTop(),
              winH = allWindow.height() - 160;

          if (top >= linesHeadTop - winH) {

            linesHead.addClass("done");
            $.each( line, function( i, val ) {

            var thisLine = $(this),
              value = thisLine.data("percent"),
              progressCont = $(thisLine).closest('.progress-bar-linear').find(".progress-cont span");

              thisLine.css("width",value + "%");
              progressCont.html(value + "%")

            });
          }
        }
      }
    } //End progressFunction Fuction
    
var $aboutSection = $('#about');
var $skillSection = $('#skill-section-container');


    
    var flag = 0;
    
////     add Event listener to window
    allWindow.on('scroll', function() {
//        alert("hi")
//      scrollFunctions();
         var scrollOffset = $(document).scrollTop();
//        alert("hsf");
        var containerOffset = $aboutSection.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
//            alert("hs");
            progressFunction();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
        
        var containerOffset2 = $skillSection.offset().top - window.innerHeight;
//        console.log(scrollOffset+" "+containerOffset2);
        if (scrollOffset > containerOffset2) {
//            alert("hs");
            if(flag==0){
            chartsFunction();
                flag = 1;
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
            }
        }
        
    });
    
    
//    $('a.fancybox').fancybox();
    
    
    
    
    
    
    
    
    
    
     /*----------------------------------------------------*/
  /*  Isotope Fillter js
    /*----------------------------------------------------*/
  $(window).on("load", function() {
    $(".projects_fillter ul li").on("click", function() {
      $(".projects_fillter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById("work")) {
      var $workGrid = $(".projects_inner").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });
    
    
    
    
    
    
    $("a.smooth-scroll").click(function(event){
       
        //dont perform your default action
        event.preventDefault();
        
        var section = $(this).attr("href");
//        alert("section");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64,
            
        },1500,"easeOutExpo");
    });
    
    
    
    
/******* Contact form ******/ 
    


    
    
    
/******* Charts *******************/    
    
    
    
    
    
    function chartsFunction(e){
    
    
    var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Java', 'C', 'Python'],
        datasets: [{
            label: 'Core Technologies',
            data: [8, 5, 4],
            backgroundColor: [
                'rgba(0, 0, 0, 0.8)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.4)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ],
            borderWidth: 1,
//            barPercentagee: 0.2,
            categoryPercentage: 0.6,
//            barThickness: 6,
        }]
    },
    options: {
        legend: {
          onClick: (e) => e.stopPropagation(),
          labels:{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: 25,
              boxWidth: 0,
          }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    suggestedMax: 10,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        }
    }
});
      
      
      
      
    var ctx2 = document.getElementById('myChart2');
      var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['HTML,CSS', 'Bootstrap', 'Javascript', 'JQuery'],
        datasets: [{
            label: 'Web Development',
            data: [7.5, 6, 8, 6],
            backgroundColor: [
               'rgba(0, 0, 0, 0.8)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.4)',
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
                
            ],
            borderWidth: 1,
//            barPercentagee: 0.2,
            categoryPercentage: 0.6,
//            barThickness: 6,
        }]
    },
    options: {
        legend: {
          onClick: (e) => e.stopPropagation(),
          labels:{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: 25,
              boxWidth: 0
          }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    suggestedMax: 10,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        }
    }
});
      
      
      
      
      
      
      
    var ctx4 = document.getElementById('myChart4');
      var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Laravel', 'Angular', 'Reactjs', 'React Native'],
        datasets: [{
            label: 'Frameworks',
            data: [7, 6.5, 8, 6],
            backgroundColor: [
                'rgba(0, 0, 0, 0.8)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.4)',
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
                
            ],
           borderWidth: 1,
//             barPercentagee: 0.2,
            categoryPercentage: 0.6,
//            barThickness: 6,
        }]
    },
    options: {
        legend: {
          onClick: (e) => e.stopPropagation(),
          labels:{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: 25,
              boxWidth: 0,
          }
        },
//        animation: {
//            onProgress: function(animation) {
//                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
//            },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    suggestedMax: 10,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        }
    }
});  
      
      
      
    var ctx5 = document.getElementById('myChart5');
      var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['PHP','Nodejs', 'MySQL'],
        datasets: [{
            label: 'Miscellaneous',
            data: [9, 7, 7],
            backgroundColor: [
                'rgba(0, 0, 0, 0.8)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ],
            borderWidth: 1,
//            barPercentagee: 0.2,
            categoryPercentage: 0.6,
//            barThickness: 6,
        }]
    },
    options: {
        legend: {
          onClick: (e) => e.stopPropagation(),
          labels:{
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: 25,
              boxWidth: 0,
          }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    suggestedMax: 10,
//                    stepSize: 1,
//                    maxTicksLimit: 20
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        }
    }
});    
      
      
    }
      
    

    
    
    $('#contact-form').submit(function(e){
        e.preventDefault();
        
        var name=document.getElementById("name").value;
        
		var email=document.getElementById("email").value;
		var msg=document.getElementById("message").value;
//		console.log(name + email + msg);
        if(name !== "" && email !== "" && msg !== ""){
            Email.send({
			    SecureToken : "68f35e28-9c9c-4a80-b226-320fc7c874e5",
    			To : 'sadhwanisahil64@gmail.com',
				From : "sadhwanisahil64@gmail.com",
				Subject : "Enquiry from " + name ,
				Body : name + "(" + email +")" + " left his contact details and a message for you on your portfolio. The message says " +msg 
			}).then(
            message => {
//                alert(message)
            if(message == "OK"){
                document.getElementById("msgFail").style.display="none"
                document.getElementById("incomplete").style.display="none"
                 document.getElementById("msgSubmit").style.display="block"
            }else{
                document.getElementById("incomplete").style.display="none"
                document.getElementById("msgSubmit").style.display="none"
                document.getElementById("msgFail").style.display="block"
            }
            }
			
				
			);
        }else{
            document.getElementById("msgSubmit").style.display="none"
            document.getElementById("msgFail").style.display="none"
            document.getElementById("incomplete").style.display="block"
        }
        
        
    });

    
    
    
    
    //hiding navbar collapse on click
    $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
    
    
    
    
    
    
    
});