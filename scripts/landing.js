 var showDescription = function() {
     
//     var revealPoint = function() {
//         // #7
//         $(this).css({
//             opacity: 1,
//             transform: 'scaleX(1) translateY(0)'
//         });
//     
//    $.each($('.best-version-description'), revealPoint);
      $('.best-version-block .horizontal-line-red').css({
          width: 100,
          transform: 'scaleX(1) translateY(0)'
      })
      $('.best-version-description').css({ 
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
      }) 

 
};

 var animate = function(whichLine) {
     
      switch(whichLine) {
        case 1:  //Consultations Line
            $('.consult-options-title-wrapper .horizontal-line-red').css({ 
                width: 100,
                transform: 'scaleX(1) translateY(0)'
            }) 
           
            break;
        case 2:
               $('.consult-options-intro').css({ 
                opacity: 1,
                transform: 'scaleX(1) translateY(0)'
            }) 
            
            break;
        case 3:
              
              $('.about-eric-box .horizontal-line-red').css({ 
                width: 100,
                transform: 'scaleX(1) translateY(0)'
              }) 
              $('.about-eric-box .about-eric-description').css({ 
                opacity: 1,
                transform: 'scaleX(1) translateY(0)'
              }) 
          
            break;
         case 4:
              
              $('.how-i-work .horizontal-line-red').css({ 
                width: 100,
                transform: 'scaleX(1) translateY(0)'
              }) 
              $('.how-i-work .how-i-work-description').css({ 
                opacity: 1,
                transform: 'scaleX(1) translateY(0)'
              }) 
          
            break;
        
          case 5:
              
              $('.how-work-points.choose').css({ 
                marginLeft: 500,
                transform: 'scaleX(1) translateY(0)'
              }) 
          
            break;
              
           case 6:
             
              $('.how-work-points.questions').css({ 
                marginLeft: 900,
                transform: 'scaleX(1) translateY(0)'
              }) 
              
           case 7:
              
              $('.how-work-points.report').css({ 
                marginLeft: 600,
                transform: 'scaleX(1) translateY(0)'
              }) 
          
            break;
      }
        
    
};



var animateBox = function(whichOption) {
      var boxLeft = 0;
      var boxWrapMargin = 'auto';
      var boxLeftOption3 = 0;
      var boxWidth = 400;
      var boxHeight = 300;
      var imgWidth = 400;
      var skypeImgLeft = 10+'%';
      var wrapperWidth = 100+'%';
      if( $(window).width() > 1150 ){
          console.log('oh yeah i in here');
            $('.consult-box-wrapper').css({ 
                marginLeft: 'auto',
                marginRight: 'auto',
                width: wrapperWidth,
                transform: 'scaleX(1) translateY(0)'
            }) 
          boxLeft = 20+'%';
          boxLeftOption3 = 20+'%';
          boxWidth = 400;
          imgWidth = 400;
          skypeImgLeft = 300;
      }
    console.log('boxLeft='+boxLeft);
    console.log('boxWidth='+boxWidth);
    console.log('whichOption='+whichOption);
      switch(whichOption) {
        case 1:
            $('.consult-box').css({ 
                marginLeft: boxLeft,
                width: boxWidth,
                height: boxHeight,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.consult-report-image').css({
                paddingTop: 100,
                marginLeft: -80,
                width: imgWidth,
                height: boxHeight,
                transform: 'scaleX(1) translateY(0)'
            })
            $('.consult-report-image img').css({
                width: imgWidth,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
        case 2:
              console.log('here in 2=');
            $('.skype').css({ 
                marginLeft: -80,
                marginTop:  10+'%',
                width: 400,
                height: boxHeight,
                opacity: 1,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.skype-image').css({
                marginLeft: skypeImgLeft,
                transform: 'scaleX(1) translateY(0)'
            })
            $('.skype-image img').css({
                width: imgWidth,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
        case 3:
           $('.service-call').css({ 
                marginLeft: boxLeftOption3,
                width: boxWidth,
                height: boxHeight,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.service-call-image').css({
                marginLeft: -80,
                width: imgWidth,
                opacity: 1,
                transform: 'scaleX(1) translateY(0)'
            })
            $('.service-call-image img').css({
                width: imgWidth,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
      }
        
 
};

$(window).load(function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    console.log('height='+$(window).height());
    console.log('width='+$(window).width());
// if ($(window).width() > 900 && $(window).height() > $(window).width()) {
  if ($(window).width() > 767) {           
     
    
    var scrollDistanceBestVersion = $('.best-version').offset().top - $(window).height() + 700;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceBestVersion) {
             showDescription();
         }
    });
    
//    var scrollDistanceBestVersionLine = $('.best-version-block').offset().top - $(window).height() + 900;
//    $(window).scroll(function(event) {
//         if ($(window).scrollTop() >= scrollDistanceBestVersionLine) {
//             animateBestVersionLine();
//         }
//    });
    

    
    
    // BEGIN CONSULTATION OPTIONS
    var scrollDistanceConsultationsLine = $('.wall-left-bottom').offset().top - $(window).height() + 1200;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceConsultationsLine) {
             animate(1);
         }
    });
    
    var scrollDistanceIntroText = $('.wall-left-bottom').offset().top - $(window).height() + 800;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceIntroText) {
             animate(2);
         }
    });
    
    
    var scrollDistanceConsultOptionOne = $('.consult-options').offset().top - $(window).height() + 800;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceConsultOptionOne) {
             animateBox(1);
         }
    });
    
    var scrollDistanceConsultOptionTwo = $('.consult-box').offset().top - $(window).height() + 900;
    $(window).scroll(function(event) {

         if ($(window).scrollTop() >= scrollDistanceConsultOptionTwo) {
             animateBox(2);
         }
    });
    
    var scrollDistanceConsultOptionThree = $('.skype-image').offset().top - $(window).height();
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceConsultOptionThree) {
             animateBox(3);
         }
    });
    
    // END CONSULTATION OPTIONS
    
    // BEGIN ABOUT ERIC ANIMATIONS
    
     var scrollDistanceAboutEricLine = $('.about-eric-block').offset().top - $(window).height() - 300;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceAboutEricLine) {
             animate(3);
         }
    });
    
   
    // END ABOUT ERIC ANIMATIONS
    
    // BEGIN HOW I WORK ANIMATIONS
    
     var scrollDistanceAboutHowWorkLine = $('.how-i-work').offset().top - $(window).height() + 100;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceAboutHowWorkLine) {
             animate(4);
         }
    });
    
     var scrollDistanceAboutHowWorkPoints1Line = $('.how-i-work-description').offset().top - $(window).height() + 900;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceAboutHowWorkPoints1Line) {
             animate(5);
         }
    });
    
     var scrollDistanceAboutHowWorkPoints2Line = $('.how-i-work-description').offset().top - $(window).height() + 1600;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceAboutHowWorkPoints2Line) {
             animate(6);
         }
    });
    
     var scrollDistanceAboutHowWorkPoints3Line = $('.how-i-work-description').offset().top - $(window).height() + 2000;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceAboutHowWorkPoints3Line) {
             animate(7);
         }
    });
    
}
    // END ABOUT HOW I WORK ANIMATIONS

   
});
    