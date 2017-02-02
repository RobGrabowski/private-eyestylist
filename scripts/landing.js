 var showDescription = function() {
     console.log('in animate points');
//     var revealPoint = function() {
//         // #7
//         $(this).css({
//             opacity: 1,
//             transform: 'scaleX(1) translateY(0)'
//         });
//     
//    $.each($('.best-version-description'), revealPoint);
      $('.best-version-description').css({ 
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        }) 
      $('.horizontal-line-red').css({
          width: 100,
          transform: 'scaleX(1) translateY(0)'
      })
 
};

var animateBox = function(whichOption) {
     
      switch(whichOption) {
        case 1:
            $('.consult-box').css({ 
                marginLeft: 400,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.consult-report-image').css({
                paddingTop: 100,
                marginLeft: -80,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
        case 2:
            $('.consult-box.skype').css({ 
                marginLeft: -80,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.skype-image img').css({
                marginLeft: 300,
                transform: 'scaleX(1) translateY(0)'
            })
            $('.eric-image img').css({
                marginLeft: 300,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
        case 3:
           $('.service-call').css({ 
                marginLeft: 400,
                transform: 'scaleX(1) translateY(0)'
            }) 
            $('.service-call-image').css({
                marginLeft: -80,
                transform: 'scaleX(1) translateY(0)'
            })
            break;
      }
        
 
};

$(window).load(function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    
//     if ($(window).height() > 900) {
//         console.log('hit5');
//         showDescription();
//     }
        
    var scrollDistanceBestVersion = $('.best-version').offset().top - $(window).height() + 700;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceBestVersion) {
             showDescription();
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
    
    var scrollDistanceConsultOptionThree = $('.skype-image').offset().top - $(window).height() + 900;
    $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistanceConsultOptionThree) {
             animateBox(3);
         }
    });
    //.skype-image img
   
});
    