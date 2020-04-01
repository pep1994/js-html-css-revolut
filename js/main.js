/*
ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi
*/

$(document).ready(function(){

  var navMenu, dropdownMenu, hamburgerMenu;

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
  $(window).click(
    function() {
      $('.dropdown').hide();
      $('.sub-dropdown').slideUp();
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


  // nascondo l'hamburger-menu
  hamburgerMenu = $('.hamburger-menu');
  hamburgerMenu.hide();
  hamburgerMenu.addClass("hidden");

  // faccio apparire l'hamburger-menu al click sull'icona hamburger e la metto in una funzione così da poterla riutilizzare

function iconClick (selectorClick, selectorChange) {
  $(selectorClick).click(
    function () {
      $(selectorChange).toggle();
  });
}

iconClick ('.hamburger', '.hamburger-menu');



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
  click: function(event) {
    $(this).children("ul").slideToggle();
    $(this).siblings("li").children("ul").slideUp();
    event.stopPropagation(); // stoppa l'esecuzione di un evento del padre
  }

});

// modifico l'hover sull'icona "x"
$('.close').on({
  mouseenter: function() {
    $('.close').css({"color": "#000"});
  },
  mouseleave: function() {
    $('.close').css({"color": "lightgrey"});
  }

});

// faccio scomparire l'hamburger-menu al click sulla "x" attraverso la funzione già creata
iconClick ('.close', '.hamburger-menu');

// if (ciao === true) {
//   dropdownMenu.click(
//     function(){
//       $(this).children("ul").slideDown();
//       $(this).siblings("li").children("ul").slideUp();
//
//   });
// ciao = false;
// }
//
//  if (ciao === false) {
//   $(window).click(
//     function() {
//       $('.sub-dropdown').slideUp();
//
//     });
// ciao = true;
// }


});
