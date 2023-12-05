/*========================================================*\
|* @main.js
|*  $author: glmvc
|*  $license: mit
|*  $code-style-guide: /CONTRIBUTING.md
|*
|* @table-of-contents
|*  || utility
|*    || jQuery check
|*    || debounce
|*    || resize animation stopper
|*    || preload class
|*    || element heights
|*  || main
|*    || breakpoints
|*    || external hyperlinks (icon & a11y)
|*    || typewriter effect
|*    || nav-toggler
|*    || corrected main heading with click alert
|*    || personalized welcome message
|*    || image map resizer
|*    || image switcher
|*    || audio volume
|*    || code
|*    || changelog (markdown)
|*      || replace tag
|*    || sticky header
|*    || aside position (mobile)
|*  || birthday banner (dialog)
|*    || first site visit check
|*    || dates
|*    || birthday
|*      || site age
|*      || dialog button
|*      || open dialog
|*      || close dialog
|*      || confetti
|*
|* @libraries
|*  $jquery v3.6.4
|*  $imagemapresizer v1.0.10
|*  $prismjs v1.29.0
|*  $marked v5.1.0
|*
|* @breakpoints
|*  $min-width: 62em (992px) - large (desktops)
|*  $min-width: 48em (768px) - medium (tablets)
|*  $max-width: 47.99em (767.98px) - small (mobile)
|*  $max-width: 19.99em (319.98px) - tiny (special)
\*========================================================*/

/*========================================================*\
|| utility
\*========================================================*/

/*========================================================*\
|| jQuery check */

if (typeof jQuery === "undefined") {
  console.error("jQuery library not found");
}

/*========================================================*\
|| debounce */

function debounce(callback, delay = 100) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
}

(function ($) {
  /*========================================================*\
  || resize animation stopper */

  $(document).ready(function () {
    const addAnimationStopperClass = debounce(() => {
      $("body").addClass("js-resize-animation-stopper");
    });

    const removeAnimationStopperClass = debounce(() => {
      $("body").removeClass("js-resize-animation-stopper");
    });

    let resizeTimer;
    let isResizing = false;

    $(window).on("resize", function () {
      if (!isResizing) {
        addAnimationStopperClass();
        isResizing = true;
      }

      window.clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        removeAnimationStopperClass();
        isResizing = false;
      }, 100);
    });
  });

  /*========================================================*\
  || preload class */

  $(window).on("load", function () {
    $("body").removeClass("js-preload");
  });

  /*========================================================*\
  || element heights */

  function getElementHeight(elementSelector, cssPropertyName) {
    const element = $(elementSelector);
    let elementHeight = element.outerHeight();
    $(":root").css(`--${cssPropertyName}`, `${elementHeight}px`);
  }

  $(window).on("load resize", function () {
    getElementHeight(".page-wrapper > header", "js-header-height");
    getElementHeight("main > aside", "js-aside-height");
  });
})(jQuery);

/*========================================================*\
|| main
\*========================================================*/

