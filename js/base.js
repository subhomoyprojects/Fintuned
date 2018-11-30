
var owl = $('.owl1');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<img src='images/update_prev.png'>","<img src='images/update_next.png'>"],
        responsive: {
          0: {
            items: 1
          },
		  1200: {
            items: 1
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

var owl = $('.owl2');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
		  1200: {
            items: 1
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

var owl = $('.owl3');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
		  480: {
            items: 2
          },
		  960: {
            items: 3
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

var owl = $('.owl4');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
		  1200: {
            items: 1
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

var owl = $('.owl5');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
		  1200: {
            items: 1
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

var owl = $('.owl6');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
		  600: {
            items: 2
          },
		  960: {
            items: 3
          },
		  1200: {
            items: 4
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})


/* For Slim Scroll */

/*$(function(){
	$('.articales_category_details_holder ul').slimScroll({
		height: '290px',
		width: '100%',
		size: '7px',
		alwaysVisible: true,
		distance: '0px',
		color: '#1c2554',
		allowPageScroll: true,
		railVisible: true,
		railColor: '#e8e8e8',
    	railOpacity: 1,
		wheelStep: 150,
		opacity: 1
	});
});
$(function(){
	$('.pf_news_holder').slimScroll({
		height: '400px',
		width: '100%',
		size: '7px',
		alwaysVisible: true,
		distance: '0px',
		color: '#1c2554',
		allowPageScroll: true,
		wheelStep: 150,
		opacity: 1
	});
});

$(function(){
	$('.comment_box').slimScroll({
		height: '320px',
		width: '100%',
		size: '7px',
		alwaysVisible: true,
		distance: '0px',
		color: '#1c2554',
		allowPageScroll: true,
		wheelStep: 150,
		opacity: 1
	});
});*/



/* For Slim Scroll */

/* Scroll to top */

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

/* Scroll to top */

/* Menu Button Active */

$(document).ready(function () {
    $('.filter_product button').click(function(e) {

        $('.filter_product button').removeClass('active_filter');

        var $this = $(this);
        if (!$this.hasClass('active_filter')) {
            $this.addClass('active_filter');
        }
        //e.preventDefault();
    });
});

/* Menu Button Active */

/* Show More */

$(document).ready(function() {
                $('.who_we_are_content > div').showMore({
                minheight: 260,
                buttontxtmore: 'View Full',
                buttontxtless: 'View Less',
                animationspeed: 250
            });
});

$(document).ready(function() {
                $('.our_team figcaption p').showMore({
                minheight: 150,
                buttontxtmore: 'Read More',
                buttontxtless: 'Read Less',
                animationspeed: 250
            });
});

$(document).ready(function() {
                $('.event_text_holder > div').showMore({
                minheight: 100,
                buttontxtmore: 'View Full Event',
                buttontxtless: 'View Less Event',
                animationspeed: 250
            });
});


/* Show More */

/* For Light Box */

$('.lightbox').littleLightBox();

/* For Light Box */

/* Map Color */

// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333131"},{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#eae8e8"},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":"3.31"}]},{"featureType":"poi.attraction","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#000eff"}]},{"featureType":"poi.attraction","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#eeefc6"},{"saturation":"77"},{"lightness":"18"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#4f4f4f"},{"saturation":"-35"},{"weight":"0.60"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"},{"color":"#96bd0d"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2d6ba3"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }

/* Map Color */

/* Jodit Editor */

var editor = new Jodit('#editor');

var editor = new Jodit("#example0_0", {
    "toolbarButtonSize": "small"
});

/* Jodit Editor */

/* My Profile Show Hide */

$(".edit_profile").click(function(){
    $(".my_profile_your_details_holder_edit_mode").show();
	$(".my_profile_your_details_holder").hide();
});

$(".after_edit_form").click(function(){
    $(".my_profile_your_details_holder").show();
	$(".my_profile_your_details_holder_edit_mode").hide();
}); 

/* My Profile Show Hide */

/* Post Box Show Hide */

$(document).ready(function(){
	$(".postbox_show_hide").click(function(){
		$(".post_a_comment").toggle();
	});
});

/* Post Box Show Hide */

/* Without a div Clickable */

$(".treding_img_holder").click(function(){
    window.location = $(this).attr("data-href");
    return false;
});


/* Without a div Clickable */
