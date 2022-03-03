# :clipboard: Changelog

## :gear: General
- [x] Space (Tab-Size) changed from 4 to 2 spaces (personal preference)
- [x] HTML, CSS and JavaScript comments explained in more detail
- [x] Code structures improved with comments and "separators"

---

## < / > HTML
### `<head>`
- [x] Document language set to English (US):

  `<html lang="en-US">`

- [x] Document text direction set to left-to-right:

  `<html dir="ltr">`

- [x] Additional meta data added (author, description, viewport, Facebook Open Graph Data and Twitter Card):

  `<meta name="author" content="glmvc">`

  `<meta name="description" content="The upgraded version of my first site!">`

  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

  `<meta property="og:type" content="website">`

  `<meta property="og:url" content="https://glmvc.github.io/first-site-upgrade/">`

  `<meta property="og:title" content="My Upgraded First Site">`

  `<meta property="og:description" content="The upgraded version of my first site!">`

  `<meta property="og:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png/">`

  `<meta property="twitter:card" content="summary_large_image">`

  `<meta property="twitter:url" content="https://glmvc.github.io/first-site-upgrade/">`

  `<meta property="twitter:title" content="My Upgraded First Site">`

  `<meta property="twitter:description" content="The upgraded version of my first site!">`

  `<meta property="twitter:image" content="https://glmvc.github.io/first-site-upgrade/images/hello-world.png/">`

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

- [x] New script (jQuery library) added script loading strategy changed (now within the head + defer attribute):

  `<script src="scripts/jquery-3.6.0.min.js"></script>`

  `<script src="scripts/main.js" defer></script>`
### `</head>`


### `<body>`
- [x] Accessibility aspects changed and added where they were wrong/missing

- [x] Semantic elements used appropriately

- [x] Semantic elements for structuring content now in use:

  `<header>...</header>` with `<nav>...</nav>` within

  `<main>...</main>` with `<aside>...</aside>`, multiple `<section>...</section>`'s and `<div>...</div>` containers within

  `<footer>...</footer>`

- [x] Horizontal rules added to divide the sections:

  `<hr>`

- [x] SVG logo added inline within the header (with hyperlink):

  `<svg width="100" height="100" viewBox="0 0 276 255" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>`

- [x] Outgoing hyperlinks changed so that they open in a new tab instead of the current one:

  `target="_blank"` attribute

- [x] Title attribute added to hyperlinks and images so hovering over them will open a descriptive tooltip:

  `title="link or image description"` attribute

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

- [x] Video added within the main content (with fallback):

  `<video controls muted autoplay loop preload="auto" width="400">...</video>`

- [x] Figure and figure caption added to the images and video:

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

  `<address>`

  `href="tel:..."` and `href="mailto:..."` attributes

- [x] Iframe for a map (from OpenStreetMap) added within the address:

  `<iframe src="https:..." width="400" height="300" style="border:0;" loading="lazy"></iframe>`

- [x] Addditional page information added within a detail area with a summary text:

  `<details>...</details>` with `<summary>Info</summary>` within

- [x] Superscript added for the birthdate of the page within the footer:

  `<sup>...</sup>`

- [x] Subscript added for the chemical formula within the footer:

  `<sub>...</sub>`

- [x] Date and time added for the last update and the birthdate of the page within the footer:

  `<time datetime="YYYY-MM-ddThh:mm">...</time>`

- [x] A Japanese sentence added within the footer and language attribute set to Japanese:

  `lang="ja"` attribute

- [x] Last update text made as a small print/side comment:

  `<small>...</small>`

- [x] Textual content adjusted to the changes

- [ ] Source codes added as code blocks to the created source code page (code.html): 

  `<pre>...</pre>` with `<code>...</code>` within

  `var`

  `kbd`

  `samp`

- [ ] Changelog (changelog.md) converted to HTML code and added to the created changelog page (changelog.html)

