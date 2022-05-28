# :clipboard: Changelog

## :gear: General

- [x] Space indentation changed from 4 to 2 spaces in the code editor (personal preference)

- [x] HTML, CSS and JavaScript comments explained in more detail

- [x] Code structures improved with comments and "separators"

- [x] Useful tools and libraries now in use


---


## &lt; / &gt; HTML

### &lt;head&gt;

- [x] Document language set to English (US):

  `<html lang="en-US">`

- [x] Document text direction set to left-to-right:

  `<html dir="ltr">`

- [x] Additional meta data added (author, description, viewport, Facebook Open Graph Data and Twitter Card):

  `<meta name="author" content="glmvc">`

  `<meta name="description" content="The upgraded version of my first site!">`

  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

  `<meta property="og:type" content="website">`

  `<meta property="og:url" content="https://glmvc.github.io/first-site-upgrade">`

  `<meta property="og:title" content="My Upgraded First Site">`

  `<meta property="og:description" content="The upgraded version of my first site!">`

  `<meta property="og:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png">`

  `<meta property="twitter:card" content="summary_large_image">`

  `<meta property="twitter:url" content="https://glmvc.github.io/first-site-upgrade">`

  `<meta property="twitter:title" content="My Upgraded First Site">`

  `<meta property="twitter:description" content="The upgraded version of my first site!">`

  `<meta property="twitter:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png">`

- [x] Document title changed to "My Upgraded First Site":

  `<title>My Upgraded First Site</title>`

