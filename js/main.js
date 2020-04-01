/*
ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi
*/

$(document).ready(function(){

  // nascondo dropdown
  $('.dropdown').hide();


  var navMenu = $('.menu-right > li');
  navMenu.on({

    // all'hover del mouse sugli elementi del menu di navigazione appare il dropdown-menu e di conseguenza scompaiano i dropodown-menu  degli altri elementi del menu su cui il mouse non ci è andato sopra
    mouseenter: function() {
      $(this).children("ul").show();
      $(this).siblings("li").children("ul").hide();
    },

    // al click del mouse sugli elementi del menu di navigazione scompare il dropdown-menu
    click: function() {
      $(this).children("ul").hide();
    }

  });


});
