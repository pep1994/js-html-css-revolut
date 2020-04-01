/*
ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi
*/

$(document).ready(function(){

  var navMenu, dropdownMenu;

  // nascondo tutti i dropdown
  $('.dropdown').hide();
  $('.sub-dropdown').hide();

    // seleziono tutti gli "li" che sono figli diretti del menu di destra
    navMenu = $('.menu-right > li');

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


// al click su qualsiasi parte della finistra i dropdown-menu si chiudono
  $(document).click(
    function() {
      $('.dropdown').hide();
      $('.sub-dropdown').Slidetoggle();
    }
  );


  var hamburger = $('.hamburger');
  hamburger.on({

    // quando il mouse entra nell'icona hamburger essa diventa più scura
    mouseenter:
      function() {
        $('.hamburger span').css({"background-color": "#000"});
    },

    // quando il mouse esce dall'icona hamburger essa ritorna più chiara
    mouseleave:
    function () {
      $('.hamburger span').css({"background-color": "lightgrey"});
    }

  });

  // seleziono tutti gli "li" che sono figli diretti del menu inferiore del dropdown-menu dell'hamburger-menu
  dropdownMenu = $('.hamburger-bottom-menu > li');
  dropdownMenu.on({

  // all'hover del mouse sugli elementi del menu di navigazione appare il dropdown-menu e di conseguenza scompaiano i dropodown-menu  degli altri elementi del menu su cui il mouse non ci è andato sopra
  mouseenter: function() {
    $(this).children("a").css({"color": "#000"});
  },

  mouseleave:
  function () {
    $(this).children("a").css({"color": "grey"});
  },

  // al click del mouse sugli elementi del menu di navigazione scompare il dropdown-menu
  click: function() {
    $(this).children("ul").slideToggle();
    $(this).siblings("li").children("ul").slideUp();
  }

});


});
