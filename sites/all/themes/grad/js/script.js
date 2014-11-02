/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {
  
  /*ON cache le titre du carousel pour le charger correctement puis on le fade in  */
  
$(document).ready(function () {
  
  /* -------------On fait glisser le menu vers le bas en mode Iphone.---------------*/

$("#block-system-main-menu ul").click(function(e){
	//$("li", this).slideToggle("fast");
});

      // We can keep menu collapsed up to width maxWidth.
      var maxWidth = 445;
      //alert(maxWidth);

      // Do nothing if menu is empty.
      if ($('#block-system-main-menu a').length == 0) {
        return;
      }

      // Append toggle link to the main menu if not already exists.
      if ($('a#menu-toggle').length == 0) {
      //alert("add menu-toggle");
      	$('#block-system-main-menu').prepend('<a href="#" id="menu-toggle">' + Drupal.t('Menu') + '</a>');
      }
      else {
      //alert("No");
      	return;
      }
      
      // Collapse/expand menu by click on link.
      $('a#menu-toggle').click(function() {
        $('#block-system-main-menu .menu').slideToggle('fast');
        return false;
      });

      // Restore visibility settings of menu on increasing of windows width over 445px.
      // Media query works with width up to 460px. But I guess we should take into account some padding.
      $(window).resize(function(){
        var w = $(window).width();
        // Remove all styles if window size more than maxWidth and menu is hidden.
        if(w > maxWidth && $('#block-system-main-menu .menu').is(':hidden')) {
          $('#block-system-main-menu .menu').removeAttr('style');
        }
      });



  
  //-------------------alert("loaded");

        $('#views_slideshow_cycle_main_carrousel2-block img').load(function () {
            var img_height = $(this).height();
             //alert(img_height);
            if (img_height !== 0) {
            //alert(img_height);
            box_height = img_height-10;
                $('#views_slideshow_cycle_main_carrousel2-block').height(box_height);
                $('#views_slideshow_cycle_main_carrousel2-block .views-field-title').height(box_height);
                $('#views_slideshow_cycle_main_carrousel2-block .views-field-title').delay(500).fadeIn('fast');
                //alert($('#views_slideshow_cycle_main_carrousel2-block').height());
                
                                return false;
            }
        });
    });

  
  /* Pour rendre le slideshow responsive */
$('#views_slideshow_cycle_main_carrousel2-block .views-field-title').hide();

 
    $(window).resize(function () {
        $('#views_slideshow_cycle_main_carrousel2-block img').each(function () {
            var img_height = $(this).height();
            if (img_height !== 0) {
            //alert(img_height).
            box_height = img_height-10;
                $('#views_slideshow_cycle_main_carrousel2-block').height(box_height);
                $('#views_slideshow_cycle_main_carrousel2-block .views-field-title').height(box_height);
                $('#views_slideshow_cycle_main_carrousel2-block .views-field-title').delay(500).fadeIn('fast');
                //alert($('#views_slideshow_cycle_main_carrousel2-block').height());
                
                                return false;
            }
        });
    });
  
  
  
  var $animatemenu = "";
  //alert($animatemenu);
function redimensionnement() {
  var result = document.getElementById('result');
  if("matchMedia" in window) { // Détection
    if(window.matchMedia("(min-width:650px)").matches) {
      $animatemenu = "TRUE";
      //alert("is true");
    } else {
      $animatemenu = "FALSE";
      //alert("is false");
    }
    return $animatemenu;
  }
}
//$animatemenu = redimensionnement();
$(document).ready(redimensionnement);
$(window).resize(redimensionnement);

//window.addEventListener('resize', redimensionnement, false);

$("#block-system-main-menu").append("<div id='highlight_box' class='none-active'></div>");
//alert($animatemenu);
	

    /*$("#block-system-main-menu .menu__item").mouseenter(function() {
    var $myheight = $("#block-system-main-menu").height();
    if ($animatemenu == "TRUE"){

    	var $mywidth = $(this).width()+30;
    	var $myposition = $(this).position();
    	var $myXposition = $myposition.left;
    	$("#highlight_box").css("height", $myheight);
    	
    	$("#highlight_box").animate({
	    	width: $mywidth,
	    	left: $myXposition
	    	}, "fast");

	    $("#highlight_box").slideDown("fast");
	    $(this).children("a").css("color", "rgb(200,200,200)");
    	
    	$("#highlight_box").addClass("active").removeClass("none-active");
    	}
    });*/
    /*$("#block-system-main-menu .menu__item").mouseleave(function() {
    	$(this).children("a").css("color", "rgb(100,100,100)");
    	$(this).children(".active").css("color", "rgb(0,0,0)");
    	$("#highlight_box").stop();
    });*/
    /*$("#block-system-main-menu").mouseleave(function() {
    	$("#highlight_box").removeClass("active").addClass("none-active");
    	$("#highlight_box").stop().slideUp("fast");
    });*/
   
  }
};



})(jQuery, Drupal, this, this.document);
