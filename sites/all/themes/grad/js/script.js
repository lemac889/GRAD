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
	

    $("#block-system-main-menu .menu__item").mouseenter(function() {
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
    });
    $("#block-system-main-menu .menu__item").mouseleave(function() {
    	$(this).children("a").css("color", "rgb(100,100,100)");
    	$(this).children(".active").css("color", "rgb(0,0,0)");
    	$("#highlight_box").stop();
    });
    $("#block-system-main-menu").mouseleave(function() {
    	$("#highlight_box").removeClass("active").addClass("none-active");
    	$("#highlight_box").stop().slideUp("fast");
    });
   
  }
};


})(jQuery, Drupal, this, this.document);
