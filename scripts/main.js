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
|*    || sticky header
|*    || typewriter effect
|*    || nav-toggler
|*    || corrected main heading with click function
|*    || personalized welcome message
|*    || image map resizer
|*    || image switcher
|*    || audio volume
|*    || changelog (markdown)
|*      || replace tag
|*    || aside position (mobile)
|*  || birthday banner (dialog)
|*    || first site visit check
|*    || dates
|*    || birthday
|*      || site age
|*      || dialog button
|*      || open dialog
|*      || close dialog
|*
|* @libraries
|*  $jquery v3.6.4
|*  $prismjs v1.29.0
|*  $marked v5.1.0
|*  $imagemapresizer v1.0.10
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
  console.error("jQuery library not found.");
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
  $(document).ready(function () {
    /*========================================================*\
    || resize animation stopper */

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
      }, 200);
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
    let height = element.outerHeight();
    $(":root").css(`--${cssPropertyName}`, `${height}px`);
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
    const externalLinkContent = `<span class="visually-hidden">, external link (opens in a new tab)</span>${externalLinkIcon}`;
    const externalLinkContentNotSecure = `<span class="visually-hidden">, external link (connection not secure, opens in a new tab)</span>${externalLinkIcon}`;

    $('a[target="_blank"]').each(function () {
      const externalLink = $(this);
      if (externalLink.is('[href^="https:"]')) {
        externalLink.append(externalLinkContent);
      } else if (externalLink.is('[href^="http:"]')) {
        externalLink.append(externalLinkContentNotSecure);
      }
    });

    /*========================================================*\
    || sticky header */

    const stickyHeader = $(".page-wrapper > header");
    $(window).on("scroll", function () {
      let scrollTop = $(window).scrollTop();
      let headerOffsetTop = stickyHeader.offset().top;
      $("body").toggleClass("js-sticky-header", scrollTop >= headerOffsetTop);
    });

    /*========================================================*\
    || typewriter effect */

    const typewriter = $(".js-typewriter-text");
    const typewriterText = "glmvc";

    typewriter.html(typewriterText);
    typewriter.css("--typewriter-characters", typewriterText.length);

    /*========================================================*\
    || nav-toggler */

    $("#nav-toggler").on("click", function () {
      $("body").toggleClass("js-nav-open");
      $(this).attr("aria-expanded", $(this).attr("aria-expanded") === "false" ? "true" : "false");
    });

    /*========================================================*\
    || corrected main heading with click function */

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

    if (typeof $().imageMapResize === "function") {
      $("map").imageMapResize();
    } else {
      console.warn("Image Map Resizer library not found.");
      $("map").remove();
      $(".section-greeting img").removeAttr("usemap");
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
    const newImageAltText = "A blurred code snippet that reveals a small easter egg";
    const newFigcaption =
      'A JavaScript code snippet that reveals a small feature, but it is somehow blurred... (screenshot taken with <a href="https://codeimg.io/" title="Source Code Image Tool" target="_blank">Codeimg.io</a>)';

    const switchImage = function () {
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
    };

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
            changelogContent.html(htmlChangelogContent);
            replaceTag(changelogContent, "h3", "h5");
            replaceTag(changelogContent, "h2", "h4");
            replaceTag(changelogContent, "h1", "h3");
            changelogContent.find("pre > code").addClass("language-none");
            Prism.highlightAll();
          } catch (error) {
            changelogContent
              .html(
                `<pre class='language-' data-src-status='failed'><code class='language-'>✖ ${error.message}</code></pre>`
              )
              .addClass("js-changelog-error");
            console.error(error);
          }
        }

        initChangelog();
      } else {
        changelogContent
          .html(
            "<pre class='language-' data-src-status='failed'><code class='language-'>✖ Error: Markdown parser not found</code></pre>"
          )
          .addClass("js-changelog-error");
        console.warn("Marked markdown parser not found.");
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
  || aside position (mobile) */

  const asidePosition = debounce(() => {
    const aside = $("aside");
    let windowHeight = window.innerHeight; /* note mobile browsers with dynamic (address) bars */
    let documentHeight = $(document).height();
    let scrollTop = $(window).scrollTop();
    let buffer = parseFloat($(".page-wrapper > footer").css("padding-bottom"));
    if (breakpointSmall.matches) {
      if (scrollTop + windowHeight >= documentHeight - buffer) {
        aside.css("margin-bottom", "var(--wrapper-spacing-main)"); // property value equal to the value of buffer
      } else {
        aside.css("margin-bottom", "");
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
  $(document).ready(function () {
    /*========================================================*\
    || first site visit check */

    let firstSiteVisit = false;
    function checkFirstSiteVisit() {
      if (localStorage.getItem("visited")) {
        return;
      }
      firstSiteVisit = true;
      localStorage.setItem("visited", 1);
    }
    checkFirstSiteVisit();

    /*========================================================*\
    || dates */

    const dateOfBirth = new Date($("#birthday").attr("datetime"));
    const monthOfBirth = String(dateOfBirth.getMonth() + 1).padStart(2, "0"); // + 1 because january is 0
    const dayOfBirth = String(dateOfBirth.getDate()).padStart(2, "0");
    const yearOfBirth = dateOfBirth.getFullYear(dateOfBirth);
    const birthDate = `${monthOfBirth}-${dayOfBirth}`;
    //const birthDate = "06-12"; // testing

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

      dialog.querySelector(".js-site-age").innerHTML = siteAge + (siteAge > 1 ? " years" : " year");

      /*
      || dialog button */

      let createDialogButton = function () {
        if (!$(".js-open-dialog").length) {
          $("footer .details-inner > p:nth-of-type(2)")
            .prepend("<span class='emoji'>&#127881;</span>")
            .append(
              "<span class='emoji'>&#129395;</span><br><span class='emoji'>&#127880;</span> It's birthday time <span class='emoji'>&#127873;</span>"
            )
            .replaceWith(function () {
              return $("<button/>", {
                type: "button",
                class: "dialog-button js-open-dialog centered",
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
    } else {
      localStorage.removeItem("visited");
    }
  });
})(jQuery);
