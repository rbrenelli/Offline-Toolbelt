# Sentinel Journal

This journal records critical security learnings and vulnerability patterns found in the Offline Toolbelt project.

## 2025-02-18 - XSS in EPUB Fixer Status Report
**Vulnerability:** Cross-Site Scripting (XSS) in `script.js`'s `build_output_html` function. The `status` array (containing `fixedProblems` strings) is joined and injected into `innerHTML` without sanitization. Malicious filenames or EPUB metadata could inject scripts.
**Learning:** Even in "offline" tools, handling untrusted input (files) requires strict output encoding. `zip.js` and `DOMParser` do not automatically sanitize content for HTML rendering.
**Prevention:** Always escape data before inserting into `innerHTML`. Used `escapeHtml()` on each item in the status list. Also switched `innerHTML` to `textContent` for XML manipulation to prevent injection into the EPUB itself.
