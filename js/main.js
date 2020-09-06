


$(document).ready(function(){
    
    
    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
         new WOW().init();
     
    
    /*****************************************************************/
    /*********************** STICKY NAV MENU *************************/
    /*****************************************************************/
       
         $(".js-navigation").sticky(
              {topSpacing:0,
              zIndex:999
         }); 
    
    /*****************************************************************/
    /*********************** MOBILE NAV MENU *************************/
    /*****************************************************************/

    
        $(".js-nav-icon").click(function(){
           $(this).toggleClass("change");
           $(".js-main-nav").slideToggle(500);
        });
    
        $(".js-menu").click(function(){
               if($(window).width() < 769){
                   $(".js-main-nav").slideUp(500);
                   $(".js-nav-icon").toggleClass("change");
                }
        }); 
    
    /************************************************************************/
    /**************************** SMOOTH SCROLL *****************************/
    /************************************************************************/
 
         $('a').smoothScroll({
             offset: -20,
             excludeWithin: ['.js_services'],
             speed: 1000
         });
        
 
    
    /*****************************************************************/
    /************* ACTIVE NAV MENU ON SCROLL AND ON CLICK ************/
    /*****************************************************************/
    
         var sections = $('section'),
                nav = $('nav'),
                nav_height = nav.outerHeight();

          $(window).on('scroll', function () {
              var cur_pos = $(this).scrollTop();

              sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                  nav.find('a').removeClass('active');
                  sections.removeClass('active');

                  $(this).addClass('active');
                  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
              });
          }); 
    
    

    
    /*************************************************************************/
    /**************************** SCROLL TO TOP ******************************/
    /*************************************************************************/
    
           //Check to see if the window is top if not then display button 
          $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.js-scroll-to-top').fadeIn();
                } else {
                    $('.js-scroll-to-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.js-scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

    
    
    
    /*************************************************************************/
    /**************************** SLICK CAROUSEL *****************************/
    /*************************************************************************/
         
    
          $('.slides').on('init', function(event, slick, currentSlide){
              $('.slick-active h1').removeClass('js-hidden');
              $('.slick-active h1').addClass('animated fadeInDown');
              $('.slick-active .js-details').removeClass('js-hidden');
              $('.slick-active .js-details').addClass('animated fadeInDown');
              $('.slick-active .js-buttons').removeClass('js-hidden');
              $('.slick-active .js-buttons').addClass('animated fadeInUp'); 
              $('.slick-active .js-social-medias').removeClass('js-hidden');
              $('.slick-active .js-social-medias').addClass('animated fadeInUp');
          });
    
         /** BackGround Slides **/
    
         $('.slides').slick({
             fade: true,
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3500,
             speed: 1000,
             arrows: true,
             dots: true
      
         });
    
        $('.slides').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active h1').removeClass('animated fadeInDown');
            $('.slick-active h1').addClass('js-hidden');
        });

        $('.slides').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active h1').removeClass('js-hidden');
            $('.slick-active h1').addClass('animated fadeInDown');
        });


        $('.slides').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active .js-details').removeClass('animated fadeInDown');
            $('.slick-active .js-details').addClass('js-hidden');
        }); 

        $('.slides').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active .js-details').removeClass('js-hidden');
            $('.slick-active .js-details').addClass('animated fadeInDown');
        });


        $('.slides').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active .js-buttons').removeClass('animated fadeInUp');
            $('.slick-active .js-buttons').addClass('js-hidden');
        }); 

        $('.slides').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active .js-buttons').removeClass('js-hidden');
            $('.slick-active .js-buttons').addClass('animated fadeInUp');
        });
    
    
        $('.slides').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active .js-social-medias').removeClass('animated fadeInUp');
            $('.slick-active .js-social-medias').addClass('js-hidden');
        }); 

        $('.slides').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active .js-social-medias').removeClass('js-hidden');
            $('.slick-active .js-social-medias').addClass('animated fadeInUp');
        });
        
        

    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/
            
           // Bind as an event handler
           $(document).on('click', '[data-lightbox]', lity); 
   

    
    /*******************************************************************/
    /***************************** Typed *******************************/
    /*******************************************************************/
    
            $(function(){
                $("#typed").typed({
                    stringsElement: $('#typed-strings'),
                    loop: true,
                    backDelay: 3000
                });
            });
    
    
    /***************************************************************************/
    /**************************** PORTFOLIO FILTER *****************************/
    /***************************************************************************/
         
         /** Portfolio Filter Active Menu **/
         $("a.categories").click(function(){
               $(this).addClass("active");
               $("a.categories").not(this).removeClass("active");
         });
    
    
          // init Isotope
         var $grid = $('.js-work-grid').isotope({
          // options
                // 0.8s in milliseconds
                transitionDuration: 800
         });
          // filter items on button click
         $('.js-categories-filter').on( 'click', 'a', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
         });
    
    
    
});