(function ($) {
  /*========================================================*\
  || breakpoints */

  const breakpointSmall = window.matchMedia("(max-width: 47.99em)");

  $(document).ready(function () {
    /*========================================================*\
    || external hyperlinks (icon & a11y) */

    const externalLinkIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
    const externalLinkContent = `<span class="visually-hidden">; external link (opens in a new tab)</span>${externalLinkIcon}`;
    const externalLinkContentNotSecure = `<span class="visually-hidden">; external link (connection not secure, opens in a new tab)</span>${externalLinkIcon}`;

    function modifyExternalLinks() {
      $('a[target="_blank"]').each(function () {
        const externalLink = $(this);
        if (externalLink.is('[href^="https:"]')) {
          externalLink.append(externalLinkContent);
        } else if (externalLink.is('[href^="http:"]')) {
          externalLink.append(externalLinkContentNotSecure);
        }
      });
    }

    modifyExternalLinks();

    /*========================================================*\
    || typewriter effect */

    const typewriter = $(".js-typewriter-text");
    const typewriterText = "glmvc";

    typewriter.text(typewriterText);
    typewriter.css("--typewriter-characters", typewriterText.length);

    /*========================================================*\
    || nav-toggler */

    $("#nav-toggler").on("click", function () {
      $("body").toggleClass("js-nav-open");
      $(this).attr("aria-expanded", $(this).attr("aria-expanded") === "false" ? "true" : "false");
    });

    /*========================================================*\
    || corrected main heading with click alert */

    $("h1 .heading-main")
      .text("Hello, World!")
      .on("click", function () {
        alert("Ouch! Stop poking me!");
      });

    /*========================================================*\
    || personalized welcome message */

    function setUserName() {
      const maxLength = 50;
      let userName = -1;

      while (userName === -1 || (userName !== null && userName.length > maxLength)) {
        userName = window.prompt(`Please enter your username (maximum characters: ${maxLength}).`);
      }

      if (!userName) {
        setUserName();
      } else {
        localStorage.setItem("name", userName);
        $("h2 bdi").text(`${userName}`).attr("data-name", `${userName}`);
      }
      $("html, body").scrollTop(0);
    }

    if (!localStorage.getItem("name")) {
      setUserName();
    } else {
      let storedName = localStorage.getItem("name");
      $("h2 bdi").text(`${storedName}`).attr("data-name", `${storedName}`);
    }

    $("button#change-username").on("click", function () {
      setUserName();
    });

    /*========================================================*\
    || image map resizer */

    if ($("map").length) {
      if (typeof imageMapResize !== "undefined") {
        $("map").imageMapResize();
      } else {
        $("map").remove();
        $(".section-greeting img").removeAttr("usemap");
        console.warn("Image Map Resizer library not found");
      }
    }

    /*========================================================*\
    || image switcher */

    const image = $(".section-greeting img");
    const imageMap = $('map[name="hello-world"]');
    const imageFigcaption = $(".section-greeting img + figcaption");
    const originalImageSrcset = image.attr("srcset");
    const originalImageSrc = image.attr("src");
    const originalAltText = image.attr("alt");
    const originalUsemap = image.attr("usemap");
    const originalFigcaption = image.closest("figure").find("figcaption").html();
    const newImageSrcset = "images/js-code.png, images/js-code-2x.png 2x, images/js-code-4x.png 4x";
    const newImageSrc = "images/js-code.png";
    const newImageAltText = "A blurred code snippet that reveals a small Easter egg";
    const newFigcaption =
      'A JavaScript code snippet that reveals a small feature, but it is somehow blurred... (screenshot taken with <a href="https://codeimg.io/" title="Source Code Image Tool" target="_blank">Codeimg.io</a>)';

    function switchImage() {
      if (image.attr("src") === "images/hello-world.png") {
        imageMap.detach();
        image
          .attr({
            srcset: newImageSrcset,
            src: newImageSrc,
            alt: newImageAltText,
          })
          .removeAttr("usemap");
        imageFigcaption.html(newFigcaption);
      } else {
        image.before(imageMap);
        image.attr({
          srcset: originalImageSrcset,
          src: originalImageSrc,
          alt: originalAltText,
          usemap: originalUsemap,
        });
        imageFigcaption.html(originalFigcaption);
      }
    }

    image.on("click", function () {
      switchImage();
    });

    image.on("keydown", function (e) {
      // enter key (code 13)
      if (e.which === 13) {
        switchImage();
      }
    });

    /*========================================================*\
    || audio volume */

    const audio = document.getElementById("audio");
    if (audio) {
      audio.volume = 0.5;
    }

    /*========================================================*\
    || code */

    function highlightCode() {
      Prism.highlightAll();
      $(".code-toolbar").addClass("box-shadow");
    }

    if (typeof Prism !== "undefined") {
      highlightCode();
    } else if ($("pre[data-src]").length) {
      $("pre[data-src]")
        .addClass("language-")
        .attr("data-src-status", "failed")
        .html('<code class="language-">✖ Error: Prism syntax highlighter not found</code>');
      console.error("Prism library not found");
    }

    /*========================================================*\
    || changelog (markdown) */

    const changelogContent = $("#content-changelog");
    const changelogMarkdownFile = "CHANGELOG.md";

    if (changelogContent.length) {
      if (typeof marked !== "undefined") {
        async function fetchAndParseMarkdown() {
          try {
            const response = await fetch(changelogMarkdownFile);
            if (!response.ok) {
              throw new Error(`Error ${response.status} while fetching file: ${response.statusText}`);
            }
            const data = await response.text();
            const htmlFromMarkdown = marked.parse(data, { mangle: false, headerIds: false });
            return htmlFromMarkdown;
          } catch (error) {
            throw new Error(`Error fetching or parsing markdown file: ${error.message}`);
          }
        }

        async function initChangelog() {
          try {
            const htmlChangelogContent = await fetchAndParseMarkdown();
            changelogContent.append(htmlChangelogContent);
            replaceTag(changelogContent, "h4", "h6");
            replaceTag(changelogContent, "h3", "h5");
            replaceTag(changelogContent, "h2", "h4");
            replaceTag(changelogContent, "h1", "h3");
            changelogContent.find("pre > code").addClass("language-none");
            changelogContent.find("a").attr("target", "_blank");
            modifyExternalLinks();
            if (typeof Prism !== "undefined") {
              highlightCode();
            } else {
              console.warn("Prism library not found");
            }
          } catch (error) {
            changelogContent
              .html(
                `<pre class="language-" data-src-status="failed"><code class="language-">✖ Error: ${error.message}</code></pre>`
              )
              .addClass("js-changelog-error");
            console.error(error);
          }
        }

        initChangelog();
      } else {
        changelogContent
          .html(
            '<pre class="language-" data-src-status="failed"><code class="language-">✖ Error: Marked markdown compiler not found</code></pre>'
          )
          .addClass("js-changelog-error");
        console.error("Marked compiler not found");
      }
    }

    /*
    || replace tag */

    function replaceTag($parentElement, originalTag, replacementTag) {
      $parentElement.find(originalTag).replaceWith(function () {
        return $("<" + replacementTag + ">").append($(this).contents());
      });
    }
  });

  /*========================================================*\
  || sticky header */

  function stickyHeader() {
    const stickyHeader = $(".page-wrapper > header");
    let scrollTop = $(window).scrollTop();
    let headerOffsetTop = stickyHeader.offset().top;
    $("body").toggleClass("js-sticky-header", scrollTop >= headerOffsetTop);
  }

  $(window).on("load scroll", function () {
    stickyHeader();
  });

  /*========================================================*\
  || aside position (mobile) */

  const asidePosition = debounce(() => {
    const aside = $("main > aside");
    let windowHeight = window.innerHeight; // note mobile browsers with dynamic (address) bars
    let documentHeight = $(document).height();
    let scrollTop = $(window).scrollTop();
    let buffer = parseFloat($(".page-wrapper > footer").css("padding-bottom"));
    if (breakpointSmall.matches) {
      if (scrollTop + windowHeight >= documentHeight - buffer) {
        aside.addClass("js-bottom-reached");
      } else {
        aside.removeClass("js-bottom-reached");
      }
    }
  });

  $(window).on("load scroll resize", function () {
    asidePosition();
  });
})(jQuery);

