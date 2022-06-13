$(document).ready(function(){

    // off=canvas menu
    // function openMe(){
    //     var a=document.querySelector('.mobile-menu-offcanvas');
    //     a.classList.add('right-men');
    // }
    $('.menu-action').click(function(){
        $('.mobile-menu-offcanvas').addClass('right-men');
        $('.menu-action').hide();
    });
    $('.mobile-offcanvas-header').click(function(){
        $('.mobile-menu-offcanvas').removeClass('right-men');
        $('.menu-action').show();
    });

    // apps carousel
    $('.service-display-carosel').owlCarousel({
        items:3,
        nav:false,
        margin:30,
        autoplay:true,
        loop:true,
        dots:true,
        autoplayTimeout:3000,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            576:{
                items:2
            },           
            768:{
                items:2
            },
            992:{
                items:3
            },
        }
    });
    // progressbar  
	$('#bar1').barfiller({ barColor: '#ffff' });
	$('#bar2').barfiller( { barColor: '#ffff' });
	$('#bar3').barfiller({ barColor: '#ffff' });
	$('#bar4').barfiller({ barColor: '#ffff', duration: 2000 });
   
    
    // project-display-owlCarousel
    $('.project-display').owlCarousel({
        items:2,
        loop:true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }
        }
    }); 

    // company-display-owlCarousel
    $('.company').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },            
            576:{
                items:3
            }, 
            767:{
                items:3
            },          
            1000:{
                items:4
            }
        }
    });

    // testimonial-slider
    $(".testimonial-area").slick({
        slidesToShow: 2,
        Padding:'',
       
    });
    
    // scroll top main 
   // scroll top main 
    $(window).scroll(function() {
        let scrollValue = $(window).scrollTop();

        if(scrollValue >400){
        $('.scroll-top').show();
        }
        else{
        $('.scroll-top').hide();
        }
    });
    // top scroll btn
    $(".scroll-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

    // counterup
    $('.counter').counterUp({
        time:4000
      });
   
});
  
