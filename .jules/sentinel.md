## 2024-02-14 - [XSS in EPUB Status Messages]
**Vulnerability:**
A Stored XSS vulnerability was found in the `processEPUB` function's status reporting mechanism. The application processes filenames and other metadata from EPUB files (which are untrusted inputs) and displays processing status messages in a list. These messages, which included the unsanitized filenames and metadata, were rendered into the DOM using `innerHTML` without escaping.

Example payload: An EPUB file with a filename like `"><img src=x onerror=alert(1)>` would trigger XSS when the success/error message "Fixed encoding for file ..." was displayed.

**Learning:**
Even when the primary output is sanitized (filenames in headers were escaped), auxiliary outputs like status logs or error messages that incorporate user input must also be treated as untrusted. The use of template literals to build HTML strings makes it easy to accidentally include raw input.

**Prevention:**
Always sanitize variables interpolated into HTML strings, even if they seem like internal status messages. Better yet, build DOM elements using `textContent` or `innerText` instead of constructing HTML strings, or use a secure templating system that auto-escapes. In this case, we switched to using `document.createElement()` and `textContent` to safely build the list.
