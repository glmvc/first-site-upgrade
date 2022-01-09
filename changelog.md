# :clipboard: Changelog

### :gear: General
- [x] Space (Tab-Size) changed from 4 to 2 spaces (personal preference)
- [x] HTML, CSS and JavaScript comments explained in more detail
- [x] Code structures improved with comments and "separators"

---

### HTML
- [x] HTML document language set to English (US): &lt;html lang=&quot;en-US&quot;&gt;
- [x] Meta description and author set within the head: &lt;meta name=&quot;author&quot; content=&quot;glmvc&quot;&gt; &amp; &lt;meta name=&quot;description&quot; content=&quot;My Upgraded First Site&quot;&gt;
- [x] Document title changed to &quot;My Upgraded First Site&quot; within the head: &lt;title&gt;My Upgraded First Site&lt;/title&gt;
- [x] Favicon set within the head: &lt;link rel=&quot;icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;
- [x] Script loading strategy changed and the script element is know within the head: &lt;script src=&quot;scripts/main.js&quot; defer&gt;&lt;/script&gt;
- [x] Outgoing hyperlinks changed so that they open in a new tab instead of the current one: target=&quot;_blank&quot; attribute
- [x] Title attribute added to hyperlinks and the image so hovering over them will open a descriptive tooltip: title=&quot;description&quot; attribute
- [x] A video added to the main content (with fallback video): &lt;video controls muted autoplay loop preload="auto" width="400"&gt;
- [x] Figure and figure caption added to the image and video: &lt;figure&gt;; &lt;figcaption&gt;
- [x] Quotations and citation added: &lt;blockquote&gt;; &lt;q&gt;; cite attribute; &lt;cite&gt;
- [x] Description list added to introduce HTML, CSS and JS: &lt;dl&gt;; &lt;dt&gt;; &lt;dd&gt;
- [x] Nested unordered list added
- [x] Abbreviations added to abbreviate HTML, CSS and JS: &lt;abbr&gt;
- [x] Character entity references added instead of HTML syntax characters: &amp;amp; &amp;apos; &amp;quot; &amp;lt; &amp;gt;
- [x] Emojis added with character references: &amp;#128025; &amp;#128038;
- [x] Header (with navigation), main (with sections &amp; sidebar) and footer structuring added: &lt;header&gt;; &lt;nav&gt;; &lt;main&gt;; &lt;section&gt;; &lt;aside&gt;; &lt;footer&gt;
- [x] Horizontal rules added to divide the sections: &lt;hr&gt;
- [x] Line breaks added to make paragraphs easier to read: &lt;br&gt;
- [x] SVG logo added inline to the header (with hyperlink): &lt;svg&gt;&lt;/svg&gt;
- [x] Social Media profiles with links added to the sidebar
- [x] A complex table about planet data added: &lt;table&gt;&lt;/table&gt;
- [x] Further sources attached to the ordered list
- [x] A soundtrack added to the footer (with fallback audio): &lt;audio controls loop preload="auto"&gt;
- [x] Fake contact details added to the footer: &lt;address&gt;; href=&quot;tel:...&quot; &amp; href=&quot;mailto:...&quot; attributes
- [x] Iframe for a map (from OpenStreetMap) added to the footer: &lt;iframe&gt;
- [x] Superscript added for the birthdate of the page within the footer: &lt;sup&gt;
- [x] Subscript added for the chemical formula within the footer: &lt;sub&gt;
- [x] A Japanese sentence added within the footer and language attribute set to Japanese: lang=&quot;ja&quot; attribute
- [x] Date and time added for the last update and the birthdate of the page within the footer: &lt;time datetime=&quot;YYYY-MM-ddThh:mm&quot;&gt;&lt;/time&gt;
- [x] Textual content adjusted to the changes
- [ ] Source codes added as code blocks to the created source code page (code.html): (pre, code, var, kbd, samp)
- [ ] Changelog converted to HTML code and added to the created changelog page (changelog.html)
- [x] Accessibility aspects changed and added where they were wrong/missing

---  

### CSS
- [x] External stylesheet, internal stylesheet and inline styling added to demonstrate it
- [x] Standard box model (content-box) changed to alternative box model for all elements in the document: box-sizing:border-box;
- [x] Natural (intrinsic) and extrinsic (given size) sizes of elements now in use
- [x] More values and units now in use (absolute and relative lengths; percentages; numbers)
- [x] CSS functions now in use
- [x] Different color values now in use (rgb; rgba; hexadecimal rgb, color keywords)
- [x] Global colors set with variables
- [x] Type (tag/element), class and ID selectors now in use
- [x] Selector lists now in use
- [x] Descendant, child, adjacent and general sibling combinators now in use
- [x] Links styled with pseudo-class selectors
- [x] SVG icon attached to external links with an attribute selector (if link starts with "https://") and a special pseudo-element selector: a[href^="https://"]::after
- [x] Default margin & padding set to 0 ("reset stylesheet") with internal stylesheet using the universal selector: *{margin:0;padding:0}
- [x] Main heading (&lt;h1&gt;) set as inline box (outer display type) so that the click function really only affects the text and not the full width: display:inline;
- [x] Main heading (&lt;h1&gt;) wrapped in a div container to center it with an inner display type: display:flex; justify-content:center;
- [x] Subheading (&lt;h2&gt;) color set to whitesmoke with inline styling: style="color:whitesmoke;"
- [x] Calc function added to the width of the body: width:calc(80vw - 10px);
- [x] Fallback widths added for browsers that do not support the calc function or vw unit: width:80vw;width:1024pxpx;
- [x] Image and main heading (&lt;h1&gt;) will now rotate a bit on hover: transform: rotate(0.005turn); transform: rotate(-0.001turn);
- [x] Backgrounds added (background shorthand property and background longhand properties)
- [x] Borders added (border shorthand property and border longhand properties)
- [x] Writing modes (block & inline dimensions) changed to vertical right-to-left for the sidebar text and the Japanese sentence: writing-mode:vertical-rl;
- [ ] Page layout styled
- [ ] Text content styled (headings, paragraphs, quotes etc.)
- [ ] Visual content styled (image, video etc.) 
- [ ] Figure and figure caption styled
- [ ] Table styled
- [ ] Lists styled (ordered, unordered and description lists)
- [ ] Button styled
- [ ] The page is now full responsive (with media queries)

---

### JavaScript
- [x] Figure caption also changing accordingly on clicking the image
- [ ] Birthday Banner added to show on December 6 every year
- [ ] Last edited date and time is now updating automatically