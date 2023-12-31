/* i am a comment
   (a browser ignores text marked as comments) */
// i am a single line comment

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


// image switcher code:

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/hello-world.png') {
    myImage.setAttribute ('src','images/js-code.png');
  } else {
    myImage.setAttribute ('src','images/hello-world.png');
  }
}


// personalized welcome message code:

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
