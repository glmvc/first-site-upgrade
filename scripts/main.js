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
|*    || typewriter effect
|*    || nav toggle button
|*    || corrected main heading with click alert
|*    || personalized welcome message
|*    || image map resizer
|*    || image switcher
|*    || audio volume
|*    || code
|*    || changelog (markdown)
|*      || replace tag
|*    || sticky header
|*    || aside position (responsive)
|*    || table (responsive)
|*    || details animation (waapi)
|*  || birthday banner (dialog)
|*    || first site visit check
|*    || dates
|*    || birthday
|*      || site age
|*      || dialog button
|*      || observe dialog
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
    || typewriter effect */

    const typewriter = $(".js-typewriter-text");
    const typewriterText = "glmvc";

    typewriter.text(typewriterText);
    typewriter.css("--typewriter-characters", typewriterText.length);

    /*========================================================*\
    || nav toggle button */

    $("#js-nav-toggle-button").on("click", function () {
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

    $("button#js-change-username").on("click", function () {
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
      'A JavaScript code snippet that reveals a small feature, but it is somehow blurred... (image created with <a href="https://carbon.now.sh/" title="Carbon Source Code Image Tool" target="_blank" rel="external noopener noreferrer">Carbon</a>)';

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

    image.on("keydown", function (event) {
      if (event.key === "Enter") {
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
            changelogContent.find("a").each(function () {
              const anchor = $(this);
              const anchorHref = anchor.attr("href");
              if (anchorHref && anchorHref.startsWith("http")) {
                if (anchorHref.startsWith("https://glmvc.github.io/first-site-upgrade/")) {
                  const newAnchorHref = anchorHref.replace("https://glmvc.github.io/first-site-upgrade/", "");
                  anchor.attr("href", newAnchorHref);
                } else {
                  anchor.attr({
                    target: "_blank",
                    rel: "external noopener noreferrer",
                  });
                }
              }
            });
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
  || aside position (responsive) */

  const asidePosition = debounce(() => {
    const aside = $("main > aside");
    let windowHeight = window.innerHeight; // note (mobile) browsers with dynamic (address) bars
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

  /*========================================================*\
  || table (responsive) */

  const responsiveTable = debounce(() => {
    $(".table-scroll").each(function () {
      const tableScroll = $(this);
      const tableWrapper = tableScroll.parent(".table-wrapper");
      const table = tableScroll.children("table");

      if (table) {
        const tableScrollWidth = tableScroll[0].scrollWidth;
        const tableClientWidth = tableScroll[0].clientWidth;

        if (tableScrollWidth > tableClientWidth) {
          tableWrapper.addClass("js-table-responsive");
        } else if (tableScrollWidth <= tableClientWidth) {
          tableWrapper.removeClass("js-table-responsive");
        }
      }
    });
  });

  $(window).on("load resize", function () {
    responsiveTable();
  });

  $(".table-scroll").on("scroll", function () {
    const tableScroll = $(this);
    const tableWrapper = tableScroll.parent(".table-wrapper");

    if (tableWrapper.hasClass("js-table-responsive")) {
      const scrollLeft = tableScroll.scrollLeft();
      const maxScroll = tableScroll[0].scrollWidth - tableScroll[0].clientWidth;
      const scrollThreshold = 10;

      if (scrollLeft >= scrollThreshold) {
        tableWrapper.addClass("js-scroll-start");
      } else if (scrollLeft < scrollThreshold) {
        tableWrapper.removeClass("js-scroll-start");
      }

      if (scrollLeft + scrollThreshold >= maxScroll) {
        tableWrapper.addClass("js-scroll-end");
      } else if (scrollLeft + scrollThreshold < maxScroll) {
        tableWrapper.removeClass("js-scroll-end");
      }
    }
  });

  /*========================================================*\
  || details animation (waapi) */

  class Accordion {
    constructor(element) {
      this.element = element;
      this.summary = element.querySelector("summary");
      this.content = element.querySelector(".details-inner");
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.animationDuration = 400; // milliseconds equal to --transition-duration-longer in /styles/style.css
      this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      this.summary.addEventListener("click", (event) => this.onClick(event));
    }

    onClick(event) {
      if (this.prefersReducedMotion) {
        return;
      }

      event.preventDefault();

      this.element.style.overflow = "hidden";

      if (this.isClosing || !this.element.open) {
        this.open();
      } else if (this.isExpanding || this.element.open) {
        this.shrink();
      }
    }

    shrink() {
      this.isClosing = true;

      const startHeight = `${this.element.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;

      if (this.animation) {
        this.animation.cancel();
      }

      this.animation = this.element.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: this.animationDuration,
          easing: "ease-out",
        }
      );

      this.animation.onfinish = () => this.onAnimationFinish(false);
      this.animation.oncancel = () => (this.isClosing = false);
    }

    open() {
      this.element.style.height = `${this.element.offsetHeight}px`;
      this.element.open = true;

      window.requestAnimationFrame(() => this.expand());
    }

    expand() {
      this.isExpanding = true;

      const startHeight = `${this.element.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

      if (this.animation) {
        this.animation.cancel();
      }

      this.animation = this.element.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: this.animationDuration,
          easing: "ease-out",
        }
      );

      this.animation.onfinish = () => this.onAnimationFinish(true);
      this.animation.oncancel = () => (this.isExpanding = false);
    }

    onAnimationFinish(open) {
      this.element.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;

      this.element.style.height = this.element.style.overflow = "";
    }
  }

  $(document).ready(function () {
    document.querySelectorAll("details").forEach((el) => {
      new Accordion(el);
    });
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
    // const birthDate = "12-31"; /* testing */

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
          const footerDetails = $("footer .details-inner");
          const paragraph = footerDetails.children("p:nth-of-type(2)");

          paragraph
            .append(
              `<br><span class="emoji">&#127880;</span>&nbsp;It's birthday time!&nbsp;<span class="emoji">&#127873;</span>`
            )
            .prependTo(footerDetails)
            .replaceWith(
              $("<button/>", {
                type: "button",
                class: "js-open-dialog dialog-button centered box-shadow",
                "aria-haspopup": "dialog",
                html: paragraph.html(),
              })
            );
        }
      };

      createDialogButton();

      /*
      || observe dialog */

      const dialogObserver = new MutationObserver((mutations, observer) => {
        mutations.forEach(async (mutation) => {
          if (mutation.attributeName === "open") {
            const dialog = mutation.target;
            const isOpen = dialog.hasAttribute("open");

            if (isOpen) {
              dialog.removeAttribute("inert");
              const focusTarget = dialog.querySelector("[autofocus]");
              focusTarget ? focusTarget.focus() : dialog.querySelector("button").focus();
              $(document).trigger("dialogOpened");
            } else {
              dialog.setAttribute("inert", "");
              $(document).trigger("dialogClosed");
            }
          }
        });
      });

      dialogObserver.observe(dialog, {
        attributes: true,
      });

      /*
      || open dialog */

      function openDialog() {
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
      }

      function lightDismissDialog({ target: dialog }) {
        if (dialog.nodeName === "DIALOG") {
          closeDialog();
        }
      }

      dialog.addEventListener("click", lightDismissDialog);
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
        // color 400 primary, analogous, analogous, triadic, triadic, complementary
        shapes: ["circle", "circle", "square"],
        scalar: 0.9,
        zIndex: 99, // equal to z-index of #banner-confetti in /styles/style.css
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
              y: Math.random() - 0.2, // start slightly higher than "random", as particles fall down
            },
          });
          confetti({
            ...confettiFireworkSettings,
            particleCount,
            origin: {
              x: getRandomArbitrary(0.6, 0.9),
              y: Math.random() - 0.2, // start slightly higher than "random", as particles fall down
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
            $(document)
              .off("dialogClosed")
              .on("dialogClosed", function () {
                fireworkConfetti();
              });
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
