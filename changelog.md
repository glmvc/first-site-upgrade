# :clipboard: Changelog

This changelog refers to the differences / changes between the [first site (previous version)](https://github.com/glmvc/first-site "First site") and the upgraded version of it here.

## :gear: General

- [x] **Space indentation** *changed* from four to two spaces (personal preference)

- [x] A **newline** *added* at the end of each file (best practice)

- [x] HTML, CSS and JavaScript **comments** *explained* in more detail

- [x] **Code structure** *improved* with comments

- [x] Useful **tools** and **libraries** *now in use*


---


## &lt; / &gt; HTML

### &lt;head&gt;

- [x] Document **language** *set* to English (US):

  `<html lang="en-US">`

- [x] Document **text direction** *set* to left-to-right:

  `<html dir="ltr">`

- [x] Additional **meta data** *added* (author, description, viewport, theme-color, Facebook Open Graph Data and Twitter Card):

  `<meta name="author" content="glmvc">`

  `<meta name="description" content="The upgraded version of my first site!">`

  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

  `<meta name="theme-color" content="#0fb55e">`

  `<meta property="og:type" content="website">`

  `<meta property="og:url" content="https://glmvc.github.io/first-site-upgrade">`

  `<meta property="og:title" content="My Upgraded First Site">`

  `<meta property="og:description" content="The upgraded version of my first site!">`

  `<meta property="og:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png">`

  `<meta property="og:image:alt" content="A cartoon view of the earth saying hello and the moon">`

  `<meta name="twitter:card" content="summary_large_image">`

  `<meta name="twitter:url" content="https://glmvc.github.io/first-site-upgrade">`

  `<meta name="twitter:title" content="My Upgraded First Site">`

  `<meta name="twitter:description" content="The upgraded version of my first site!">`

  `<meta name="twitter:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png">`

  `<meta name="twitter:image:alt" content="A cartoon view of the earth saying hello and the moon">`

  `<meta name="twitter:site" content="@glmvc">`

  `<meta name="twitter:creator" content="@glmvc">`

- [x] Document **title** *changed* to "My Upgraded First Site":

  `<title>My Upgraded First Site</title>`

- [x] **Linking** to the new [normalize.css](https://necolas.github.io/normalize.css/ "Normalize.css homepage") file *added*:

  `<link rel="stylesheet" href="styles/normalize.css">`

- [x] **Linking** to [Google's online font service](https://fonts.google.com/) *removed* and instead **new stylesheet** (`fonts.css`) *linked*:

  `<link rel="stylesheet" href="styles/fonts.css">`

- [x] **Favicons** for multiple device/browser support *added*:

  `<link rel="icon" href="favicon.ico" type="image/x-icon" sizes="any">`

  `<link rel="icon" href="favicon-16x16.png" type="image/png" sizes="16x16">`

  `<link rel="icon" href="favicon-32x32.png" type="image/png" sizes="32x32">`

  `<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">`

  `<link rel="manifest" href="site.webmanifest">`

- [x] **Internal stylesheet** *added* (just for demonstration):

  `<style>...</style>`

- [x] New **scripts** ([jQuery](https://jquery.com/ "jQuery homepage") & [Image Map Resizer](https://github.com/davidjbradshaw/image-map-resizer "Image Map Resizer GitHub repository") library) *added* and **script loading strategy** *changed* (now within the head + `defer` attribute for `main.js`):

  `<script src="scripts/jquery-3.6.0.min.js"></script>`

  `<script src="scripts/imageMapResizer.min.js"></script>`

  `<script src="scripts/main.js" defer></script>`

- [x] [PrismJS syntax highlighter library](https://prismjs.com/ "PrismJS homepage") **CSS and JavaScript** files *linked* in the created source code (`code.html`) and changelog (`changelog.html`) documents:

  `<link rel="stylesheet" href="styles/prism.css">`

  `<script src="scripts/prism.js"></script>`

### &lt;/head&gt;


### &lt;body&gt;

- [x] **Content** (textual) *adjusted* to the changes

- [x] **Accessibility** (A11y) aspects *improved* and *added* where they were missing

- [x] **Semantic elements** *used* appropriately

- [x] **Semantic elements** for structuring content *now in use*:

  `<header>...</header>` with `<nav>...</nav>` within

  `<main>...</main>` with `<aside>...</aside>` and multiple `<section>...</section>`'s within

  `<div>...</div>`

  `<span>...<span>`

  `<footer>...</footer>`

- [x] **Horizontal rules** *added* to divide the sections:

  `<hr>`

- [x] **SVG logo** *added* inline within the header (within a hyperlink to the homepage):

  `<svg width="276" height="255" viewBox="0 0 276 255" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>` with `<path .../>`'s within

- [x] Two `div` **container** *added* after the SVG logo for text with a typewriter effect (using CSS and JavaScript)

- [x] **Navigation** with hyperlinks to the homepage and other HTML documents (`index.html`, `code.html`, `changelog.html` and previous `index.html`) *added* within the header:

  `<nav>...</nav>`

- [x] A `button` element for the **mobile navigation** *added* with ten `span` elements for the icon within:

  `<button id="nav-icon" aria-controls="primary-nav" aria-expanded="false">`

- [x] If JavaScript is disabled, a **warning message** will be *displayed now*:

  `<noscript>...</noscript>`

- [x] **Outgoing hyperlinks** *adapted* with the `target` attribute so that they open in a new tab instead of the current one:

  `target="_blank"` attribute

- [x] A `title` attribute *added* to hyperlinks and images to give them **advisory information** (hovering over them will also open a **descriptive tooltip**):

  `title="description"` attribute

- [x] **Sidebar** with hyperlinks to social media accounts *added*:

  `<aside>...</aside>`

- [x] **Character references** for emojis *added* within the sidebar:

  `&#128025;` and `&#128038;`

- [x] **Character entity references** *added* instead of HTML syntax characters:

  `&amp;`, `&apos;`, `&quot;`, `&lt;` and `&gt;`

- [x] The image *is now* an **image map with hyperlink-areas**:

  `<map name="hello-world">...</map>`

  `<area alt="alternative text" title="point map title" href="https..." target="_blank" shape="circle" coords="x,y,radius">`

- [x] **Quotations and citation** *added* within the main content:

  `<blockquote>...</blockquote>` and `<q>...</q>` with `cite` attribute

  `<cite>...</cite>`

- [x] **Important text content** *marked*:

  `<mark>...</mark>`

- [x] **Line breaks** *added* to make paragraphs easier to read:

  `<br>`

- [x] **Emphasis** and **importance** *added* for certain words and text passages:

  `<em>...</em>`

  `<strong>...</strong>`

- [x] **Video** *added* within the main content (with a fallback):

  `<video width="400" controls muted playsinline autoplay loop preload="auto">...</video>`

  `<source src="videos/hello-world.mp4" type="video/mp4">`

  `<source src="videos/hello-world.webm" type="video/webm">`

  `<p>Your browser doesn't support HTML 5 video. Here is a <a href="videos/hello-world.mp4">link to the video</a> instead.</p>`

- [x] **Description list** *added* to introduce HTML, CSS and JS:

  `<dl>...</dl>` with `<dt>...</dt>` and `<dd>...</dd>` within

- [x] **Abbreviations** *added* to abbreviate HTML, CSS and JS:

  `<abbr title="abbreviation title">...</abbr>`

- [x] A **nested unordered list** *added*

- [x] A **complex table** about planet data *added*:

  `<table>...</table>` with `<caption>...</caption>`, `<colgroup>...</colgroup>`, `<col>...</col>`, `<thead>...</thead>`, `<tbody>...</tbody>`, `<tr>...</tr>`, `<th>...</th>`, `<td>...</td>` and `<tfoot>...</tfoot>` within

- [x] Further sources *added* to an **ordered list**

- [x] A **soundtrack** *added* within the footer (with a fallback):

  `<audio id="audio" controls loop preload="auto">...</audio>`

  `<source src="audios/cyberpunk.mp3" type="audio/mp3">`

  `<source src="audios/cyberpunk.ogg" type="audio/ogg">`

  `<p>Your browser doesn't support HTML 5 audio. Here is a <a href="audios/cyberpunk.mp3">link to the audio</a> instead.</p>`

- [x] **Figure** and **figure caption** *added* to the image map, video and audio:

  `<figure>...</figure>`

  `<figcaption>...</figcaption>`

- [x] Contact details (fake) *added* as an **address** within the footer:

  `<address>...</address>`

  `href="tel:..."` and `href="mailto:..."` attributes

- [x] **Iframe** for a map (from [Google Maps](https://www.google.com/maps/about/#!/ "Google Maps about page")) *added* within the address in the footer:

  `<iframe title="Google Maps Location" src="https:..." width="400" height="300" style="border: 0;" loading="lazy"></iframe>`

- [x] **Addditional website information** *added* within a detail area with a summary text in the footer:

  `<details>...</details>` with `<summary>Info</summary>` within

- [x] **Superscript** *added* for the numbers within the table and birthdate of the website within the detail area in the footer:

  `<sup>...</sup>`

- [x] **Subscript** *added* for the chemical formula within the detail area in the footer:

  `<sub>...</sub>`

- [x] **Date** and **time** *added* for the last update and the birthdate of the website within the detail area in the footer:

  `<time datetime="YYYY-MM-ddThh:mm">...</time>`

- [x] A **Japanese sentence** *added* within the detail area in the footer and `language` attribute *set* to Japanese:

  `lang="ja"` attribute

- [x] Last update text and date *added* as a **small side comment** within the detail area in the footer:

  `<small>...</small>`

- [x] **Source codes** *escaped* for HTML and *added* as code blocks / snippets to the created source code (`code.html`) and changelog (`changelog.html`) documents using the [PrismJS syntax highlighter library](https://prismjs.com/ "PrismJS homepage"):

  `<kbd>...</kbd>`

  `<pre>...</pre>` with `<code class="language-...">...</code>` within

  `<var>...</var>`

  `<samp>...</samp`

- [x] Changelog (`changelog.md`) *converted* to **HTML code**, *adjusted* and *added* to the created changelog (`changelog.html`) document

- [x] **404 document** (`404.html`) *created* and *adapted*

### &lt;/body&gt;


---


## &#123; &#125; CSS

- [x] `@font-face` rulesets in the created external stylesheet (`fonts.css`) *now in use* to *include* and *load* the **web fonts** that are used (eot, woff2, woff, ttf, svg and variable):

  `@font-face {...}`

- [x] **External stylesheets**, **internal stylesheet** and **inline styling** *added* (internal and inline styling just for demonstration)

- [x] Default **margin** & **padding** *set* to 0 ("reset stylesheet") with the internal stylesheet using the universal selector (`*`):

  `* {margin: 0; padding: 0;}`

- [x] **Type** (tag / element), **class** and **ID selectors** *now in use*

- [x] **Selector lists** (bad practice as an example too) *now in use*

- [x] **Descendant**, **child**, **adjacent** and **general sibling combinators** *now in use*:

  ` `, `>`, `+` and `~`

- [x] CSS **functions** *now in use*

- [x] **Natural** (intrinsic) and **extrinsic** (given size) sizes of elements *now in use*

- [x] More **values** and **units** *now in use* (absolute and relative lengths, percentages, numbers etc.)

- [x] Different **color values** *now in use* (rgb / rgba, hexadecimal, color keywords etc.)

- [x] Global website **colors** and **spacings** *set* with variables using the `:root` pseudo-class:

  `:root {...}`

- [x] Standard box model (`content-box`) *changed* to the **alternative box model** (`border-box`) for all elements in the document:

  `html {box-sizing: border-box;}`

  `*, *::before, *::after {box-sizing: inherit;}`

- [x] **Font size** of the `html` element *set* to 62.5% (because it's equal to 10px in most browsers) to make it easier to calculate `rem` units:

  `html {font-size: 62.5%;}`

- [x] Special pseudo-element for styling **selections** / **highlighting** *now in use*:

  `::selection`

- [x] Special pseudo-element for styling **marker boxes** *now in use*:

  `::marker`

  `summary::marker`

- [x] **Horizontal overflow** *set* to hidden on the `body` element because of unwanted horizontal scrolling especially on mobile devices:

  `overflow-x: hidden;`

- [x] **Scrollbar** of the `body`, `pre` and `.table-wrapper` elements *styled* using WebKit extensions:

  `body::-webkit-scrollbar {...}`

  `body::-webkit-scrollbar-track {...}`

  `body::-webkit-scrollbar-thumb {...}`

- [x] **Backgrounds** *added* (background shorthand and longhand properties)

- [x] **Borders** *added* (border shorthand and longhand properties)

- [x] **Fallback width** for the `.page-wrapper` container *added* for browsers that do not support the `vw` unit:

  `width: 90%;`

- [x] **Green shadow** *styled* left and right of the `.page-wrapper` container:

  `box-shadow: 5px 0 10px rgba(15, 181, 94, 0.8), -5px 0 10px rgba(15, 181, 94, 0.8);`

- [x] **Utility classes** and **rulesets** *created* for repeating CSS tasks like horizontal centering of elements for example:

  `.center {margin-right: auto; margin-left: auto;}`

- [x] **Transitions** *now in use*:

  `transition: <property> <duration> <timing-function>;`

- [x] **Mouse cursor type** *changed* accordingly and as needed:

  `cursor: not-allowed;`

  `cursor: help;`

  `cursor: pointer;`

  `cursor: crosshair;`

- [x] **Text content** *styled* (headings, paragraphs, lists, captions, quotes etc.)

- [x] **Hyperlinks** *styled* with pseudo-class selectors:

  `a:link`, `a:visited`, `a:focus`, `a:hover` and `a:active`

- [x] SVG icon *attached* to **external hyperlinks** with an attribute selector and a special pseudo-element selector:

  `a[href*="http"]::after`

- [x] **Visual** / **functional content** *styled* (images, table, button etc.)

- [x] Website **layout** *styled* (using flex, grid, multicol, positioning, floating etc.)

- [x] **Calc functions** *now in use* to perform calculations:

  `calc(...)`

- [x] **Animations** using `@keyframes` at-rules *now in use* for the glitch, typewriter and blinking caret effect:

  `animation: glitch 600ms infinite;`

  `animation: typing 6s steps(var(--characters)) infinite;`

  `animation: blink 1s step-end infinite;`

- [x] **Main heading** (`<h1>`) and **images** *will now rotate* a bit on hover:

  `transform: rotate(-1deg);`

  `transform: rotate(0.005turn);`

- [x] **Main heading** (`<h1>`) *set* as inline box (outer display type) so that the click easter egg really only affects the text and not the full width:

  `display: inline;`

- [x] **Main heading** (`<h1>`) *wrapped* in a `.flex` container (using the according utility class) to center it with an inner display type:

  `display: flex;`

  `justify-content: center;`

- [x] **Subheading** (`<h2>`) **color** *set* to `whitesmoke` with inline styling (just for demonstration):

  `style="color: whitesmoke;"`

- [x] **Blur filter** *added* to the JavaScript code image to hide the click easter egg:

  `filter: blur(5px);`

- [x] **Writing modes** (block & inline dimensions) *changed* to vertical right-to-left for the Japanese sentence and left-to-right for the sidebar:

  `writing-mode: vertical-rl;`

  `writing-mode: vertical-lr;`

- [x] **Borders of the table** are *styled* to collapse:

  `table {border-collapse: collapse;}`

- [x] **Caption of the table** *positioned* to the bottom (visually):

  `table caption {caption-side: bottom;}`

- [x] *Adjusted* how **whitespace** and **word breaking** / **wrapping** are treated:

  `white-space: nowrap;`

  `word-wrap: break-word;`

  `overflow-wrap: break-word;`

- [x] The website *is now* **full responsive** (using media queries, meta viewport, layout techniques etc.)

- [x] `@supports` at-rule *now in use* to specify declarations that depend on a browser's **support for a specific CSS feature**:

  `@supports not (inset: 0) {...}`

- [x] Website *styled* to be **printable**:

  `@media print {...}`

- [x] Users who set the settings to **minimize the amount of non-essential motion** *are respected* by turning off all animations, transitions and the like:

  `@media (prefers-reduced-motion: reduce) {...}`

- [x] **Vendor prefixes** *added* with the [Autoprefixer CSS online tool](https://autoprefixer.github.io/ "Autoprefixer CSS online tool website") for optimal compatibility / browser support


---


## &#125; &#041; ; JavaScript

- [x] [jQuery library](https://jquery.com/ "jQuery homepage") *now in use* and most code in `main.js` rewritten using its syntax

- [x] [PrismJS syntax highlighter library](https://prismjs.com/ "PrismJS homepage") *now in use* for the created source code (`code.html`) and changelog (`changelog.html`) documents

- [x] [Image Map Resizer library](https://github.com/davidjbradshaw/image-map-resizer/ "Image Map Resizer GitHub repository") *now in use* so that the image map works responsive:

  `$('map').imageMapResize();`

- [x] At a **given scrolling value** (defined in the `checkScroll` function) the class `scrolled` *is now set* on the `body` element:

  `if ($(window).scrollTop() > 23) {$('body').addClass('scrolled');}`

  `else {$('body').removeClass('scrolled');}`

- [x] The `checkScroll` function is *called* on the document `scroll` event:

  `$(window).on('scroll', function () { checkScroll(); });`

- [x] A **variable** and HTML and CSS **logic** for the text of the typewriter effect *declared*:

  `const text = 'glmvc';`

  `$('#typewriter-text').html(text);`

  `$('#typewriter-text').css('--characters', text.length + 6);`

- [x] Clicking on the **navigation icon** (`button`) will *toggle* the class `open` to it and the class `nav-open` to the `body` element:

  `$(this).toggleClass('open');`

  `$('body').toggleClass('nav-open');`

- [x] Clicking on the **navigation icon** (`button`) will also *change* the `aria-expanded` attribute accordingly:

  `let isExpanded = $(this).attr('aria-expanded');`

  `if (isExpanded === 'false') {$(this).attr('aria-expanded', 'true');}`

  `else {$(this).attr('aria-expanded', 'false');}`

- [x] The **username input** for the **personalized welcome message** *is now limited* to a certain number of characters:

  `let maxLength = 50;`

  `let userName = -1;`

  `while (userName == -1 || (userName != null && userName.length > maxLength)) { userName = window.prompt(...) }`

- [x] **Image map** and **figure caption** *now changing* accordingly on clicking the images:

  `let imageMap;` declares global variable

  `imageMap = $('map').detach();` inside the if statement: removes the map element from the dom, but keeps its data

  `$('img').before(imageMap);` inside the else statement: restores the map element with its data before the img element

  `$('img + figcaption').html('...');` inside the if and else conditional statements: for the correct figure caption

- [x] **Audio volume** of the `audio` element *set* to 50%:

  `let audio = document.getElementById('audio');`

  `audio.volume = 0.5;`


---


## &#10024; For The Future

- [ ] **Scroll to top button**

- [ ] **Meter/progress bars**

- [ ] **(Contact) form example**

- [ ] **Dark- and Lightmode switcher**

- [ ] *Update* **last edited date** and **time** within the detail area in the footer *automatically*

- [ ] *Add* **birthday banner** to show on December 6 every year as a small easter egg
