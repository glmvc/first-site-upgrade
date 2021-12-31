/* I am a JavaScript comment. Browsers ignore me as they render the code. Therefore I am not visible to users. Only if you look at the code, you can see me. Use me to explain important or complicated sections of code so that when you return to the code after a long time, you still know what you have coded. This is also very useful for other coders viewing your code. */

/*
  It is possible
  to write me across
  multiple lines...
*/

// ... or like this on a single line.



// the JS code starts here:

const correctedHeading = document.querySelector('h1');
correctedHeading.textContent = 'Hello, World!';


document.querySelector('h1').onclick = function() {
  alert('Ouch! Stop poking me!');
}

/* alternative (longer) code:
let myHeadline1 = document.querySelector('h1');
myHeadline1.onclick = function() {
  alert('Ouch! Stop poking me!');
}
*/


// image and figure caption switcher code:

let myImage = document.querySelector('img');
let myCaption = document.querySelector('figcaption');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/hello-world.png') {
    myImage.setAttribute ('src','images/js-code.png');
    myCaption.textContent = 'A JavaScript code snippet that reveals a small "feature" (image created by myself)';
  } else {
    myImage.setAttribute ('src','images/hello-world.png');
    myCaption.innerHTML = 'The earth saying hello and the moon (image downloaded from <a href="https://openclipart.org/detail/190952/hello-world" title="Open Clipart image source" target="_blank">Open Clipart</a>)';
  }
  
}


// personalised welcome message code:

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nice to meet you, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Nice to meet you, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}