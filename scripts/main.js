/*========================================================*\
|* @main.js
|*  $author: glmvc
|*  $license: mit
|*  $style-guide and methodology: /CONTRIBUTING.md
|*
|* @table-of-contents
|*  || dom ready
|*    || check scrolling
|*    || typewriter effect
|*    || nav
|*    || corrected main heading with click function
|*    || personalized welcome message
|*    || image map resizer
|*    || image and figure caption switcher
|*    || audio volume
|*    || birthday banner
|*
|* @libraries
|*  $jquery v3.6.0
|*  $imagemapresizer v1.0.10
|*  $prismjs v1.27.0
\*========================================================*/

/*========================================================*\
|| dom ready
\*========================================================*/

$(document).ready(function () {
  /*========================================================*\
  || check scrolling */

  let checkScroll = function () {
    // 20px margin-top of the body plus 3px border-top of the .page-wrapper
    if ($(window).scrollTop() > 23) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  };

  $(window).on("scroll", function () {
    checkScroll();
  });

  /*========================================================*\
  || typewriter effect */

  const text = "glmvc";

  $("#typewriter-text").html(text);
  $("#typewriter-text").css("--characters", text.length + 6);

  /*========================================================*\
  || nav */

  $("#nav-icon").on("click", function () {
    $(this).toggleClass("open");
    $("body").toggleClass("nav-open");

    let isExpanded = $(this).attr("aria-expanded");
    if (isExpanded === "false") {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });

  /*========================================================*\
  || corrected main heading with click function */

  $("h1")
    .text("Hello, World!")
    .on("click", function () {
      alert("Ouch! Stop poking me!");
    });

  /*========================================================*\
  || personalized welcome message */

  function setUserName() {
    let maxLength = 50;
    let userName = -1;

    while (userName == -1 || (userName != null && userName.length > maxLength)) {
      userName = window.prompt(`Please enter your username. (maximum characters: ${maxLength})`);
    }

    if (!userName) {
      setUserName();
    } else {
      localStorage.setItem("name", userName);
      $("h2").html(`Nice to meet you, <span>${userName}</span>!`);
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    $("h2").html(`Nice to meet you, <span>${storedName}</span>!`);
  }

  $("#button").on("click", function () {
    setUserName();
  });

  /*========================================================*\
  || image map resizer */

  $("map").imageMapResize();

  /*========================================================*\
  || image and figure caption switcher */

  let imageMap;

  $("img").on("click", function () {
    if ($("img").attr("src") === "images/hello-world.png") {
      imageMap = $("map").detach();
      $("img").attr("src", "images/js-code.png");
      $("img + figcaption").html(
        'A JavaScript code snippet that reveals a small "feature", but it is somehow blurred... (screenshot taken with <a href="https://carbon.now.sh/" title="Source Code Image Tool" target="_blank">Carbon App</a>)'
      );
    } else {
      $("img").before(imageMap);
      $("img").attr("src", "images/hello-world.png");
      $("img + figcaption").html(
        'The earth saying hello and the moon (image downloaded from <a href="https://openclipart.org/detail/190952/hello-world" title="Open Clipart image source" target="_blank">Open Clipart</a>)'
      );
    }
  });

  /*========================================================*\
  || audio volume */

  let audio = document.getElementById("audio");
  audio.volume = 0.5;

  /*========================================================*\
  || birthday banner */

  let firstSiteVisit = false;
  checkFirstSiteVisit();
  function checkFirstSiteVisit() {
    if (localStorage.getItem("visited")) {
      return;
    }
    firstSiteVisit = true;
    localStorage.setItem("visited", 1);
  }

  const birthday = "12-06";
  const birthdayYear = "2021";

  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // + 1 because january is 0
  let year = date.getFullYear();

  let currentDate = `${month}-${day}`;
  let pageAge = year - birthdayYear;

  let birthdayBanner =
    '<dialog class="center"><div class="dialog-inner">' +
    '<p class="dialog-highlight">Birthyeah &#127873;</p>' +
    "<p>Today the page turned " +
    pageAge +
    (pageAge > 1 ? " years" : " year") +
    " old.</p>" +
    '<button class="dialog-button close-dialog">Close Birthday Banner</button>' +
    "</div></dialog>";

  if (currentDate == birthday) {
    $(".page-wrapper").prepend(birthdayBanner);
    const dialog = document.querySelector("dialog");

    $(".close-dialog").on("click", function () {
      dialog.close();
    });

    let showDialog = function () {
      if (!$("details .open-dialog").length) {
        $("details > p:nth-of-type(2)")
          .wrap('<button class="dialog-button open-dialog"></button>')
          .prepend("&#127881;")
          .append("&#129395;<br><u>It's birthday time</u>");
        $(".open-dialog").on("click", function () {
          dialog.showModal();
        });
      }
    };

    if (firstSiteVisit) {
      dialog.showModal();
      showDialog();
    } else {
      showDialog();
    }
  }
});
