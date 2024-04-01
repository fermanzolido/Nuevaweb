// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

var customScripts = {
    profile: function() {
        var portfolio = $('#portfolio');
        var items = $('.items', portfolio);
        var filters = $('.filters li a', portfolio);

        items.imagesLoaded(function() {
            items.isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
                transitionDuration: '0.7s',
                transformsEnabled: true, // Agrega transiciones suaves
                animationOptions: {
                    duration: 800, // Aumenta la duración de la animación
                    easing: 'linear', // Cambia la curva de animación a lineal
                    queue: false // Permite animaciones simultáneas
                }
            });
        });

        filters.click(function() {
            var el = $(this);
            filters.removeClass('active');
            el.addClass('active');
            var selector = el.attr('data-filter');
            items.isotope({ filter: selector });
            return false;
        });
    },
    fancybox: function() {
        // fancybox
        $(".fancybox").fancybox({
            beforeShow: function() {
                // Agrega una animación de apertura al fancybox
                this.wrap.css('opacity', 0).animate({
                    'opacity': 1
                }, 500);
            },
            afterClose: function() {
                // Agrega una animación de cierre al fancybox
                this.wrap.animate({
                    'opacity': 0
                }, 500);
            }
        });
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top - 75 }, "slow"); 
                return false;
            });
    },
    owlSlider: function() {
        var owl = $("#owl-demo");
        owl.owlCarousel({
            autoplay: true, // Activa la reproducción automática
            autoplayHoverPause: true, // Pausa al colocar el cursor sobre el carrusel
            loop: true, // Hace que el carrusel sea un ciclo continuo
            animateOut: 'fadeOut', // Agrega una animación de salida al cambiar de diapositiva
            animateIn: 'fadeIn' // Agrega una animación de entrada al cambiar de diapositiva
        });
        // Custom navegacion Events
        $(".next").click(function() {
            owl.trigger('next.owl.carousel');
        });
        $(".prev").click(function() {
            owl.trigger('prev.owl.carousel');
        });
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    waySlide: function(){
        /* Waypoints Animations
     ------------------------------------------------------ */		   			  
   
                                
  },
  fitText: function(){			  
          setTimeout(function() {			
          $('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });			
          }, 100);
  },
init: function () {
  customScripts.onePageNav();
  customScripts.profile();
  customScripts.fancybox(); 
  customScripts.owlSlider();
  customScripts.waySlide();
  customScripts.fitText();
  customScripts.bannerHeight();
},
fitText: function(){			  
    setTimeout(function() {			
    $('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });			
    }, 100);
},
init: function () {
    customScripts.onePageNav();
    customScripts.profile();
    customScripts.fancybox();
    customScripts.owlSlider();
    customScripts.waySlide();
    customScripts.fitText();
    customScripts.bannerHeight();;
}
}
$('document').ready(function() {
    customScripts.init();
    $('.carousel').carousel();
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutQuart'); // Cambia la curva de animación a easeInOutQuart
        }
    });
});