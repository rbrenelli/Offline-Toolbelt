## 2024-05-23 - XML Injection via innerHTML
**Vulnerability:** The application used `innerHTML` to set text content of XML elements (`dc:language`) in `script.js`. This allows XML injection if the user input contains XML tags.
**Learning:** Even when working with `DOMParser` in XML mode, `innerHTML` can still parse and inject markup.
**Prevention:** Always use `textContent` when setting text values in XML/HTML documents to ensure proper escaping.