/*========================================================*\
|| birthday banner (dialog)
\*========================================================*/

(function ($) {
  /*========================================================*\
  || first site visit check */

  function checkFirstSiteVisit() {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      localStorage.setItem("visited", "true");
      return true;
    }
    return false;
  }

  let firstSiteVisit = checkFirstSiteVisit();

  $(document).ready(function () {
    /*========================================================*\
    || dates */

    const dateOfBirth = new Date($("#birthday").attr("datetime"));
    const monthOfBirth = String(dateOfBirth.getMonth() + 1).padStart(2, "0"); // + 1 because january is 0
    const dayOfBirth = String(dateOfBirth.getDate()).padStart(2, "0");
    const yearOfBirth = dateOfBirth.getFullYear(dateOfBirth);
    const birthDate = `${monthOfBirth}-${dayOfBirth}`;
    // const birthDate = "12-05"; /* testing */

    const today = new Date();
    const currentMonth = String(today.getMonth() + 1).padStart(2, "0"); // + 1 because january is 0
    const currentDay = String(today.getDate()).padStart(2, "0");
    const currentYear = today.getFullYear();
    const currentDate = `${currentMonth}-${currentDay}`;

    const siteAge = currentYear - yearOfBirth;

    /*========================================================*\
    || birthday */

    if (currentDate === birthDate) {
      const dialog = document.getElementById("birthday-banner");

      /*
      || site age */

      dialog.querySelector(".js-site-age").innerText = siteAge + (siteAge > 1 ? " years" : " year");

      /*
      || dialog button */

      const createDialogButton = function () {
        if (!$(".js-open-dialog").length) {
          $("footer .details-inner > p:nth-of-type(2)")
            .append(
              `<br><span class="emoji">&#127880;</span>&nbsp;It's birthday time!&nbsp;<span class="emoji">&#127873;</span>`
            )
            .replaceWith(function () {
              return $("<button/>", {
                type: "button",
                class: "dialog-button js-open-dialog centered box-shadow",
                html: $(this).html(),
              });
            });
        }
      };

      createDialogButton();

      /*
      || open dialog */

      function openDialog() {
        dialog.removeAttribute("inert");
        dialog.showModal();
      }

      if (firstSiteVisit) {
        openDialog();
      }

      $(".js-open-dialog").on("click", openDialog);

      /*
      || close dialog */

      function closeDialog() {
        dialog.close();
        dialog.setAttribute("inert", "");
      }

      function lightDismiss({ target: dialog }) {
        if (dialog.nodeName === "DIALOG") {
          closeDialog();
        }
      }

      dialog.addEventListener("click", lightDismiss);
      dialog.addEventListener("close", closeDialog);
      $(".js-close-dialog").on("click", closeDialog);

      /*
      || confetti */

      const confettiScript = "scripts/js-confetti.min.js";
      const confettiCanvas = $("#banner-confetti");
      const celebrateButton = $(".js-celebrate-birthday");

      const confettiDefaultSettings = {
        startVelocity: 45,
        decay: 0.9,
        gravity: 0.9,
        drift: 0,
        flat: false,
        ticks: 200,
        origin: { x: 0.5, y: 1 },
        colors: ["#47c077", "#4ac142", "#00a5a1", "#45a4ea", "#8b48cd", "#f33f89"],
        /* color 400 primary, analogous, analogous, triadic, triadic, complementary */
        shapes: ["circle", "circle", "square"],
        scalar: 0.9,
        zIndex: 99 /* equal to z-index of #banner-confetti in /styles/style.css */,
        disableForReducedMotion: true,
      };

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

      const confettiEmojis = ["🥳", "🎉", "🎊", "🎈", "🎂", "🎁", "🍾", "🥂", "🍻"];
      const confettiEmojiScalar = 2.3;

      function getRandomConfettiEmojis(minCount, maxCount) {
        const count = getRandomIntInclusive(minCount, maxCount);
        const randomConfettiEmojis = [];
        for (let i = 0; i < count; i++) {
          const randomIndex = getRandomIntInclusive(0, confettiEmojis.length - 1);
          randomConfettiEmojis.push(confettiEmojis[randomIndex]);
        }
        return randomConfettiEmojis;
      }

      let fireworkConfettiInterval;
      function fireworkConfetti() {
        clearInterval(fireworkConfettiInterval);

        const confettiFireworkSettings = {
          ...confettiDefaultSettings,
          spread: 360,
          startVelocity: 30,
          ticks: 60,
        };
        const fireworkDuration = 1000 * 21; /* 21 seconds */
        let fireworkEnd = Date.now() + fireworkDuration;

        fireworkConfettiInterval = setInterval(function () {
          let fireworkTimeLeft = fireworkEnd - Date.now();

          if (fireworkTimeLeft <= 0) {
            return clearInterval(fireworkConfettiInterval);
          }

          let particleCount = 60 * (fireworkTimeLeft / fireworkDuration);
          confetti({
            ...confettiFireworkSettings,
            particleCount,
            origin: {
              x: getRandomArbitrary(0.1, 0.3),
              y: Math.random() - 0.2 /* start slightly higher than "random", as particles fall down */,
            },
          });
          confetti({
            ...confettiFireworkSettings,
            particleCount,
            origin: {
              x: getRandomArbitrary(0.6, 0.9),
              y: Math.random() - 0.2 /* start slightly higher than "random", as particles fall down */,
            },
          });
        }, 230);
      }

      $.getScript(confettiScript)
        .done(function (script, textStatus) {
          let bannerConfetti = confetti.create(confettiCanvas[0], {
            resize: true,
          });

          celebrateButton.on("click", function () {
            const selectedConfettiEmojis = getRandomConfettiEmojis(1, 4);

            bannerConfetti({
              ...confettiDefaultSettings,
              particleCount: getRandomIntInclusive(60, 120),
              angle: getRandomIntInclusive(70, 110),
              spread: getRandomIntInclusive(60, 80),
            });

            bannerConfetti({
              ...confettiDefaultSettings,
              particleCount: getRandomIntInclusive(10, 30),
              angle: getRandomIntInclusive(80, 100),
              shapes: selectedConfettiEmojis.map((confettiEmoji) =>
                confetti.shapeFromText({ text: confettiEmoji, scalar: confettiEmojiScalar })
              ),
              scalar: confettiEmojiScalar,
            });

            fireworkConfetti();
          });
        })
        .fail(function (jqxhr, settings, exception) {
          confettiCanvas.hide();
          celebrateButton.hide();
          console.error(`Error requesting Canvas Confetti library: ${exception}`);
        });
    } else {
      localStorage.removeItem("visited");
    }
  });
})(jQuery);
