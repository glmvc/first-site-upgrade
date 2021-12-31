# :clipboard: Changelog

### :gear: General
- [x] Space (Tab-Size) changed from 4 to 2 spaces (personal preference)
- [x] HTML, CSS and JavaScript Comments explained in more detail

---

### HTML
- [x] HTML document language set to English (US): &lt;html lang=&quot;en-US&quot;&gt;
- [x] Meta description and author set within the head: &lt;meta name=&quot;author&quot; content=&quot;glmvc&quot;&gt; &amp; &lt;meta name=&quot;description&quot; content=&quot;My Upgraded First Site&quot;&gt;
- [x] Document title changed to &quot;My Upgraded First Site&quot; within the head: &lt;title&gt;My Upgraded First Site&lt;/title&gt;
- [x] Favicon set within the head: &lt;link rel=&quot;icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;
- [x] Script loading strategy changed and the script tag is know within the head: &lt;script src=&quot;scripts/main.js&quot; defer&gt;&lt;/script&gt;
- [x] Outgoing hyperlinks changed so that they open in a new tab instead of the current one: target=&quot;_blank&quot; attribute
- [x] Title attribute added to hyperlinks so hovering over them will open a descriptive tooltip: title=&quot;description&quot; attribute
- [x] Figure and figure caption added under the image as a source: &lt;figure&gt;; &lt;figcaption&gt;
- [x] Quotations and citation added: &lt;blockquote&gt;; &lt;q&gt;; cite attribute; &lt;cite&gt;
- [x] Line breaks added to make paragraphs easier to read: &lt;br&gt;
- [x] Horizontal rules added to divide some sections: &lt;hr&gt;
- [x] Description list added to introduce HTML, CSS and JS: &lt;dl&gt;; &lt;dt&gt;; &lt;dd&gt;
- [x] Abbreviations added to abbreviate HTML, CSS and JS: &lt;abbr&gt;
- [x] Character entity references added instead of HTML syntax characters: &amp;amp; &amp;apos; &amp;quot; &amp;lt; &amp;gt;
- [x] Emojis added with character references: &amp;#128025; &amp;#128038;
- [x] Header, navigation, main (with section), sidebar and footer sections added
- [x] Social Media profiles with links added to the sidebar
- [x] Fake contact details added to the footer as an nested list with mailto: &amp; tel: inside the href attribute: &lt;address&gt;; href=&quot;tel:+12065550100&quot;; href=&quot;mailto: mail@example.com&quot;
- [x] Superscript and subscript added for a birthdate and a chemical formula within the footer: &lt;sup&gt; &amp; &lt;sub&gt;
- [x] A Japanese sentence added within the footer and language attribute set to Japanese: lang=&quot;ja&quot; attribute
- [x] Time and date added for the last update of the page inside the footer: &lt;time datetime=&quot;2021-12-31T19:30&quot;&gt;December 31, 2021&lt;/time&gt;
- [ ] Code block added (code, pre, var, kbd, samp)
- [x] Accessibility aspects changed and added where they were missing

---  

### CSS
- [x] Structure improved with comments and separators & organized by sense
- [x] External stylesheet, internal stylesheet and inline styling added to showcase it
- [x] Default margin & padding set to 0 with internal stylesheet: *{margin:0;padding:0}
- [x] Main heading set to inline-block with inline styling so that the click function really only affects the text and not the full width: display:inline-block;
- [x] Main heading wrapped in a div container to center it: display:flex; justify-content:center;
- [x] Calc function added to the width of the body: width:calc(76% - 50px);
- [x] Fallback width added for browsers that do not support the calc function: width:800px;
- [ ] Global colors changed with variables
- [x] Image will now rotate a bit on hover
- [ ] add background-image gradient
- [ ] add rgba color value
- [ ] add @rule - @media
- [ ] Figure and figure caption styled
- [x] List style types changed or removed
- [ ] Button styled
- [ ] The page is now full responsive (with media queries)

---

### JavaScript
- [x] Figure caption also changing accordingly on clicking the image