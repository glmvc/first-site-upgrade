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

$(document).ready(function() {

//---------------------------------------------------------------------
// corrected main heading with click function

$('h1').text('Hello, World!').on('click', function() {

  alert('Ouch! Stop poking me!');

})


//---------------------------------------------------------------------
// image and figure caption switcher

  $('img').on('click', function() {

    let myImage = $('img');
    let myCaption = $('img + figcaption')
    let mySrc = $('img').attr('src');

    if(mySrc === 'images/hello-world.png') {
      myImage.attr('src', 'images/js-code.png');
      myCaption.html('A JavaScript code snippet that reveals a small "feature", but it is somehow blurred... (screenshot taken with <a href="https://carbon.now.sh/" title="Source Code Image Tool" target="_blank">Carbon App</a>)');
    } else {
      myImage.attr('src', 'images/hello-world.png');
      myCaption.html('The earth saying hello and the moon (image downloaded from <a href="https://openclipart.org/detail/190952/hello-world" title="Open Clipart image source" target="_blank">Open Clipart</a>)');
    }

  });


  //---------------------------------------------------------------------
  // personalised welcome message

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h2');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = `Nice to meet you, <span>${myName}</span>!`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = `Nice to meet you, <span>${storedName}</span>!`;
  }

  myButton.onclick = function() {
    setUserName();
  }


  //---------------------------------------------------------------------
  // navigation

  $('nav a').on('click', function() {

    $('nav a').removeClass('active');

    $(this).addClass('active');

  });



});