- [ ] 404 page created (404.html)
### `</body>`

---

## &#123; &#125; CSS
- [x] Using the @font-face ruleset in the created external stylesheet (fonts.css) to include and load the web fonts in use (woff, woff2 and variable):

  `@font-face {...}`

- [x] External stylesheet, internal stylesheet and inline styling added to demonstrate them

- [x] Default margin & padding set to 0 ("reset stylesheet") with internal stylesheet using the universal selector:

  `* { margin: 0; padding:0; }`

- [x] Standard box model (content-box) changed to alternative box model for all elements in the document:

  `box-sizing: border-box;`

- [x] Natural (intrinsic) and extrinsic (given size) sizes of elements now in use

- [x] More values and units now in use (absolute and relative lengths, percentages, numbers)

- [x] CSS functions now in use

- [x] Different color values now in use (rgb; rgba; hexadecimal rgb, color keywords)

- [x] Global colors and padding set with variables

- [x] Type (tag/element), class and ID selectors now in use

- [x] Selector lists now in use

- [x] Descendant, child, adjacent and general sibling combinators now in use:

  ` `, `>`, `+` and `~`

- [x] Calc functions now in use to perform calculations for certain things (e.g. values) not known at the particular time:

  `calc(...)`

- [x] Backgrounds added (background shorthand property and background longhand properties)

- [x] Fallback width of the body added for browsers that do not support the vw unit:

  `width: 1024px;` instead of `width: 90vw;`

- [x] Green shadow styled left and right to the body:

  `box-shadow: 5px 5px 10px rgba(15, 181, 94, 0.7), -5px -5px 10px rgba(15, 181, 94, 0.7);`

- [x] Mobile navigation and its icon styled

- [x] Hyperlinks styled with pseudo-class selectors:

  `a:link`, `a:visited`, `a:focus`, `a:hover` and `a:active`

- [x] SVG icon attached to external hyperlinks with an attribute selector and a special pseudo-element selector:

  `a[href^="https"]::after`

- [x] Images and main heading (`<h1>`) will now rotate a bit on hover:

  `transform: rotate(0.005turn);`

  `transform: rotate(-1deg);`

- [x] Main heading (`<h1>`) set as inline box (outer display type) so that the click function really only affects the text and not the full width:

  `display: inline;`

- [x] Main heading (`<h1>`) wrapped in a div container to center it with an inner display type:

  `display: flex;`

  `justify-content: center;`

- [x] Subheading (`<h2>`) color set to whitesmoke with inline styling:

  `style="color:whitesmoke;"`

- [x] Blur filter added to the JavaScript code image to hide the click easter egg:

  `filter: blur(5px);`

- [x] Borders added (border shorthand property and border longhand properties)

- [x] Writing modes (block & inline dimensions) changed to vertical left-to-right for the sidebar and right-to-left for the Japanese sentence:

  `writing-mode: vertical-lr;`

  `writing-mode: vertical-rl;`

- [x] Transitions now in use:

  `transition: <property> <duration> <timing-function> <delay>`

- [ ] Text content styled (headings, paragraphs, lists, captions, quotes etc.)

- [ ] Page layout styled (using flex, grid, multicol, positioning, floating etc.)

- [ ] Visual/functional content styled (images, table, button etc.)

- [ ] The page is now full responsive (using media queries, meta viewport etc.)

- [ ] Vendor prefixes added where necessary for optimal compatibility / browser support

---

## &#125; &#041; ; JavaScript
- [x] jQuery library now in use and code rewritten using its syntax

- [x] Figure caption now also changing accordingly on clicking the images

- [x] The current page in the navigation is now styled with the CSS class "active" on click

- [x] Clicking on the new navigation icon will toggle a class "open" to it and the class "nav-open" to the body

- [x] Audio volume of the audio element now set to 50%

- [ ] Birthday Banner added to show on December 6 every year as a small easter egg

- [ ] Last edited date and time is now updating automatically