- [x] [Normalize.css](https://necolas.github.io/normalize.css/) now in use:

  `<link rel="stylesheet" href="styles/normalize.css">`

- [x] Linking to Google's online font service removed and instead new stylesheet (fonts.css) linked:

  `<link rel="stylesheet" href="styles/fonts.css">`

- [x] Additional favicons added for multiple device/browser support:

  `<link rel="icon" href="favicon.ico" type="image/x-icon" sizes="any">`

  `<link rel="icon" href="favicon-16x16.png" type="image/png" sizes="16x16">`

  `<link rel="icon" href="favicon-32x32.png" type="image/png" sizes="32x32">`

  `<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">`

  `<link rel="manifest" href="site.webmanifest">`

- [x] New scripts ([jQuery](https://jquery.com/) & [Image Map Resizer](https://github.com/davidjbradshaw/image-map-resizer) library) added and script loading strategy changed (now within the head + defer attribute for main.js):

  `<script src="scripts/jquery-3.6.0.min.js"></script>`

  `<script src="scripts/imageMapResizer.min.js"></script>`

  `<script src="scripts/main.js" defer></script>`

- [x] [PrismJS syntax highlighter library](https://prismjs.com/) files (CSS and JavaScript) linked in the created source code (code.html) and changelog (changelog.html) documents:

  `<link rel="stylesheet" href="styles/prism.css">`

  `<script src="scripts/prism.js"></script>`

### &lt;/head&gt;


### &lt;body&gt;

- [x] Accessibility aspects changed and added where they were wrong/missing

- [x] Semantic elements used appropriately

- [x] Semantic elements for structuring content now in use:

  `<header>...</header>` with `<nav>...</nav>` within

  `<main>...</main>` with `<aside>...</aside>`, multiple `<section>...</section>`'s and `<div>...</div>` containers within

  `<footer>...</footer>`

- [x] Horizontal rules added to divide the sections:

  `<hr>`

- [x] If JavaScript is disabled (in the browser), a warning message will be displayed now:

  `<noscript>...</noscript>`

- [x] SVG logo added inline within the header (within a hyperlink to the homepage):

  `<svg width="10rem" height="10rem" viewBox="0 0 276 255" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>` with `<path .../>`'s within

- [x] Two `div` container added after the SVG logo for text with a typewriter effect (using CSS and JavaScript)

- [x] Outgoing hyperlinks changed so that they open in a new tab instead of the current one:

  `target="_blank"` attribute

- [x] Title attribute added to hyperlinks and images so hovering over them will open a descriptive tooltip:

  `title="description"` attribute

- [x] Quotations and citation added within the main content:

  `<blockquote>...</blockquote>` and `<q>...</q>` with `cite` attribute

  `<cite>...</cite>`

- [x] Important text content marked:

  `<mark>...</mark>`

- [x] Line breaks added to make paragraphs easier to read:

  `<br>`

- [x] Emphasis and importance added for certain words and text passages:

  `<em>...</em>`

  `<strong>...</strong>`

- [x] The image is now an image map with hyperlink-areas:

  `<map name="hello-world">...</map>`

  `<area alt="alternative text" title="point map title" href="https..." target="_blank" shape="circle" coords="x,y,radius">`

- [x] Video added within the main content (with fallback):

  `<video width="400" controls muted autoplay loop preload="auto">...</video>`

- [x] Figure and figure caption added to the images, video and audio:

  `<figure>...</figure>`

  `<figcaption>...</figcaption>`

- [x] Description list added to introduce HTML, CSS and JS:

  `<dl>...</dl>` with `<dt>...</dt>` and `<dd>...</dd>` within

- [x] Nested unordered list added

- [x] Abbreviations added to abbreviate HTML, CSS and JS:

  `<abbr title="abbreviation title">...</abbr>`

- [x] Character entity references added instead of HTML syntax characters:

  `&amp;`, `&apos;`, `&quot;`, `&lt;` and `&gt;`

- [x] Emojis added with character references within the sidebar:

  `&#128025;` and `&#128038;`

- [x] A complex table about planet data added:

  `<table>...</table>` with `<caption>...</caption>`, `<colgroup>...</colgroup>`, `<col>...</col>`, `<thead>...</thead>`, `<tbody>...</tbody>`, `<tr>...</tr>`, `<th>...</th>`, `<td>...</td>` and `<tfoot>...</tfoot>` within

- [x] Further sources added to the ordered list

- [x] A soundtrack added within the footer (with fallback):

  `<audio id="audio" controls loop preload="auto">...</audio>`

- [x] Fake contact details added within the footer:

  `<address>...</address>`

  `href="tel:..."` and `href="mailto:..."` attributes

- [x] Iframe for a map (from [Google Maps](https://www.google.com/maps/about/#!/)) added within the address:

  `<iframe title="Google Maps Location" src="https:..." width="400" height="300" style="border:0;" loading="lazy"></iframe>`

- [x] Addditional page information added within a detail area with a summary text:

  `<details>...</details>` with `<summary>Info</summary>` within

- [x] Superscript added for the birthdate of the page within the detail area in the footer:

  `<sup>...</sup>`

- [x] Subscript added for the chemical formula within the detail area in the footer:

  `<sub>...</sub>`

- [x] Date and time added for the last update and the birthdate of the page within the detail area in the footer:

  `<time datetime="YYYY-MM-ddThh:mm">...</time>`

- [x] A Japanese sentence added within the detail area in the footer and language attribute set to Japanese:

  `lang="ja"` attribute

- [x] Last update text made as a small print/side comment within the detail area in the footer:

  `<small>...</small>`

- [x] Content (textual) adjusted to the changes

- [x] Source codes added as code blocks / snippets to the created source code (code.html) and changelog (changelog.html) pages using the [PrismJS syntax highlighter library](https://prismjs.com/):

  `<kbd>...</kbd>`

  `<pre>...</pre>` with `<code class="language-...">...</code>` within

  `<var>...</var>`

  `<samp>...</samp`

- [x] Changelog (changelog.md) converted to HTML code, adjusted and added to the created changelog page (changelog.html)

- [x] 404 page created and adapted (404.html)

### &lt;/body&gt;


---


## &#123; &#125; CSS

- [x] Using the @font-face ruleset in the created external stylesheet (fonts.css) to include and load the web fonts in use (woff, woff2 and variable):

  `@font-face {...}`

- [x] External stylesheet, internal stylesheet and inline styling added to demonstrate them

- [x] Default margin & padding set to 0 ("reset stylesheet") with internal stylesheet using the universal selector:

  `* { margin: 0; padding: 0; }`

- [x] Standard box model (content-box) changed to alternative box model for all elements in the document:

  `box-sizing: border-box;`

- [x] Natural (intrinsic) and extrinsic (given size) sizes of elements now in use

- [x] More values and units now in use (absolute and relative lengths, percentages, numbers)

- [x] CSS functions now in use

- [x] Different color values now in use (rgb / rgba, hexadecimal, color keywords)

- [x] Global colors and padding set with variables

- [x] Type (tag / element), class and ID selectors now in use

- [x] Selector lists now in use

- [x] Descendant, child, adjacent and general sibling combinators now in use:

  ` `, `>`, `+` and `~`

- [x] Animations using `@keyframes` at-rules now in use for the typewriter, blinking caret and glitch effect:

  `animation: typing 6s steps(var(--characters)) infinite;`

  `animation: blink 1s step-end infinite;`

- [x] Calc functions now in use to perform calculations (e.g. for values not known at a certain time):

  `calc(...)`

- [x] Backgrounds added (background shorthand property and background longhand properties)

- [x] Borders added (border shorthand property and border longhand properties)

- [x] Fallback width of the body added for browsers that do not support the vw unit:

  `width: 90%;`

- [x] Green shadow styled left and right to the body:

  `box-shadow: 5px 5px 10px rgba(15, 181, 94, 0.7), -5px -5px 10px rgba(15, 181, 94, 0.7);`

- [x] Hyperlinks styled with pseudo-class selectors:

  `a:link`, `a:visited`, `a:focus`, `a:hover` and `a:active`

- [x] SVG icon attached to external hyperlinks with an attribute selector and a special pseudo-element selector:

  `a[href^="https"]::after`

- [x] Images and main heading (`<h1>`) will now rotate a bit on hover:

  `transform: rotate(0.005turn);`

  `transform: rotate(-1deg);`

- [x] Main heading (`<h1>`) set as inline box (outer display type) so that the click easter egg really only affects the text and not the full width:

  `display: inline;`

- [x] Main heading (`<h1>`) wrapped in a div container to center it with an inner display type:

  `display: flex;`

  `justify-content: center;`

- [x] Subheading (`<h2>`) color set to whitesmoke with inline styling:

  `style="color:whitesmoke;"`

- [x] Blur filter added to the JavaScript code image to hide the click easter egg:

  `filter: blur(5px);`

- [x] Writing modes (block & inline dimensions) changed to vertical left-to-right for the sidebar and right-to-left for the Japanese sentence:

  `writing-mode: vertical-lr;`

  `writing-mode: vertical-rl;`

- [x] Transitions now in use:

  `transition: <property> <duration> <timing-function> <delay>;`

- [x] Text content styled (headings, paragraphs, lists, captions, quotes etc.)

- [x] Page layout styled (using flex, grid, multicol, positioning, floating etc.)

- [x] Visual / functional content styled (images, table, button etc.)

- [x] The page is now full responsive (using media queries, meta viewport, layout techniques etc.)

- [x] Vendor prefixes added with the [Autoprefixer CSS online tool](https://autoprefixer.github.io/) for optimal compatibility / browser support


---


## &#125; &#041; ; JavaScript

- [x] [jQuery library](https://jquery.com/) now in use and code rewritten using its syntax

- [x] [PrismJS syntax highlighter library](https://prismjs.com/) now in use for the created source code (code.html) and changelog (changelog.html) pages

- [x] [Image Map Resizer library](https://github.com/davidjbradshaw/image-map-resizer/) now in use so that the image map works repsonsive:

  `$('map').imageMapResize();`

- [x] At a given scrolling value (defined in a function) the class "scrolled" is now set on the body

- [x] A variable (and logic for the HTML and CSS) for the text of the typewriter effect declared:

  `const text = 'glmvc';`

  `$('#typewriter-text').html(text);`

  `$('#typewriter-text').css('--characters', text.length + 6);`

- [x] Clicking on the new navigation icon will toggle a class "open" to it and the class "nav-open" to the body:

  `$('body').toggleClass('nav-open');`

  `$(this).toggleClass('open');`

- [x] The username input for the personalized welcome message is now limited to a certain number of characters:

  `let maxLength = 50;`

  `let userName = -1;`

  `while (userName == -1 || (userName != null && userName.length > maxLength)) { userName = window.prompt(...) }`

- [x] Image map and figure caption now also changing accordingly on clicking the images:

  `let imageMap;` declares global variable

  `imageMap = $('map').detach();` inside the if statement: removes the map element from the dom, but keeps its data

  `$('img').before(imageMap);` inside the else statement: restores the map element with its data before the img element

  `myCaption.html('...');` inside the if and else conditional statements: for the correct figure caption

- [x] Audio volume of the audio element now set to 50%:

  `let audio = document.getElementById('audio');`

  `audio.volume = 0.5;`


---


## &#10024; For The Future

- [ ] Scroll to top button

- [ ] Meter/progress bars

- [ ] (Contact) form example

- [ ] Dark- and Lightmode switcher

- [ ] Last edited date and time within the detail area in the footer is now updating automatically

- [ ] Birthday banner added to show on December 6 every year as a small easter egg
