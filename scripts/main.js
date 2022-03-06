/* I am a JavaScript comment. Browsers ignore me as they render the code. Therefore I am not visible to users. Only if you look at the code, you can see me. Use me to explain important or complicated sections of code so that when you return to the code after a long time, you still know what you have coded. This is also very useful for other coders viewing your code. */

/*
  It is possible
  to write me across
  multiple lines...
*/

// ... or like this on a single line.



//---------------------------------------------------------------------
//---------------------------------------------------------------------
// "actual" JS code (using jQuery) starts below
//---------------------------------------------------------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
// DOM ready
//---------------------------------------------------------------------

$(document).ready(function () {

  //---------------------------------------------------------------------
  // check scrolling (jQuery)

  let checkScroll = function () {

    if ($(window).scrollTop() > 25) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }

  }

  $(window).on('scroll', function () {

    checkScroll();

  });


  //---------------------------------------------------------------------
  // typewriter effect (jQuery)

  const text = 'glmvc';

  $('#typewriter-text').html(text);
  $('#typewriter-text').css('--characters', text.length + 6);


  //---------------------------------------------------------------------
  // navigation (jQuery)

  $('body').on('click', '#nav-icon', function () {

    $('body').toggleClass('nav-open');

  });

  $('#nav-icon').on('click', function () {

    $(this).toggleClass('open');

  });


  //---------------------------------------------------------------------
  // corrected main heading with click function (jQuery)

  $('h1').text('Hello, World!').on('click', function () {

    alert('Ouch! Stop poking me!');

  })


  //---------------------------------------------------------------------
  // image and figure caption switcher (jQuery)

  let imageMap;

  $('img').on('click', function () {

    if ($('img').attr('src') === 'images/hello-world.png') {
      imageMap = $('map').detach();
      $('img').attr('src', 'images/js-code.png');
      $('img + figcaption').html('A JavaScript code snippet that reveals a small "feature", but it is somehow blurred... (screenshot taken with <a href="https://carbon.now.sh/" title="Source Code Image Tool" target="_blank">Carbon App</a>)');
    } else {
      $('img').before(imageMap);
      $('img').attr('src', 'images/hello-world.png');
      $('img + figcaption').html('The earth saying hello and the moon (image downloaded from <a href="https://openclipart.org/detail/190952/hello-world" title="Open Clipart image source" target="_blank">Open Clipart</a>)');
    }

  });


  //---------------------------------------------------------------------
  // personalised welcome message

  function setUserName() {

    let maxLength = 50;
    let userName = -1;

    while (userName == -1 || (userName != null && userName.length > maxLength)) {
      userName = window.prompt(`Please enter your name. (max. characters: ${maxLength})`); // template string
    }

    if (!userName) {
      setUserName();
    } else {
      localStorage.setItem('name', userName);
      $('h2').html(`Nice to meet you, <span>${userName}</span>!`);
    }

  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    $('h2').html(`Nice to meet you, <span>${storedName}</span>!`);
  }

  $('#button').on('click', function () {

    setUserName();

  });


  //---------------------------------------------------------------------
  // audio volume

  let audio = document.getElementById('audio');
  audio.volume = 0.5;


  //---------------------------------------------------------------------
  // image map resizer (jQuery)

  $('map').imageMapResize();



});